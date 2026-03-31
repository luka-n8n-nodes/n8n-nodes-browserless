 
 
 
 
 

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

export const name = 'Performance'

const rawOption: INodePropertyOptions = {
  name: 'Performance',
  value: 'Performance',
  action: 'Performance',
  description: 'Run lighthouse performance audits with a supplied "URL" in your JSON payload',
  routing: {
    request: {
      method: 'POST',
      url: '=/performance',
      ignoreHttpStatusErrors: true,
    },
    output: {
      postReceive: [helpers.hooks.postReceiveActionHttpErrorDetails],
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
