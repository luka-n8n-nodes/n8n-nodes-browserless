





/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Download'

const rawOption: INodePropertyOptions = {
  name: 'Download',
  value: 'Download',
  action: 'Download',
  description:
    'A JSON or JavaScript content-type API for returning files Chrome has downloaded during the execution of puppeteer code, which is ran inside context of the browser. Browserless sets up a blank page, a fresh download directory, injects your puppeteer code, and then executes it. You can load external libraries via the "import" syntax, and import ESM-style modules that are written for execution inside of the browser. Once your script is finished, any downloaded files from Chromium are returned back with the appropriate content-type header',
  routing: {
    request: {
      method: 'POST',
      url: '=/download',
      encoding: 'arraybuffer',
      ignoreHttpStatusErrors: true,
    },
    output: {
      postReceive: [
        helpers.hooks.postReceiveActionHttpErrorDetails,
        {
          type: 'binaryData',
          properties: {
            destinationProperty: 'data',
          },
        },
        helpers.hooks.postReceiveActionBinaryData,
      ],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
