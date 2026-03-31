 
 
 
 
 

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

export const name = 'Pdf'

const rawOption: INodePropertyOptions = {
  name: 'Pdf',
  value: 'Pdf',
  action: 'Pdf',
  description: 'A JSON-based API for getting a PDF binary from either a supplied "URL" or "html" payload in your request. Many options exist for injecting cookies, request interceptors, user-agents and waiting for selectors, timers and more.',
  routing: {
    request: {
      method: 'POST',
      url: '=/pdf',
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
