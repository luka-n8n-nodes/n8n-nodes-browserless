 
 
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

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
    displayName: 'POST /pdf',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
    required: true,
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
  },
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    default: {},
    typeOptions: {},
    description:
      'Valid options to configure PDF generation via {@link Page.pdf}',
    placeholder: 'Add item',
    options: [
      {
        displayName: 'Scale',
        type: 'number',
        default: 0,
        description: 'Scales the rendering of the web page. Amount must be between `0.1` and `2`.',
        name: 'scale',
      },
      {
        displayName: 'Display Header Footer',
        type: 'boolean',
        default: true,
        description: 'Whether to show the header and footer',
        name: 'displayHeaderFooter',
      },
      {
        displayName: 'Header Template',
        type: 'string',
        default: '',
        description: 'HTML template for the print header. Should be valid HTML with the following classes used to inject values into them: - `date` formatted print date - `title` document title - `URL` document location - `pageNumber` current page number - `totalPages` total pages in the document.',
        name: 'headerTemplate',
      },
      {
        displayName: 'Footer Template',
        type: 'string',
        default: '',
        description: 'HTML template for the print footer. Has the same constraints and support for special classes as {@link PDFOptions.headerTemplate}.',
        name: 'footerTemplate',
      },
      {
        displayName: 'Print Background',
        type: 'boolean',
        default: true,
        description: 'Set to `true` to print background graphics',
        name: 'printBackground',
      },
      {
        displayName: 'Landscape',
        type: 'boolean',
        default: true,
        description: 'Whether to print in landscape orientation',
        name: 'landscape',
      },
      {
        displayName: 'Page Ranges',
        type: 'string',
        default: '',
        description: 'Paper ranges to print, e.g. `1-5, 8, 11-13`',
        name: 'pageRanges',
      },
      {
        displayName: 'Format',
        type: 'options',
        default: 'A0',
        description: 'All the valid paper format types when printing a PDF',
        options: [
          {
            name: 'A0',
            value: 'A0',
          },
          {
            name: 'A1',
            value: 'A1',
          },
          {
            name: 'A2',
            value: 'A2',
          },
          {
            name: 'A3',
            value: 'A3',
          },
          {
            name: 'A4',
            value: 'A4',
          },
          {
            name: 'A5',
            value: 'A5',
          },
          {
            name: 'A6',
            value: 'A6',
          },
          {
            name: 'LEDGER',
            value: 'LEDGER',
          },
          {
            name: 'LEGAL',
            value: 'LEGAL',
          },
          {
            name: 'LETTER',
            value: 'LETTER',
          },
          {
            name: 'Ledger',
            value: 'Ledger',
          },
          {
            name: 'Legal',
            value: 'Legal',
          },
          {
            name: 'Letter',
            value: 'Letter',
          },
          {
            name: 'TABLOID',
            value: 'TABLOID',
          },
          {
            name: 'Tabloid',
            value: 'Tabloid',
          },
        ],
        name: 'format',
      },
      {
        displayName: 'Width',
        type: 'string',
        default: undefined,
        description: 'Sets the width of paper. You can pass in a number or a string with a unit.',
        name: 'width',
      },
      {
        displayName: 'Height',
        type: 'string',
        default: undefined,
        description: 'Sets the height of paper. You can pass in a number or a string with a unit.',
        name: 'height',
      },
      {
        displayName: 'Prefer CSS Page Size',
        type: 'boolean',
        default: true,
        description:
          'Give any CSS `@page` size declared in the page priority over what is declared in the `width` or `height` or `format` option',
        name: 'preferCSSPageSize',
      },
      {
        displayName: 'Margin',
        type: 'fixedCollection',
        default: {},
        description: 'Set the PDF margins',
        options: [
          {
            displayName: 'Items',
            name: 'items',
            values: [
              {
                displayName: 'Top',
                type: 'string',
                default: undefined,

                name: 'top',
              },
              {
                displayName: 'Bottom',
                type: 'string',
                default: undefined,

                name: 'bottom',
              },
              {
                displayName: 'Left',
                type: 'string',
                default: undefined,

                name: 'left',
              },
              {
                displayName: 'Right',
                type: 'string',
                default: undefined,

                name: 'right',
              },
            ],
          },
        ],
        name: 'margin',
      },
      {
        displayName: 'Path',
        type: 'string',
        default: '',
        description: 'The path to save the file to',
        name: 'path',
      },
      {
        displayName: 'Omit Background',
        type: 'boolean',
        default: true,
        description:
          'Hides default white background and allows generating pdfs with transparency',
        name: 'omitBackground',
      },
      {
        displayName: 'Tagged',
        type: 'boolean',
        default: true,
        description: 'Generate tagged (accessible) PDF',
        name: 'tagged',
      },
      {
        displayName: 'Outline',
        type: 'boolean',
        default: true,
        description: 'Generate document outline',
        name: 'outline',
      },
      {
        displayName: 'Timeout',
        type: 'number',
        default: 0,
        description:
          'Timeout in milliseconds. Pass `0` to disable timeout. The default value can be changed by using {@link Page.setDefaultTimeout}',
        name: 'timeout',
      },
      {
        displayName: 'Wait For Fonts',
        type: 'boolean',
        default: true,
        description: 'If true, waits for `document.fonts.ready` to resolve. This might require activating the page using {@link Page.bringToFront} if the page is in the background.',
        name: 'waitForFonts',
      },
    ],
    routing: {
      request: {
        body: {
          options: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
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
        operation: ['Pdf'],
      },
    },
  },
]
