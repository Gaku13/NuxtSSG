
module.exports = {
  generate: {
    dir: 'docs',
    fallback: true
  },
  ssr: false,
  router: {
    base: '/'
  },
  head: {
    title: 'Test Site',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Test Desc'
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      }, {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Test OG name'
      }, {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://test-og-test.com'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: 'Test OG Title'
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: 'Test OG Desc'
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      }, {
        name: 'application-name',
        content: 'Test App Name'
      },
      { name: "msapplication-TileColor", content: "#000" },
      { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "theme-color", content: "#000" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
      { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", type: "image/png", href: "/android-chrome-256x256.png", sizes: "256x256" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#231815" },
      { rel: "shortcut icon", href: "/favicon.ico" }
    ]
  },
  //loading: false,
  loading: {
    color: '#000',
    height: '2px',
    throttle: 0
  },
  css: [
    // 'modern-normalize/modern-normalize.css',
    '~/assets/css/style.styl'
  ],
  plugins: [
    {
      src: '~/plugins/vue-parallax-js',
      ssr: false
    }, '~/plugins/scroll', '~/plugins/vue-scrollto', '~/plugins/i18n'
  ],
  modules: [
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    'nuxt-agile',
    [
      '@nuxtjs/google-analytics', {
        id: ''
      }
    ],
    [
      'nuxt-i18n', {
        parsePages: false,
        locales: [
          {
            code: 'ja', iso: 'ja_JP'
          }, {
            code: 'en', iso: 'en-US'
          }
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        vueI18nLoader: true
      }
    ]
  ],
  styleResources: {
    stylus: './assets/css/_variables.styl'
  },
  /*
  build: extend = function(config, ctx) {
    plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    return pass;
  }
  */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }]
      ],
    }
  }
};
