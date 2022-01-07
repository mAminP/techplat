import { NuxtConfig } from '@nuxt/types'

export default <NuxtConfig>{
  loading: {
    color: '#3E7BF1'
  },
  head: {
    titleTemplate: '%s | techplat',
    title: 'تکپلت',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  moment: {
    timezone: true,
    defaultLocale: 'fa',
    locales: ['fa']
  },
  css: ['~/assets/main.css'],

  plugins: [
    { src: '~/plugins/vue-kinesis.js', mode: 'client' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/notify' },
    { src: '~/plugins/axios-accessor' },
    { src: '~/plugins/axios-accessor' },
    { src: '~/plugins/vue-installer', mode: 'client' }
  ],
  cli: {
    badgeMessages: [
      'Created by :',
      'Mohammad Amin Pasban'
    ],
    bannerColor: 'red'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    'nuxt-moment-jalaali',
    'nuxt-animejs',
    '@nuxtjs/style-resources'
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxt/content'
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fa',
      name: 'تک‌پلت'
    }
  },
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: ''
    },
    strategies: {
      local: {
        token: {
          property: 'access',
          global: true
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: false
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/auth/login/', method: 'post' },
          logout: false,
          user: { url: '/user/profile/', method: 'get' }
        }
      }
    }
  },
  publicRuntimeConfig: {
    api: process.env.API_URL
  },
  axios: {
    // baseURL: 'http://192.168.10.124:8082/v1/'
    baseURL: process.env.api
    // baseURL: '/api/v1/',
    // proxy: true
    // credentials: false,
    // proxyHeaders: false
  },
  proxy: {
    // '/api/v1': {
    //   target: process.env.api,
    //   pathRewrite: {
    //     '^/api': ''
    //   },
    //   changeOrigin: true,
    //   secure: process.env.ENV !== 'development'
    // }
  },
  toast: {
    position: 'top-right',
    duration: 4000,
    iconPack: 'mdi',
    register: [
      {
        name: 'error',
        message: 'متاسفانه خطایی رخ داد',
        options: {
          type: 'error',
          icon: 'mdi-alert-outline'
        }
      },
      {
        name: 'success',
        message: 'عملیات با موفقیت انجام شد',
        options: {
          type: 'success',
          icon: 'mdi-check'
        }
      }
    ]
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: '~plugins/vuetify.options.ts'
  },
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  },
  build: {
    transpile: ['vee-validate/dist/rules'],

    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    }
  }
}
