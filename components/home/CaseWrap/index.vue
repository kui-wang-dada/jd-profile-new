<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import CaseFilter from './CaseFilter.vue'
import CaseList from './CaseList.vue'
const props = defineProps(['filter'])

onMounted(() => { })
let queryParams = computed(() => { })
let filter = reactive({
  stackCheck: [],
  typeCheck: [],
})
const changeType = (typeContent) => {
  filter.typeCheck = typeContent
  console.log(filter.typeCheck);
}
const changeStack = (stackContent) => {
  filter.stackCheck = stackContent
  console.log(filter.stackCheck);
}
</script>
<template>
  <section class="case-wrap section-wrap">
    <div class="top-wrap">
      <h3>{{ $t('case.label0') }}</h3>
      <img class="icon-list" src="@img/common/icon-list.png" alt="" />
    </div>
    <div class="con-main-wrap">
      <div class="case-filter">
        <CaseFilter :filter="filter" :changeType="changeType" :changeStack="changeStack"></CaseFilter>
      </div>
      <div class="case-list">
        <CaseList :filter="filter"></CaseList>
      </div>
    </div>
  </section>
</template>
<style scoped lang="less">
.section-wrap {
  padding: 60px 0 90px;

  .top-wrap {}

  .con-main-wrap {
    margin-top: 40px;

    .case-filter {
      margin-bottom: 20px;
    }

    .ant-btn {
      margin-top: 40px;
    }
  }
}
</style>