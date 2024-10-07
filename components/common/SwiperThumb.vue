<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue';

// // Import Swiper styles
// import 'swiper/css';

// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';


// // import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const props = defineProps(['imgList'])
console.log(props, 'props')
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <swiper :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
    :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" class="mySwiper2">

    <swiper-slide v-for="item in props.imgList"> <a-image :src="item" /></swiper-slide>

  </swiper>
  <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="5" :freeMode="true" :watchSlidesProgress="true"
    :modules="[SwiperFreeMode, SwiperNavigation, SwiperThumbs]" class="mySwiper">
    <swiper-slide v-for="item in props.imgList"><img :src="item" /></swiper-slide>
  </swiper>
</template>
<style scoped lang='less'>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;

  .swiper-slide {
    background: #000
  }
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 20%;
  height: 100%;
  opacity: 0.5;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
