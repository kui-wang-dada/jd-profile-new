<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCommon } from "@/store/common";
let store = useCommon()
let projectList = store.projectList
const { t, locale, te } = useI18n()
const props = defineProps(['filter'])

let visible = ref(false)
let activeItem = reactive({})
let queryParams = computed(() => { })
let swiperOptionTop = reactive({
  loop: true,
  loopedSlides: 5, // looped slides should be the same
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
let swiperOptionThumbs = reactive({
  loop: true,
  loopedSlides: 5, // looped slides should be the same
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
})
const getImage = (name) => {
  return new URL(`${name}`, import.meta.url).href
}
</script>
<template>
  <div class='wrap'>
  </div>
</template>
<style scoped lang="less">
.case-list-wrap {
  .card {
    :deep(.ant-card-body) {
      padding: 0;
    }

    .card-wrap {
      .flex-row;
      position: relative;
      width: 450px;
      height: 250px;

      .bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 60%;
        bottom: 0;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        filter: blur(1px) brightness(90%);
        color: #fff;
      }

      .card-con {
        z-index: 1;
        padding-left: 42%;
        padding-right: 2%;

        h3 {
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .type-wrap {
          margin-top: 10px;
        }

        .stack-wrap {
          margin-top: 10px;
        }
      }
    }
  }
}

.thumb-example {
  height: 780px;
  background-color: #000;
}

.swiper {
  .swiper-slide {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    &.slide-1 {
      background-image: url('@/assets/img/project/app/quanhu/3.png');
    }

    &.slide-2 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }

    &.slide-3 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }

    &.slide-4 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }

    &.slide-5 {
      background-image: url('~@/assets/img/project/app/quanhu/3.png');
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }

  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  &.gallery-thumbs .swiper-slide {
    width: 20%;
    height: 100%;
    opacity: 0.4;
  }

  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>