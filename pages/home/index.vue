<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { TopBanner, Website, Blog, CaseWrap } from './com/index';
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='home'>
    <TopBanner></TopBanner>
    <Website></Website>
    <CaseWrap></CaseWrap>
    <Blog></Blog>
  </div>
</template>
<style scoped lang='less'>
h2 {
  // font-size: 200px;
}
</style>