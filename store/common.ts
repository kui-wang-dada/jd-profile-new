import { acceptHMRUpdate } from "pinia";


export const useCommon = defineStore('common', {
  state: () => ({
    lang: 'en' as 'en' | 'zh',
  }),

  actions: {
    // 此处为设置locale
    changeLang(lang: 'zh' | 'en') {

      this.lang = lang;
    },

    changeMe() {
      console.log('change me to test HMR')
    },


  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommon, import.meta.hot))
}
