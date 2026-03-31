 
 
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
 

/**
 * The following code was generated create-n8n-nodes tool.
 *
 * This file was automatically generated and should not be edited.
 *
 * If changes are required, please refer to the templates and scripts in the repository.
 * Repository: https://github.com/oneflow-vn/create-n8n-nodes
 */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /scrape',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Url',
    name: 'url',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          url: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
    required: true,
  },
  {
    displayName: 'Elements',
    name: 'elements',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },

    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Selector',
            type: 'string',
            default: '',

            name: 'selector',
          },
          {
            displayName: 'Timeout',
            type: 'number',
            default: 0,

            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          elements: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Timeout',
    name: 'waitForTimeout',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          waitForTimeout: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Selector',
    name: 'waitForSelector',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Hidden',
            type: 'boolean',
            default: true,

            name: 'hidden',
          },
          {
            displayName: 'Selector',
            type: 'string',
            default: '',

            name: 'selector',
          },
          {
            displayName: 'Timeout',
            type: 'number',
            default: 0,

            name: 'timeout',
          },
          {
            displayName: 'Visible',
            type: 'boolean',
            default: true,

            name: 'visible',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForSelector: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Goto Options',
    name: 'gotoOptions',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
							{
								displayName: 'Referer',
								type: 'string',
								default: '',
								description: 'If provided, it will take preference over the referer header value set by	{@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
								name: 'referer',
							},
							{
								displayName: 'Referrer Policy',
								type: 'string',
								default: '',
								description: 'If provided, it will take preference over the referer-policy header value set by	{@link Page.setExtraHTTPHeaderspage.setExtraHTTPHeaders()}',
								name: 'referrerPolicy',
							},
							{
								displayName: 'Signal',
								type: 'fixedCollection',
								default: {},
								description: 'A signal object that allows you to cancel the call',
								options: [
											{
												displayName: 'Items',
												name: 'items',
													values:	[
													{
														displayName: 'Aborted',
														type: 'boolean',
														default: true,

														name: 'aborted',
													},
													{
														displayName: 'On Abort',
														type: 'json',
														default: '{}',

														name: 'onabort',
													},
													{
														displayName: 'Reason',
														type: 'string',
														default: '',

														name: 'reason',
													},
												]
											},
									],
								name: 'signal',
							},
							{
								displayName: 'Timeout',
								type: 'number',
								default: 0,
								description: 'Maximum wait time in milliseconds. Pass 0 to disable the timeout.',
								name: 'timeout',
							},
							{
								displayName: 'Wait Until',
								type: 'multiOptions',
								default: [],
								description: 'When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired.',
								options: [
											{
												name: 'Domcontentloaded',
												value: 'domcontentloaded',
											},
											{
												name: 'Load',
												value: 'load',
											},
											{
												name: 'Networkidle0',
												value: 'networkidle0',
											},
											{
												name: 'Networkidle2',
												value: 'networkidle2',
											},
									],
								name: 'waitUntil',
							},
					],
      },
    ],
    routing: {
      request: {
        body: {
          gotoOptions: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Event',
    name: 'waitForEvent',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Event',
            type: 'string',
            default: '',

            name: 'event',
          },
          {
            displayName: 'Timeout',
            type: 'number',
            default: 0,

            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForEvent: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Wait For Function',
    name: 'waitForFunction',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Fn',
            type: 'string',
            default: '',
            description:
              'The function, or statement, to be evaluated in browser context',
            name: 'fn',
          },
          {
            displayName: 'Polling',
            type: 'string',
            default: undefined,
            description:
              'An interval at which the pageFunction is executed, defaults to raf. If polling is a number, then it is treated as an interval in milliseconds at which the function would be executed. If polling is a string, then it can be one of the following values: "raf" or "mutation"',
            name: 'polling',
          },
          {
            displayName: 'Timeout',
            type: 'number',
            default: 0,
            description:
              'Maximum time to wait for in milliseconds. Defaults to 30000 (30 seconds). Pass 0 to disable timeout',
            name: 'timeout',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          waitForFunction: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Add Script Tag',
    name: 'addScriptTag',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },

    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
							{
								displayName: 'Content',
								type: 'string',
								default: '',
								description: 'JavaScript to be injected into the frame',
								name: 'content',
							},
							{
								displayName: 'Id',
								type: 'string',
								default: '',
								description: 'Sets the	`ID`	of the script',
								name: 'id',
							},
							{
								displayName: 'Path',
								type: 'string',
								default: '',
								description: 'Path to a JavaScript file to be injected into the frame',
								name: 'path',
							},
							{
								displayName: 'Type',
								type: 'string',
								default: '',
								description: 'Sets the	`type`	of the script. Use	`module`	in order to load an ES2015 module.',
								name: 'type',
							},
							{
								displayName: 'Url',
								type: 'string',
								default: '',
								description: 'URL of the script to be added',
								name: 'url',
							},
						],
      },
    ],
    routing: {
      request: {
        body: {
          addScriptTag: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Add Style Tag',
    name: 'addStyleTag',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },

    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Url',
            type: 'string',
            default: '',
            description: 'The URL of the CSS file to be added',
            name: 'url',
          },
          {
            displayName: 'Path',
            type: 'string',
            default: '',
            description: 'The path to a CSS file to be injected into the frame',
            name: 'path',
          },
          {
            displayName: 'Content',
            type: 'string',
            default: '',
            description: 'Raw CSS content to be injected into the frame',
            name: 'content',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          addStyleTag: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Set Extra HTTP Headers',
    name: 'setExtraHTTPHeaders',
    type: 'fixedCollection',
    default: {},

    routing: {
      request: {
        body: {
          setExtraHTTPHeaders: '={{$value.headers}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
    placeholder: 'Add Header',
    typeOptions: {
      multipleValues: true,
    },
    options: [
      {
        displayName: 'Set Extra HTTP Headers',
        name: 'headers',
        values: [
          {
            displayName: 'Name',
            name: 'name',
            type: 'string',
            default: '',
            description: 'Name of the header',
          },
          {
            displayName: 'Value',
            name: 'value',
            type: 'string',
            default: '',
            description: 'Value of the header',
          },
        ],
      },
    ],
  },
  {
    displayName: 'Authenticate',
    name: 'authenticate',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Username',
            type: 'string',
            default: '',

            name: 'username',
          },
          {
            displayName: 'Password',
            type: 'string',
												typeOptions: { password: true },
            default: '',

            name: 'password',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          authenticate: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Viewport',
    name: 'viewport',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
							{
								displayName: 'Device Scale Factor',
								type: 'number',
								default: 0,
								description: 'Specify device scale factor. See <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio">devicePixelRatio</a> for more info.',
								name: 'deviceScaleFactor',
							},
							{
								displayName: 'Has Touch',
								type: 'boolean',
								default: true,
								description: 'Specify if the viewport supports touch events',
								name: 'hasTouch',
							},
							{
								displayName: 'Height',
								type: 'number',
								default: 0,
								description: 'The page height in CSS pixels',
								name: 'height',
							},
							{
								displayName: 'Is Landscape',
								type: 'boolean',
								default: true,
								description: 'Specifies if the viewport is in landscape mode',
								name: 'isLandscape',
							},
							{
								displayName: 'Is Mobile',
								type: 'boolean',
								default: true,
								description: 'Whether the	`meta viewport`	tag is taken into account',
								name: 'isMobile',
							},
							{
								displayName: 'Width',
								type: 'number',
								default: 0,
								description: 'The page width in CSS pixels',
								name: 'width',
							},
						],
      },
    ],
    routing: {
      request: {
        body: {
          viewport: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Emulate Media Type',
    name: 'emulateMediaType',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          emulateMediaType: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Timeout',
    name: 'timeout',
    description: 'Override the system-level timeout for this request. Accepts a value in milliseconds.',
    default: 0,
    type: 'number',
    routing: {
      request: {
        qs: {
          timeout: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Html',
    name: 'html',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          html: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'User Agent',
    name: 'userAgent',
    type: 'string',
    default: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
    description: 'User-agent string. Will be automatically converted to the object format required by the API.',
    routing: {
      request: {
        body: {
          userAgent: '={{ $value }}',
        },
      },
      send: {
        preSend: [helpers.hooks.preSendTransformUserAgent],
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Best Attempt',
    name: 'bestAttempt',
    type: 'boolean',
    default: true,
    description: 'When bestAttempt is set to true, browserless attempt to proceed when "awaited" events fail or timeout. This includes things like goto, waitForSelector, and more.',
    routing: {
      request: {
        body: {
          bestAttempt: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Enable Cookies',
    name: 'enableCookies',
    type: 'boolean',
    default: false,

    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Cookies',
    name: 'cookies',
    type: 'json',
    default: '[]',
    typeOptions: {},
    description: 'Array of cookie objects expected by cookie-editor extension',
    placeholder: 'Add item',
    options: [],
    routing: {
      request: {
        body: {
          cookies:
            '={{ (JSON.parse($value) || []).reduce((a, c) => ({ ...a, [c.name]: c.value }), {}) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
        enableCookies: [true],
      },
    },
  },
  {
    displayName: 'Block Ads',
    name: 'blockAds',
    description: 'Whether or nor to load ad-blocking extensions for the session. This currently uses uBlock Origin and may cause certain sites to not load properly.',
    default: true,
    type: 'boolean',
    routing: {
      request: {
        qs: {
          blockAds: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Set JavaScript Enabled',
    name: 'setJavaScriptEnabled',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          setJavaScriptEnabled: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Enable Launch',
    name: 'enableLaunch',
    type: 'boolean',
    default: false,
    description: 'Launch a new browser instance',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Launch',
    name: 'launch',

    default: {},
    type: 'collection',
    typeOptions: {},
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Args',
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        name: 'args',

        placeholder: 'Add item',
        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'Item',
                name: 'Item',
                type: 'string',
                default: '',
              },
            ],
          },
        ],
      },
      {
        displayName: 'Default Viewport',
        type: 'fixedCollection',
        default: {},

        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'Device Scale Factor',
                type: 'number',
                default: 0,

                name: 'deviceScaleFactor',
              },
              {
                displayName: 'Has Touch',
                type: 'boolean',
                default: true,

                name: 'hasTouch',
              },
              {
                displayName: 'Height',
                type: 'number',
                default: 0,

                name: 'height',
              },
              {
                displayName: 'Is Landscape',
                type: 'boolean',
                default: true,

                name: 'isLandscape',
              },
              {
                displayName: 'Is Mobile',
                type: 'boolean',
                default: true,

                name: 'isMobile',
              },
              {
                displayName: 'Width',
                type: 'number',
                default: 0,

                name: 'width',
              },
            ],
          },
        ],
        name: 'defaultViewport',
      },
      {
        displayName: 'DevTools',
        type: 'boolean',
        default: true,

        name: 'devtools',
      },
      {
        displayName: 'Dump IO',
        type: 'boolean',
        default: true,

        name: 'dumpio',
      },
      {
        displayName: 'Headless',
        type: 'options',
        default: false,

        options: [
          {
            name: 'False',
            value: false,
          },
          {
            name: 'Shell',
            value: 'shell',
          },
          {
            name: 'True',
            value: true,
          },
        ],
        name: 'headless',
      },
      {
        displayName: 'Ignore Default Args',
        type: 'fixedCollection',
        default: [],
        typeOptions: {
          multipleValues: true,
        },
        name: 'ignoreDefaultArgs',

        placeholder: 'Add item',
        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'Item',
                name: 'Item',
                type: 'string',
                default: '',
              },
            ],
          },
        ],
      },
      {
        displayName: 'Ignore HTTPS Errors',
        type: 'boolean',
        default: true,

        name: 'ignoreHTTPSErrors',
      },
      {
        displayName: 'Slow Mo',
        type: 'number',
        default: 0,

        name: 'slowMo',
      },
      {
        displayName: 'Stealth',
        type: 'boolean',
        default: true,

        name: 'stealth',
      },
      {
        displayName: 'Timeout',
        type: 'number',
        default: 0,

        name: 'timeout',
      },
      {
        displayName: 'User Data Dir',
        type: 'string',
        default: '',

        name: 'userDataDir',
      },
      {
        displayName: 'Wait For Initial Page',
        type: 'boolean',
        default: true,

        name: 'waitForInitialPage',
      },
    ],
    routing: {
      request: {
        qs: {
          launch: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
        enableLaunch: [true],
      },
    },
  },
  {
    displayName: 'Reject Resource Types',
    name: 'rejectResourceTypes',
    type: 'multiOptions',
    default: [],
    description: undefined,
    options: [
      {
        name: 'Cspviolationreport',
        value: 'cspviolationreport',
      },
      {
        name: 'Document',
        value: 'document',
      },
      {
        name: 'Eventsource',
        value: 'eventsource',
      },
      {
        name: 'Fetch',
        value: 'fetch',
      },
      {
        name: 'Font',
        value: 'font',
      },
      {
        name: 'Image',
        value: 'image',
      },
      {
        name: 'Manifest',
        value: 'manifest',
      },
      {
        name: 'Media',
        value: 'media',
      },
      {
        name: 'Other',
        value: 'other',
      },
      {
        name: 'Ping',
        value: 'ping',
      },
      {
        name: 'Prefetch',
        value: 'prefetch',
      },
      {
        name: 'Preflight',
        value: 'preflight',
      },
      {
        name: 'Script',
        value: 'script',
      },
      {
        name: 'Signedexchange',
        value: 'signedexchange',
      },
      {
        name: 'Stylesheet',
        value: 'stylesheet',
      },
      {
        name: 'Texttrack',
        value: 'texttrack',
      },
      {
        name: 'Websocket',
        value: 'websocket',
      },
      {
        name: 'Xhr',
        value: 'xhr',
      },
    ],
    routing: {
      request: {
        body: {
          rejectResourceTypes: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Reject Request Pattern',
    name: 'rejectRequestPattern',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },

    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Item',
            name: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          rejectRequestPattern: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Request Interceptors',
    name: 'requestInterceptors',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },

    placeholder: 'Add item',
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Pattern',
            type: 'string',
            default: '',
            description: 'An array of patterns (using `req.URL().match(r.pattern)` to match) and their corresponding responses to use in order to fulfill those requests',
            name: 'pattern',
          },
          {
            displayName: 'Response',
            type: 'fixedCollection',
            default: {},

            options: [
              {
                displayName: 'Items',
                name: 'items',
                values: [
                  {
                    displayName: 'Status',
                    type: 'number',
                    default: 0,

                    name: 'status',
                  },
                  {
                    displayName: 'Headers',
                    type: 'json',
                    default: '{}',
                    description: 'Optional response headers. All values are converted to strings.',
                    name: 'headers',
                  },
                  {
                    displayName: 'Content Type',
                    type: 'string',
                    default: '',

                    name: 'contentType',
                  },
                  {
                    displayName: 'Body',
                    type: 'fixedCollection',
                    default: {},

                    options: [
                      {
                        displayName: 'Items',
                        name: 'items',
                        values: [
																			{
																				displayName: 'Buffer',
																				type: 'string',
																				default: '',

																				name: 'buffer',
																			},
																			{
																				displayName: 'Byte Length',
																				type: 'number',
																				default: 0,

																				name: 'byteLength',
																			},
																			{
																				displayName: 'Byte Offset',
																				type: 'number',
																				default: 0,

																				name: 'byteOffset',
																			},
																			{
																				displayName: 'Bytes Per Element',
																				type: 'number',
																				default: 0,

																				name: 'BYTES_PER_ELEMENT',
																			},
																			{
																				displayName: 'Length',
																				type: 'number',
																				default: 0,

																				name: 'length',
																			},
																			{
																				displayName: 'Tostringtag 42114',
																				type: 'string',
																				default: '',

																				name: '__@toStringTag@42114',
																			},
																		],
                      },
                    ],
                    name: 'body',
                  },
                ],
              },
            ],
            name: 'response',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          requestInterceptors: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
  {
    displayName: 'Debug Opts',
    name: 'debugOpts',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        displayName: 'Items',
        name: 'items',
        values: [
          {
            displayName: 'Console',
            type: 'boolean',
            default: true,

            name: 'console',
          },
          {
            displayName: 'Cookies',
            type: 'boolean',
            default: true,

            name: 'cookies',
          },
          {
            displayName: 'Html',
            type: 'boolean',
            default: true,

            name: 'html',
          },
          {
            displayName: 'Network',
            type: 'boolean',
            default: true,

            name: 'network',
          },
          {
            displayName: 'Screenshot',
            type: 'boolean',
            default: true,

            name: 'screenshot',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          debugOpts: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Scrape'],
      },
    },
  },
]
