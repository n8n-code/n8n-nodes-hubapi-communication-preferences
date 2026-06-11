import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { statusDescription } from './resources/status';
import { definitionDescription } from './resources/definition';

export class HubapiCommunicationPreferences implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hubapi Communication Preferences',
		name: 'N8nDevHubapiCommunicationPreferences',
		icon: { light: 'file:./hubapi-communication-preferences.png', dark: 'file:./hubapi-communication-preferences.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Contacts manage communication preferences by topic, brand, or overall.',
		defaults: { name: 'Hubapi Communication Preferences' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevHubapiCommunicationPreferencesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Status",
					"value": "Status",
					"description": "Whether a contact has subscribed or unsubscribed from a given subscription type."
				},
				{
					"name": "Definition",
					"value": "Definition",
					"description": "The different subscription types that are defined in a portal."
				}
			],
			"default": ""
		},
		...statusDescription,
		...definitionDescription
		],
	};
}
