import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['ant-design-vue/dist/antd.css', 'assets/css/index.less'],
  alias: {
    '@img': fileURLToPath(new URL('./assets/img', import.meta.url)),

  },
  // Global CSS: https://go.nuxtjs.dev/config-css

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-swiper',
  ],
  i18n: {
    // vueI18n: './assets/lang/index.ts' // if you are using custom path, default 
    // locales: ['en', 'zh'],
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      { code: 'zh', file: 'zh.json' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'assets/lang/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    experimental: {
      jsTsFormatResource: true,
    },
    // defaultLocale: 'en',
    // vueI18n: './assets/lang/index.ts'
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  plugins: [
    '@/plugins/antd-ui',
    // { src: "~/plugins/swiper.ts", ssr: false }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/css/index.less";',
        },
      },
    },
  }
})
