 
 
 
 
 

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

export const name = 'Execute'

const rawOption: INodePropertyOptions = {
  name: 'Execute',
  value: 'Execute',
  action: 'Execute',
  description:
    'A JSON or JavaScript content-type API for running puppeteer code in the browser\'s context. Browserless sets up a blank page, injects your puppeteer code, and runs it. You can optionally load external libraries via the "import" module that are meant for browser usage. Values returned from the function are checked and an appropriate content-type and response is sent back to your HTTP call',
  routing: {
    request: {
      method: 'POST',
      url: '=/function',
      ignoreHttpStatusErrors: true,
    },
    output: {
      postReceive: [
        helpers.hooks.postReceiveActionHttpErrorDetails,
        {
          type: 'setKeyValue',
          properties: {
            data: '={{$response.body}}',
          },
        },
      ],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
