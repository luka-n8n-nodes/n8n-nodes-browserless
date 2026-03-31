import {
  BinaryFileType,
  IBinaryData,
  IDataObject,
  IExecuteSingleFunctions,
  IHttpRequestOptions,
  IN8nHttpFullResponse,
  INodeExecutionData,
  NodeApiError,
  IPostReceiveBinaryData,
  IPostReceiveFilter,
  IPostReceiveLimit,
  IPostReceiveRootProperty,
  IPostReceiveSet,
  IPostReceiveSetKeyValue,
  IPostReceiveSort,
} from 'n8n-workflow'

interface BrandVersion { brand: string; version: string }

interface UserAgentMetadata {
  brands: BrandVersion[]
  fullVersionList: BrandVersion[]
  fullVersion: string
  platform: string
  platformVersion: string
  architecture: string
  model: string
  mobile: boolean
  bitness: string
  wow64: boolean
}

interface UserAgentObject {
  userAgent: string
  userAgentMetadata?: UserAgentMetadata
  platform?: string
}

function parseUserAgentString (ua: string): UserAgentObject {
  const result: UserAgentObject = { userAgent: ua }

  const platformMatch = ua.match(/\(([^)]+)\)/)
  const platformInfo = platformMatch ? platformMatch[1] : ''

  let platform = ''
  let platformVersion = ''
  let architecture = 'x86'
  let bitness = '64'
  let mobile = /Mobile/i.test(ua)
  let jsPlatform = ''

  if (/Windows NT/i.test(platformInfo)) {
    platform = 'Windows'
    const ntMatch = platformInfo.match(/Windows NT ([\d.]+)/)
    platformVersion = ntMatch ? ntMatch[1] + '.0' : '10.0.0'
    jsPlatform = /Win64|x64|WOW64/i.test(platformInfo) ? 'Win32' : 'Win32'
    bitness = /Win64|x64|WOW64/i.test(platformInfo) ? '64' : '32'
  } else if (/Mac OS X|macOS/i.test(platformInfo)) {
    platform = 'macOS'
    const macMatch = platformInfo.match(/Mac OS X ([\d_]+)/)
    platformVersion = macMatch ? macMatch[1].replace(/_/g, '.') : '14.0.0'
    jsPlatform = 'MacIntel'
  } else if (/Android/i.test(platformInfo)) {
    platform = 'Android'
    const androidMatch = platformInfo.match(/Android ([\d.]+)/)
    platformVersion = androidMatch ? androidMatch[1] : ''
    jsPlatform = 'Linux armv81'
    architecture = 'arm'
    mobile = true
  } else if (/Linux/i.test(platformInfo)) {
    platform = 'Linux'
    platformVersion = ''
    jsPlatform = 'Linux x86_64'
  }

  let browserName = ''
  let fullVersion = ''
  let browserMajor = ''

  const edgeMatch = ua.match(/Edg(?:e|A|iOS)?\/([\d.]+)/)
  const chromeMatch = ua.match(/Chrome\/([\d.]+)/)

  if (edgeMatch) {
    browserName = 'Microsoft Edge'
    fullVersion = edgeMatch[1]
    browserMajor = fullVersion.split('.')[0]
  } else if (chromeMatch) {
    browserName = 'Google Chrome'
    fullVersion = chromeMatch[1]
    browserMajor = fullVersion.split('.')[0]
  }

  if (browserMajor && (chromeMatch || edgeMatch)) {
    const chromiumVersion = chromeMatch ? chromeMatch[1] : fullVersion
    const chromiumMajor = chromiumVersion.split('.')[0]

    result.userAgentMetadata = {
      brands: [
        { brand: browserName, version: browserMajor },
        { brand: 'Chromium', version: chromiumMajor },
        { brand: 'Not/A)Brand', version: '99' },
      ],
      fullVersionList: [
        { brand: browserName, version: fullVersion },
        { brand: 'Chromium', version: chromiumVersion },
        { brand: 'Not/A)Brand', version: '99.0.0.0' },
      ],
      fullVersion,
      platform,
      platformVersion,
      architecture,
      model: '',
      mobile,
      bitness,
      wow64: false,
    }
  }

  if (jsPlatform) {
    result.platform = jsPlatform
  }

  return result
}

export async function preSendTransformUserAgent (
  this: IExecuteSingleFunctions,
  requestOptions: IHttpRequestOptions
): Promise<IHttpRequestOptions> {
  const body = requestOptions.body as IDataObject | undefined
  if (!body) return requestOptions

  const ua = body.userAgent
  if (typeof ua === 'string') {
    if (ua.length > 0) {
      body.userAgent = parseUserAgentString(ua) as unknown as IDataObject
    } else {
      delete body.userAgent
    }
  }

  return requestOptions
}

export async function preSendActionCustonBody (
  this: IExecuteSingleFunctions,
  requestOptions: IHttpRequestOptions
): Promise<IHttpRequestOptions> {
  const { customBody } = requestOptions.body as IDataObject

  if (
    typeof requestOptions.body === 'object' &&
    typeof customBody === 'object'
  ) {
    // @ts-ignore
    requestOptions.body = {
      ...requestOptions.body,
      ...customBody,
    }
    // @ts-ignore
    delete requestOptions.body.customBody
  }

  return Promise.resolve(requestOptions)
}

/**
 * Strip internal Browserless server URLs from error messages.
 * e.g. "link is not defined default (http://0.0.0.0:3000/function/browserless-function-xxx.js:11:3)"
 *   -> "link is not defined (line 11, col 3)"
 */
