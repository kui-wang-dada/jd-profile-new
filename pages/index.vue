<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='wrap'>
    <homeTopBanner></homeTopBanner>
    <homeWebsite></homeWebsite>
    <homeCaseWrap></homeCaseWrap>
    <homeBlog></homeBlog>
  </div>
</template>
<style scoped lang='less'></style>