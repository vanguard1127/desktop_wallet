/* eslint-disable @typescript-eslint/no-var-requires */
const os = require('os')
const path = require('path')

exports.APP = {
  website: 'https://infinitysolutions.io',
  transactionExpiryMinutes: 45
}

exports.NETWORKS = [
  require('./networks/mainnet.json'),
  require('./networks/devnet.json')
]

exports.PEERS = {
  'ark.mainnet': require('./peers/mainnet.json'),
  'ark.devnet': require('./peers/devnet.json')
}

exports.ANNOUNCEMENTS = {
  rssUrl: 'https://www.bfmtv.com/rss/news-24-7/'
}

exports.VENDOR_FIELD = {
  defaultMaxLength: 64
}

exports.I18N = {
  defaultLocale: 'en-US',
  enabledLocales: [
    'en-US'
  ]
}

exports.BIP39 = {
  defaultLanguage: 'english',
  languages: [
    'chinese_simplified',
    'chinese_traditional',
    'english',
    'french',
    'italian',
    'japanese',
    'korean',
    'spanish'
  ]
}

exports.TRANSACTION_GROUPS = {
  STANDARD: 1,
  MAGISTRATE: 2
}

exports.TRANSACTION_TYPES = {
  MULTI_SIGN: -1,

  GROUP_1: {
    TRANSFER: 0,
    SECOND_SIGNATURE: 1,
    DELEGATE_REGISTRATION: 2,
    VOTE: 3,
    MULTI_SIGNATURE: 4,
    IPFS: 5,
    MULTI_PAYMENT: 6,
    DELEGATE_RESIGNATION: 7,
    HTLC_LOCK: 8,
    HTLC_CLAIM: 9,
    HTLC_REFUND: 10
  },

  GROUP_2: {
    BUSINESS_REGISTRATION: 0,
    BUSINESS_RESIGNATION: 1,
    BUSINESS_UPDATE: 2,
    BRIDGECHAIN_REGISTRATION: 3,
    BRIDGECHAIN_RESIGNATION: 4,
    BRIDGECHAIN_UPDATE: 5,
    ENTITY: 6
  }
}

exports.TRANSACTION_TYPES_ENTITY = {
  TYPE: {
    BUSINESS: 0,
    PRODUCT: 1,
    PLUGIN: 2,
    MODULE: 3,
    DELEGATE: 4
  },

  SUBTYPE: {
    NONE: 0
  },

  ACTION: {
    REGISTER: 0,
    UPDATE: 1,
    RESIGN: 2
  }
}

exports.INTERVALS = {
  short: 30000, // 30 seconds
  medium: 60000, // 1 minute
  long: 180000 // 3 minute
}

exports.MARKET = {
  defaultCurrency: 'BTC',
  crypto: [
    'BTC',
    'ETH',
    'LTC'
  ],
  currencies: {
    BTC: { symbol: 'Ƀ', fractionDigits: 8 },
    ETH: { symbol: 'Ξ', fractionDigits: 8 },
    LTC: { symbol: 'Ł', fractionDigits: 8 },
    AUD: { symbol: 'A$', fractionDigits: 2 },
    BRL: { symbol: 'R$', fractionDigits: 2 },
    CAD: { symbol: 'C$', fractionDigits: 2 },
    CHF: { symbol: 'CHF', fractionDigits: 2 },
    CNY: { symbol: '¥', fractionDigits: 2 },
    EUR: { symbol: '€', fractionDigits: 2 },
    GBP: { symbol: '£', fractionDigits: 2 },
    HKD: { symbol: 'HK$', fractionDigits: 2 },
    IDR: { symbol: 'IDR', fractionDigits: 2 },
    INR: { symbol: '₹', fractionDigits: 2 },
    JPY: { symbol: '¥', fractionDigits: 0 },
    KRW: { symbol: '₩', fractionDigits: 0 },
    MXN: { symbol: 'MX$', fractionDigits: 2 },
    RUB: { symbol: '₽', fractionDigits: 2 },
    USD: { symbol: '$', fractionDigits: 2 }
  }
}

// This section handles fetching Desktop-Wallet Plugins from the NPM registry.
// It should remain "ARK" unless intentionally implementing a custom package.
exports.PLUGINS = {
  adapters: ['npm'],
  pluginsUrl: 'https://raw.githubusercontent.com/ark-ecosystem-desktop-plugins/config/master/plugins.json',
  categories: [
    'gaming',
    'theme',
    'language',
    'utility',
    'other'
  ],
  devPath: path.resolve(os.homedir(), '.ark-desktop/plugins-dev'),
  maxKeywords: 5,
  keywords: [
    '@arkecosystem',
    'desktop-wallet',
    'plugin'
  ],
  officialScope: 'infinity',
  officialAuthor: 'INFINITY',
  path: path.resolve(os.homedir(), '.ark-desktop/plugins'),
  reportUrl: 'https://infinitysolutions.io/contact',
  sharePath: path.resolve(os.homedir(), '.ark-desktop/share'),
  updateInterval: {
    value: 1,
    unit: 'day'
  },
  validation: require('./plugin-validation.json')
}

exports.THEMES = [
  {
    id: 'light',
    title: 'Light theme' // TODO translate
  },
  {
    id: 'dark',
    title: 'Dark theme' // TODO translate
  }
]

exports.V1 = {
  fees: {
    GROUP_1: [
      1 * 1e5, // Transfer
      5 * 1e5, // Second signautre
      25 * 1e5, // Delegate registration
      1 * 1e5, // Vote
      5 * 1e5, // Multisignature
      5 * 1e5, // IPFS
      1 * 1e5, // Multi-payment
      25 * 1e5, // Delegate resignation
      1 * 1e5, // HTLC Lock
      0 * 1e5, // HTLC Claim
      0 * 1e5 // HTLC Refund
    ],

    GROUP_2: [
      5 * 1e5, // Business Registration
      5 * 1e5, // Business Resignation
      5 * 1e5, // Business Update
      5 * 1e5, // Bridgechain Registration
      5 * 1e5, // Bridgechain Resignation
      5 * 1e5 // Bridgechain Update
    ]
  }
}
