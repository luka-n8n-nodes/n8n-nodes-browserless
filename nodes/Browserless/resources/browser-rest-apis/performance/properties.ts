 
 
 
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
    displayName: 'POST /performance',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Browser Rest Apis'],
        operation: ['Performance'],
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
        operation: ['Performance'],
      },
    },
    required: true,
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
        operation: ['Performance'],
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
        operation: ['Performance'],
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
        operation: ['Performance'],
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
        operation: ['Performance'],
        enableLaunch: [true],
      },
    },
  },
]
