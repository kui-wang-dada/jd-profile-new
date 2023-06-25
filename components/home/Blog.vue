<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
const props = defineProps({})
onMounted(() => { })
let list1 = computed(() => ([
  {
    title: t('blog.item1'),
    link: 'https://juejin.cn/post/6961010353471750158',
  },
  {
    title: t('blog.item2'),
    link: 'https://juejin.cn/post/6963433125808455716',
  },
  {
    title: t('blog.item3'),
    link: 'https://juejin.cn/post/6968719664897589279',
  },
]))
let list2 = computed(() => ([
  {
    title: t('blog.item4'),
    link: 'http://www.dadafastrun.com/blog/JS/object.html#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F',
  },
  {
    title: t('blog.item5'),
    link: 'http://www.dadafastrun.com/blog/app/RNSummary.html',
  },
  {
    title: t('blog.item6'),
    link: 'http://www.dadafastrun.com/blog/web/http.html',
  },
  {
    title: t('blog.item7'),
    link: 'http://www.dadafastrun.com/blog/goujian/docker.html',
  },
]))
</script>
<template>
  <div class='wrap section-wrap'>
    <div class="top-wrap">
      <h3>{{ $t('blog.title1') }}</h3>
      <h5>
        {{ $t('blog.title2') }}
        <a target="_blank" href="http://www.dadafastrun.com/blog/">{{ $t('common.detail') }}</a>
      </h5>
      <img class="icon-list" src="/img/home/icon-list.png" alt="" />
    </div>
    <div class="blog-wrap">
      <div class="blog-item blog-1">
        <h4>{{ $t('blog.title3') }}</h4>
        <div class="list-wrap">
          <div v-for="item in list1" :key="item.title" class="list-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </div>
      <div class="blog-item blog-2">
        <h4>{{ $t('blog.title4') }}</h4>
        <div class="list-wrap">
          <div v-for="item in list2" :key="item.title" class="list-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  padding-top: 60px;
  padding-bottom: 80px;

  .blog-wrap {
    .flex-row;
    align-items: flex-start;
    margin-top: 40px;

    .blog-item {
      width: 450px;

      &:nth-child(1) {
        margin-right: 60px;
      }

      h4 {
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 10px;
      }

      .list-wrap {
        .list-item {
          border-bottom: 1px solid #e1e1e1;
          font-size: 16px;
          padding: 10px 0;

          a {
            color: #333;


          }

          a:hover {
            color: @primary-color;
          }
        }
      }
    }
  }
}
</style>