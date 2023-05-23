<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
// console.log(t('banner.title1'));
const list = reactive([t('banner.label1'), t('banner.label2'), t('banner.label3'), t('banner.label4'), t('banner.label5')])
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class="wrap section-wrap">
    <div class="con-wrap">
      <div class="bg" />
      <div class="main-wrap">
        <div class="item-con">
          <h3>{{ $t('banner.title1') }}</h3>
          <!-- <h5>{{ con.label1 }}</h5>
          <h5>{{ con.label2 }}</h5>
          <h5>{{ con.label3 }}</h5>
          <h5>{{ con.label4 }}</h5>
          <h5>{{ con.label5 }}</h5> -->
          <h5 v-for="(item, index) in list" :key="index">{{ item }}</h5>
        </div>
        <img src="@img/common/profile.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  .con-wrap {
    width: 100%;

    // height: 410px;

    // position: absolute;
    // top: 0;
    // right: 0;
    // left: 0;
    // bottom: 0;

    position: relative;
    padding: 110px 0 50px;

    .bg {
      filter: brightness(60%);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: #1563f9;
    }

    .main-wrap {
      width: @contentWidth;
      margin: 0 auto;
      .flex-row;
      justify-content: space-between;

      .item-con {
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

      img {
        width: 150px;
      }
    }
  }
}
</style>