function cleanBrowserlessError (raw: string): string {
  return raw
    .replace(/\s+default\s+(?=\()/, ' ')
    .replace(
      /\(https?:\/\/[^)]+:(\d+):(\d+)\)/g,
      '(line $1, col $2)',
    )
}

function extractErrorMessage (
  body: IN8nHttpFullResponse['body']
): string | undefined {
  if (!body) return undefined

  if (Buffer.isBuffer(body)) {
    try {
      return extractErrorMessage(JSON.parse(body.toString('utf-8')))
    } catch {
      const text = body.toString('utf-8').trim()
      return text.length > 0 ? cleanBrowserlessError(text) : undefined
    }
  }

  if (typeof body === 'string') return cleanBrowserlessError(body)

  if (typeof body === 'object') {
    const candidates = [
      'message',
      'error',
      'detail',
      'details',
      'reason',
      'description',
      'error_description',
    ]

    for (const key of candidates) {
      const value = (body as IDataObject)[key]
      if (typeof value === 'string' && value.trim().length > 0) {
        return cleanBrowserlessError(value)
      }
    }
  }

  return undefined
}

function httpStatusMessage (statusCode: number): string {
  const messages: Record<number, string> = {
    400: 'Bad request - please check your parameters',
    401: 'Unauthorized - please check your API token',
    403: 'Forbidden - insufficient permissions',
    404: 'Not found - the requested resource does not exist',
    408: 'Request timeout - the operation took too long',
    429: 'Too many requests - rate limit exceeded',
    500: 'Internal server error from Browserless',
    502: 'Bad gateway - Browserless service unavailable',
    503: 'Service unavailable - Browserless is temporarily down',
    504: 'Gateway timeout - Browserless did not respond in time',
  }

  return messages[statusCode] ?? `Browserless API request failed (${statusCode})`
}

export const postReceiveActionHttpErrorDetails: PostReceiveAction =
  async function postReceiveActionHttpErrorDetails (
    this: IExecuteSingleFunctions,
    items: INodeExecutionData[],
    response: IN8nHttpFullResponse
  ): Promise<INodeExecutionData[]> {
    const statusCode = Number(response.statusCode ?? 0)

    if (!Number.isNaN(statusCode) && statusCode >= 400) {
      const body = response.body
      const detail = extractErrorMessage(body)
      const rawDescription = Buffer.isBuffer(body)
        ? body.toString('utf-8')
        : typeof body === 'string'
          ? body
          : JSON.stringify(body ?? {})
      const description = detail ?? cleanBrowserlessError(rawDescription)

      const message = httpStatusMessage(statusCode)

      throw new NodeApiError(
        this.getNode(),
        {
          message,
          statusCode: String(statusCode),
          error: description,
        },
        {
          httpCode: String(statusCode),
          message,
          description,
        }
      )
    }

    return items
  }

 
/* tslint:disable:indent */
export type PostReceiveAction =
  | ((
      this: IExecuteSingleFunctions,
      items: INodeExecutionData[],
      response: IN8nHttpFullResponse
    ) => Promise<INodeExecutionData[]>)
  | IPostReceiveBinaryData
  | IPostReceiveFilter
  | IPostReceiveLimit
  | IPostReceiveRootProperty
  | IPostReceiveSet
  | IPostReceiveSetKeyValue
  | IPostReceiveSort
 
/* tslint:enable:indent */

function getresponseContentType (response: IN8nHttpFullResponse): string {
  return response.headers['content-type'] as string
}

function getFileTypeFromContentType (contentType: string): string {
  const type = contentType.split(';')[0].trim()

  if (type.includes('/')) {
    return type.split('/')[0]
  }

  return type
}

function getFileExtensionFromContentType (contentType: string): string {
  const type = contentType.split(';')[0].trim()

  // any/thing -> thing
  if (typeof type === 'string' && type.includes('/')) {
    return type.split('/')[1]
  }

  return type
}

function getFileNameFromContentDisposition (response: IN8nHttpFullResponse): string {
  const disposition = response.headers['content-disposition'] as string | undefined
  if (!disposition) return ''

  const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)
  if (match?.[1]) {
    return match[1].replace(/['"]/g, '')
  }

  return ''
}

export const postReceiveActionBinaryData: PostReceiveAction =
  async function postReceiveActionBinaryData (
    this: IExecuteSingleFunctions,
    items: INodeExecutionData[],
    response: IN8nHttpFullResponse
  ): Promise<INodeExecutionData[]> {
    const contentType = getresponseContentType(response)

    const outputOptions = this.getNodeParameter('outputOptions', {}) as IDataObject
    const customOutputField = (outputOptions.binaryPropertyOutput as string) || ''
    const customFileName = (outputOptions.fileName as string) || ''
    const customMimeType = (outputOptions.mimeType as string) || ''

    const { binary } = items[0]

    if (binary && binary.data) {
      const data = binary.data as IBinaryData

      const resolvedMimeType = customMimeType || contentType || data.mimeType
      if (resolvedMimeType && resolvedMimeType !== data.mimeType) {
        data.mimeType = resolvedMimeType
        data.fileType = getFileTypeFromContentType(resolvedMimeType) as BinaryFileType
        data.fileExtension = getFileExtensionFromContentType(resolvedMimeType)
      }

      const responseFileName = getFileNameFromContentDisposition(response)
      data.fileName = customFileName
        || responseFileName
        || data.fileName
        || `data.${data.fileExtension || getFileExtensionFromContentType(resolvedMimeType)}`
    }

    if (customOutputField && customOutputField !== 'data' && binary?.data) {
      binary[customOutputField] = binary.data
      delete binary.data
    }

    items[0].json = {}

    return items
  }
