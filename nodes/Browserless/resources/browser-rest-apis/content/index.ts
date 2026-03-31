 
 
 
 
 

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

export const name = 'Content'

const rawOption: INodePropertyOptions = {
  name: 'Content',
  value: 'Content',
  action: 'Content',
  description: 'A JSON-based API. Given a "URL" or "html" field, runs and returns HTML content after the page has loaded and JavaScript has parsed.',
  routing: {
    request: {
      method: 'POST',
      url: '=/content',
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
