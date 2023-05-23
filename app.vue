<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='wrap'>
    <CommonTopBar />
    <NuxtLayout>
      <NuxtPage></NuxtPage>
      <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
    </NuxtLayout>
    <CommonFooter />
  </div>
</template>
<style scoped lang='less'></style>