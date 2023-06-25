<script setup >
import { ref, onMounted, computed } from 'vue'
import { useCommon } from '@/store/common'
import { DownOutlined } from '@ant-design/icons-vue'
import { useI18n } from 'vue-i18n'
const store = useCommon()
const { t, locale, te } = useI18n()
// console.log(123, useI18n());
const route = useRoute()
// console.log(123);
// console.log(t, 'ttt')
const props = defineProps({})
const data = reactive({
  activeIndex: 0,
  headerChange: false,
  shadowRoute: ['work'],
  numArr: [0, 0, 0, 0],
})
const list = computed(() => ([{
  title: t('header.title1'),
  name: 'index',
},
{
  title: t('header.title2'),
  name: 'work',
},
{
  title: t('header.title3'),
  name: 'project',
},

{
  title: t('header.title4'),
  name: 'blog',
}]))
const keyValue = computed(() => {
  const stragety = {
    zh: t('common.zh'),
    en: t('common.en'),
  };
  return stragety[store.lang];
})
onMounted(() => {
  checkRoute(route);
  initDomHeight();
  window.addEventListener('scroll', onScroll);
})

const initDomHeight = () => {
  const sectionArr = document.getElementsByClassName('section-wrap');
  let initTop = 50;
  data.numArr = Array.prototype.map.call(sectionArr, (item, index) => {
    if (index === 0) {
      initTop = item.offsetTop + initTop;
    }
    return item.offsetTop - initTop;
  });
}
const handleLangItem = (e) => {
  locale.value = e.key
  store.changeLang(e.key);
}
const onScroll = () => {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 140) {
    data.headerChange = true;
  } else {
    data.headerChange = false;
  }
  let activeIndex = 0;
  data.numArr.forEach((num, index) => {
    if (scrollTop >= num) {
      activeIndex = index;
    }
  });
  data.activeIndex = activeIndex;
}

const checkRoute = (newV) => {
  // console.log(newV, 'newV');
  if (data.shadowRoute.includes(newV.name)) {
    data.headerChange = true;
  } else {
    data.headerChange = false;
  }
  if (newV) {
    const name = newV.name;
    const index = list.value.findIndex(item => item.name === name);
    data.activeIndex = index;
  }
}
const goTo = (item, index) => {
  if (item.link) {
    window.open(item.link);
    return;
  }
  data.activeIndex = index;
  const top = data.numArr[index];
  // console.log(top, 'top');
  document.documentElement.scrollTo({ left: 0, top, behavior: 'smooth' });
}
</script>
<template>
  <div class="wrap" :class="{ headerChange: data.headerChange }">
    <div class="main-wrap">
      <img class="logo" src="/img/common/logo.png" alt="" />
      <div class="right-wrap">
        <div v-for="(item, index) in list" :key="index" :class="{ isActive: data.activeIndex === index }"
          class="right-item" @click="goTo(item, index)">
          <p>{{ item.title }}</p>
        </div>
        <div class="lang-wrap">
          <img class="icon-lang" src="/img/common/icon-lang.png" alt="" />
          <a-dropdown>
            <p class="ant-dropdown-link">{{ keyValue }} <down-outlined /></p>
            <template #overlay>
              <a-menu slot="overlay" @click="handleLangItem">
                <a-menu-item key="zh">
                  <!-- <a href="javascript:;">中文简体</a> -->
                  <span>中文简体</span>
                </a-menu-item>
                <a-menu-item key="en">
                  <!-- <a href="javascript:;">English</a> -->
                  <span>English</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang='less'>
.wrap {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  // background-color: #ccc;

  &.headerChange {
    height: 69px;
    background: #ffffff;
    box-shadow: 0px 6px 23px 0px rgba(16, 40, 90, 0.1);

    .main-wrap {
      .right-wrap {
        .right-item {
          p {
            color: #333333;
          }

          &.isActive {
            p {
              color: @primaryColor;
            }

            &::after {
              background: @primaryColor;
            }
          }
        }

        .lang-wrap {
          p {
            color: #4a5871;
          }
        }
      }
    }
  }

  .main-wrap {
    width: 1400px;
    height: 69px;
    margin: 0 auto;
    .flex-row();
    justify-content: space-between;

    .logo {
      width: 60px;
      height: 50px;
      border-radius: 25px;
    }

    .right-wrap {
      .flex-row();

      .right-item {
        margin-right: 100px;
        cursor: pointer;
        position: relative;
        width: auto;

        p {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }

        &.isActive {
          font-size: 20px;
          font-weight: 500;
          border: none;

          &::after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 3px;
            background: #fff;
            left: 50%;
            top: 30px;
            transform: translateX(-50%);
            border-radius: 10px;
          }
        }
      }

      .lang-wrap {
        .icon-lang {
          width: 14px;
          height: 14px;
        }

        p {
          margin-left: 10px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
        }

        .flex-row();
      }
    }
  }
}
</style>