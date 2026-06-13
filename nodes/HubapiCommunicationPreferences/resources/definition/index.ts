import type { INodeProperties } from 'n8n-workflow';

export const definitionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Definition"
					]
				}
			},
			"options": [
				{
					"name": "Get Communication Preferences v3 Definitions Get Page",
					"value": "Get Communication Preferences v3 Definitions Get Page",
					"action": "Get subscription definitions",
					"description": "Get a list of all subscription definitions for the portal",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communication-preferences/v3/definitions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communication-preferences/v3/definitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Definition"
					],
					"operation": [
						"Get Communication Preferences v3 Definitions Get Page"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Definition"
					],
					"operation": [
						"Get Communication Preferences v3 Definitions Get Page"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Definition"
					],
					"operation": [
						"Get Communication Preferences v3 Definitions Get Page"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Definition"
					],
					"operation": [
						"Get Communication Preferences v3 Definitions Get Page"
					]
				}
			}
		},
];
