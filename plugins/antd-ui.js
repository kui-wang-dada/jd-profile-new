
import { Modal, Dropdown, Menu, Tabs, Tag, List, Card, Descriptions, Table, Carousel, Image } from 'ant-design-vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Modal);
  nuxtApp.vueApp.use(Dropdown);
  nuxtApp.vueApp.use(Menu);
  nuxtApp.vueApp.use(Tabs);
  nuxtApp.vueApp.use(Tag);
  nuxtApp.vueApp.use(List);
  nuxtApp.vueApp.use(Card);
  nuxtApp.vueApp.use(Descriptions);
  nuxtApp.vueApp.use(Table);
  nuxtApp.vueApp.use(Carousel);
  nuxtApp.vueApp.use(Image);
})

