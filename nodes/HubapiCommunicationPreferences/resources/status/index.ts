import type { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					]
				}
			},
			"options": [
				{
					"name": "Get Communication Preferences v3 Status Email Email Address Get Email Status",
					"value": "Get Communication Preferences v3 Status Email Email Address Get Email Status",
					"action": "Get subscription statuses for a contact",
					"description": "Returns a list of subscriptions and their status for a given contact.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/communication-preferences/v3/status/email/{{$parameter[\"emailAddress\"]}}"
						}
					}
				},
				{
					"name": "Post Communication Preferences v3 Subscribe Subscribe",
					"value": "Post Communication Preferences v3 Subscribe Subscribe",
					"action": "Subscribe a contact",
					"description": "Subscribes a contact to the given subscription type. This API is not valid to use for subscribing a contact at a brand or portal level and will return an error.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communication-preferences/v3/subscribe"
						}
					}
				},
				{
					"name": "Post Communication Preferences v3 Unsubscribe Unsubscribe",
					"value": "Post Communication Preferences v3 Unsubscribe Unsubscribe",
					"action": "Unsubscribe a contact",
					"description": "Unsubscribes a contact from the given subscription type. This API is not valid to use for unsubscribing a contact at a brand or portal level and will return an error.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/communication-preferences/v3/unsubscribe"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /communication-preferences/v3/status/email/{emailAddress}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Communication Preferences v3 Status Email Email Address Get Email Status"
					]
				}
			}
		},
		{
			"displayName": "Email Address",
			"name": "emailAddress",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Get Communication Preferences v3 Status Email Email Address Get Email Status"
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
						"Status"
					],
					"operation": [
						"Get Communication Preferences v3 Status Email Email Address Get Email Status"
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
						"Status"
					],
					"operation": [
						"Get Communication Preferences v3 Status Email Email Address Get Email Status"
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
						"Status"
					],
					"operation": [
						"Get Communication Preferences v3 Status Email Email Address Get Email Status"
					]
				}
			}
		},
		{
			"displayName": "POST /communication-preferences/v3/subscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email Address",
			"name": "emailAddress",
			"type": "string",
			"default": "",
			"description": "Contact's email address.",
			"routing": {
				"send": {
					"property": "emailAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Legal Basis",
			"name": "legalBasis",
			"type": "options",
			"default": "LEGITIMATE_INTEREST_PQL",
			"description": "Legal basis for updating the contact's status (required for GDPR enabled portals).",
			"options": [
				{
					"name": "LEGITIMATE INTEREST PQL",
					"value": "LEGITIMATE_INTEREST_PQL"
				},
				{
					"name": "LEGITIMATE INTEREST CLIENT",
					"value": "LEGITIMATE_INTEREST_CLIENT"
				},
				{
					"name": "PERFORMANCE OF CONTRACT",
					"value": "PERFORMANCE_OF_CONTRACT"
				},
				{
					"name": "CONSENT WITH NOTICE",
					"value": "CONSENT_WITH_NOTICE"
				},
				{
					"name": "NON GDPR",
					"value": "NON_GDPR"
				},
				{
					"name": "PROCESS AND STORE",
					"value": "PROCESS_AND_STORE"
				},
				{
					"name": "LEGITIMATE INTEREST OTHER",
					"value": "LEGITIMATE_INTEREST_OTHER"
				}
			],
			"routing": {
				"send": {
					"property": "legalBasis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
					]
				}
			}
		},
		{
			"displayName": "Legal Basis Explanation",
			"name": "legalBasisExplanation",
			"type": "string",
			"default": "",
			"description": "A more detailed explanation to go with the legal basis (required for GDPR enabled portals).",
			"routing": {
				"send": {
					"property": "legalBasisExplanation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"type": "string",
			"default": "",
			"description": "ID of the subscription being updated for the contact.",
			"routing": {
				"send": {
					"property": "subscriptionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Subscribe Subscribe"
					]
				}
			}
		},
		{
			"displayName": "POST /communication-preferences/v3/unsubscribe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email Address",
			"name": "emailAddress",
			"type": "string",
			"default": "",
			"description": "Contact's email address.",
			"routing": {
				"send": {
					"property": "emailAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
					]
				}
			}
		},
		{
			"displayName": "Legal Basis",
			"name": "legalBasis",
			"type": "options",
			"default": "LEGITIMATE_INTEREST_PQL",
			"description": "Legal basis for updating the contact's status (required for GDPR enabled portals).",
			"options": [
				{
					"name": "LEGITIMATE INTEREST PQL",
					"value": "LEGITIMATE_INTEREST_PQL"
				},
				{
					"name": "LEGITIMATE INTEREST CLIENT",
					"value": "LEGITIMATE_INTEREST_CLIENT"
				},
				{
					"name": "PERFORMANCE OF CONTRACT",
					"value": "PERFORMANCE_OF_CONTRACT"
				},
				{
					"name": "CONSENT WITH NOTICE",
					"value": "CONSENT_WITH_NOTICE"
				},
				{
					"name": "NON GDPR",
					"value": "NON_GDPR"
				},
				{
					"name": "PROCESS AND STORE",
					"value": "PROCESS_AND_STORE"
				},
				{
					"name": "LEGITIMATE INTEREST OTHER",
					"value": "LEGITIMATE_INTEREST_OTHER"
				}
			],
			"routing": {
				"send": {
					"property": "legalBasis",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
					]
				}
			}
		},
		{
			"displayName": "Legal Basis Explanation",
			"name": "legalBasisExplanation",
			"type": "string",
			"default": "",
			"description": "A more detailed explanation to go with the legal basis (required for GDPR enabled portals).",
			"routing": {
				"send": {
					"property": "legalBasisExplanation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"type": "string",
			"default": "",
			"description": "ID of the subscription being updated for the contact.",
			"routing": {
				"send": {
					"property": "subscriptionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
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
						"Status"
					],
					"operation": [
						"Post Communication Preferences v3 Unsubscribe Unsubscribe"
					]
				}
			}
		},
];
