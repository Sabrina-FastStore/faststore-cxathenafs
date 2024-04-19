
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "cxathenafs",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://cxathenafs.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/marca%20pr%C3%B3pria",
    search: "/s?q=Samsung",
    pdp: "/smartphone-samsung-a72-tela-6-7-128gb-6gbram-android-11-0/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/smartphone-samsung-a72-tela-6-7-128gb-6gbram-android-11-0/p",
      collection: "/marca%20pr%C3%B3pria",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/smartphone-samsung-a72-tela-6-7-128gb-6gbram-android-11-0/p",
      collection: "/marca%20pr%C3%B3pria",
      collection_filtered: "/marca%20pr%C3%B3pria/?category-1=marca%20pr%C3%B3pria&brand=Samsung&facets=category-1%2Cbrand%27",
      search: "/s?q=Samsung",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://cxathenafs.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
