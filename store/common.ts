import { acceptHMRUpdate } from "pinia";
import { tabList, tabListEn, projectList, projectListEn } from '@/utils/constant'
export const useCommon = defineStore('common', {
  state: () => ({
    lang: 'zh' as 'en' | 'zh',
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
  getters: {
    tabList: (state) => {
      if (state.lang === 'en') {
        return tabListEn
      } else if (state.lang === 'zh') {
        return tabList
      }
    },
    projectList: (state) => {
      if (state.lang === 'en') {
        return projectListEn
      } else if (state.lang === 'zh') {
        return projectList
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommon, import.meta.hot))
}
