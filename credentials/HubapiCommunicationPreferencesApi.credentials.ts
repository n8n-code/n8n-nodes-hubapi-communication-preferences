import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HubapiCommunicationPreferencesApi implements ICredentialType {
        name = 'N8nDevHubapiCommunicationPreferencesApi';

        displayName = 'Hubapi Communication Preferences API';

        icon: Icon = { light: 'file:../nodes/HubapiCommunicationPreferences/hubapi-communication-preferences.png', dark: 'file:../nodes/HubapiCommunicationPreferences/hubapi-communication-preferences.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hubapi.com/',
                        required: true,
                        placeholder: 'https://api.hubapi.com/',
                        description: 'The base URL of your Hubapi Communication Preferences API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'hapikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
