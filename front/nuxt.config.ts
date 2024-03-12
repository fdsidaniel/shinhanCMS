// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  // app: {
  //   baseURL: '/mandoo1027.github.io/',
  // },
  devtools: { enabled: true },
  modules: [
    'nuxt-swiper',
    [
      '@pinia/nuxt',

      {
        autoImports: [
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePin
        ],
      },
    ],
  ],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
    ],
  },
  app: {
    head: {
    title: 'AICMS',
    link: [
    { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
    { rel: 'manifest', type: '', href: '/site.webmanifest' },
    { rel: 'mask-icon', type: '', href: '/safari-pinned-tab.svg' }


    // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    // <link rel="manifest" href="/site.webmanifest">
    // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">

    ],
    // 다른 head 설정들…
    }
  },
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
  },
  // plugins: ['~/plugins/init'],
  css: [
    '~/assets/scss/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },

  components: {
    global: true,
    dirs: [
      '~/components',
      // ,{path : '~/pages',pattern:'**/!([[]*[]]).vue'}
    ],
  },
  // vite: {
  //   server: {
  //     proxy: {
  //       "/api": {
  //         target: "http://test.co.kr:24484/",
  //         changeOrigin: true,
  //       },
  //     },
  //   },
  // },
})
