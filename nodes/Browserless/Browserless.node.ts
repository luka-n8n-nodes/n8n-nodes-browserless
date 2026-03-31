import { INodeType, INodeTypeDescription } from 'n8n-workflow'

import { properties } from './Browserless.properties'
import { methods } from './Browserless.methods'

export class Browserless implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Browserless',
		name: 'browserless',
		icon: 'file:browserless.svg',
		group: ['transform'],
		version: 2,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Browserless API',
		defaults: {
			name: 'Browserless',
		},
		inputs: ['main'],
		outputs: ['main'],
		usableAsTool: true,
		credentials: [
			{
				displayName: 'Browserless API',
				name: 'browserlessApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				'Content-Type': 'application/json',
			},
			baseURL: '={{$credentials.url}}',
		},
		properties,
	}

	methods = methods
}
