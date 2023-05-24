import { acceptHMRUpdate } from "pinia";
import { tabList, tabListEn, projectList, projectListEn } from '@/utils/constant'
export const useCommon = defineStore('common', {
  state: () => ({
    lang: 'en' as 'en' | 'zh',
    tabList: tabListEn,
    projectList: projectListEn
  }),

  actions: {
    // 此处为设置locale
    changeLang(lang: 'zh' | 'en') {

      this.lang = lang;
      if (this.lang == 'zh') {
        this.tabList = tabList
        this.projectList = projectList
      } else if (this.lang == 'en') {
        this.tabList = tabListEn
        this.projectList = projectListEn
      }
    },
    changeMe() {
      console.log('change me to test HMR')
    },

  },
  getters: {

  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommon, import.meta.hot))
}
