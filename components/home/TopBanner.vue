<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
// console.log(t('banner.title1'));
const list = computed(() => [t('banner.label1'), t('banner.label2'), t('banner.label3'), t('banner.label4'), t('banner.label5')])
const props = defineProps({})
onMounted(() => { })
let imgJd = computed(() => {
  return locale.value === 'en' ? '/img/home/wk-jd-en.png' : '/img/home/wk-jd.png'
})


</script>
<template>
  <div class="wrap section-wrap">
    <div class="con-wrap">
      <div class="bg" />
      <div class="main-wrap">
        <div class="item-con">
          <h3>{{ $t('banner.title1') }}</h3>
          <h5 v-for="(item, index) in list" :key="index">{{ item }}</h5>
        </div>
        <a-image :src="imgJd"></a-image>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  .con-wrap {
    width: 100%;
    position: relative;
    padding: 110px 0 50px;

    .bg {
      background-image: url(/img/common/profile-1.png), url(/img/common/profile-2.png), url(/img/common/profile-3.png), url(/img/common/profile-4.png);
      background-position-x: 0, 25%, 65%, 100%;
      background-repeat: no-repeat;
      background-size: 20%, 20%, 40%, 20%;
      filter: brightness(20%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      z-index: -1;
      background-color: #1563f9;
    }

    .main-wrap {
      width: @contentWidth;
      margin: 0 auto;
      .flex-row;
      justify-content: space-between;
      gap: 40px;

      .item-con {
        flex: 1;


        h3 {
          font-size: 50px;
          font-weight: 600;
          color: #ffffff;
          text-align: left;
        }

        h5 {
          font-size: 20px;
          color: #ffffff;
          text-align: left;
          margin-top: 10px;
        }
      }

      :deep(.ant-image) {
        width: 300px;
      }
    }
  }
}
</style>