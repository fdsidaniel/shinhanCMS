// https://nuxt.com/docs/api/configuration/nuxt-config

const pathList = [
  {
    name: 'test',
    path: '/test',
    file: '/pages/testtest.vue',
  },
  {
    name: 'test2',
    path: '/test2',
    file: '/pages/testtest.vue',
  },
  {
    name: 'test3',
    path: '/test3',
    file: '/pages/testtest.vue',
  },
]

export default defineNuxtConfig({
  // hooks: {
  //   'pages:extend'(pages) {
  //     console.log($fx)
  //     pathList.map((item) => {
  //       pages.push({
  //         name: item.name,
  //         path: item.path,
  //         file: `~/${item.file}`,
  //       })
  //     })
  //     // add a route
  //   },
  // },
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
  experimental: {
    payloadExtraction: false,
  },
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  css: [
    '~/assets/scss/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  app: {
    head: {
      script: [
        { src: '/jquery.min.js' },
        { src: '/jquery-ui.min.js' },
        { src: '/datepicker-ko.js' },
      ],
      link: [{ rel: 'stylesheet', href: '/jquery-ui.css' }],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  // plugins: ['~/plugins/jquery.js'],

  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://www.ag-grid.com/example-assets/',
          changeOrigin: true,
        },
      },
    },
  },
})
