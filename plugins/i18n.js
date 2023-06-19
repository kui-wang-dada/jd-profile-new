import { createI18n } from 'vue-i18n'
import en from '../assets/lang/en.json'
import zh from '../assets/lang/zh.json'
export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      zh
    }
  })

  vueApp.use(i18n)
})
