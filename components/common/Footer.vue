<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
const props = defineProps({})
onMounted(() => { })
let majorList = computed(() => ([
  {
    title: t('footer.major.title1'),
    icon: '@img/common/qrcode-1.png'
  },
  {
    title: t('footer.major.title2'),
    icon: '@img/common/qrcode-2.png',
  },
]))
let linkList = computed(() => ([
  {
    title: t('footer.link.title'),
    con: [
      {
        title: t('footer.link.con1'),
        value: 'wangkui125',
      },
      {
        title: t('footer.link.con2'),
        value: '13100671550',
      },
      {
        title: t('footer.link.con3'),
        value: t('footer.link.con4'),
      },
      {
        title: 'github',
        link: 'https://github.com/wangkui1991',
      },
    ],
  },
]))

const getImage = (name) => {
  let imgName = name.substring(name.indexOf('common'));
  return new URL(`../../assets/img/${imgName}`, import.meta.url).href
}

</script>
<template>
  <div class='wrap'>
    <div class="con-main-wrap">
      <div class="link-wrap">
        <div class="left-wrap">
          <div v-for="(webType, index) in majorList" :key="webType.title" class="left-item flex-row">
            <h3>{{ webType.title }}</h3>
            <div class="img-box" :style="`background-image: url('${getImage(webType.icon)}');`"></div>
            <!-- <img :src="getImage(webType.icon)" alt="" /> -->
          </div>
        </div>
        <div class="right-wrap">
          <div class="link-list">
            <div v-for="(linkWrap, index) in linkList" :key="index" class="link-section">
              <h3>{{ linkWrap.title }}</h3>
              <div class="section-con">
                <div v-for="(link, index) in linkWrap.con" :key="index" class="link-item" @click="handleLink(link)">
                  <a v-if="link.link" :href="link.link">{{ link.title }}</a>
                  <div v-else>
                    <span>{{ link.title }}：</span>
                    <span>{{ link.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>{{ $t('footer.copyright.title1') }}</p>
      <p>{{ $t('footer.copyright.title2') }}</p>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  background: #2e3e5f;
  .flex-col;

  .con-main-wrap {
    .flex-col;
    justify-content: flex-start;

    .contact-wrap {
      width: 100%;
      height: 95px;
      .flex-row;
      justify-content: space-between;
      border-bottom: 1px solid #686a6d;

      .contact-item {
        .flex-row;
        cursor: pointer;

        .iconfont {
          margin-right: 20px;
          color: #fff;
          font-size: 30px;
        }

        h4 {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
        }

        p {
          font-size: 12px;
          color: #ffffff;
        }
      }
    }

    .link-wrap {
      width: 100%;
      padding: 30px 0;

      h3 {
        font-size: 18px;
        color: #bfbfc0;
        margin-bottom: 20px;
      }

      .flex-row;
      align-items: flex-start;
      justify-content: space-between;
      color: #fff;

      .left-wrap {
        width: 50%;
        .flex-row;
        flex-wrap: wrap;

        margin-right: 100px;

        .left-item {
          .flex-col;
          align-items: flex-start;
          margin-right: 80px;
          margin-bottom: 80px;

          .img-box {
            width: 250px;
            height: 80px;
            margin-right: 10px;
            background-size: 100% 100%;
          }
        }
      }

      .right-wrap {
        .link-list {
          .flex-row;
          align-items: flex-start;

          .link-section {
            margin-right: 60px;

            .section-con {
              .link-item {
                font-size: 16px;
                margin-bottom: 10px;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }

  .copyright {
    .flex-col;
    width: 100%;
    height: 60px;
    border-top: 1px solid #465471;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #969eaf;
  }
}
</style>