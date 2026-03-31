import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

const outputOptions: INodeProperties[] = [
  {
    displayName: 'Output Options',
    name: 'outputOptions',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
      },
    },
    options: [
      {
        displayName: 'Output Field',
        name: 'binaryPropertyOutput',
        type: 'string',
        default: 'data',
        description: 'The name of the output binary field to store the PDF file',
      },
      {
        displayName: 'File Name',
        name: 'fileName',
        type: 'string',
        default: '',
        placeholder: 'e.g. report.pdf',
        description:
          'Custom file name for the PDF file. Leave empty to auto-detect from the response.',
      },
    ],
  },
]

export function runHooks (
  option: INodePropertyOptions,
  properties: INodeProperties[]
): {
  option: INodePropertyOptions
  properties: INodeProperties[]
} {
  return {
    option,
    properties: [...properties, ...outputOptions],
  }
}
