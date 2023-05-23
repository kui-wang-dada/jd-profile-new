<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCommon } from "@/store/common";
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
const props = defineProps(['filter', 'changeStack', 'changeType'])
// console.log(props.changeFilter, props.filter);
let store = useCommon()
let projectList = store.projectList
let typeList = computed(() => {
  let list = []
  projectList.forEach(item => {
    list.push(...item.type)
  })
  list = [t('common.all'), ...new Set(list)];
  return list
})
console.log(store.projectList);
let stackList = computed(() => {
  let list = []
  projectList.forEach(item => {
    list.push(...item.stack)
  })
  list = [t('common.all'), ...new Set(list)];
  return list
})
const changeType = (checked, item) => {
  console.log(typeCheck);
}
const changeStack = (checked, item) => {
  console.log(stackCheck);
}
let typeCheck = reactive({})
let stackCheck = reactive({})
console.log(props.filter.typeCheck);
</script>
<template>
  <div class='filter-wrap'>
    <div class="filter-item">
      <span class="label">{{ $t('case.label1') }}：</span>
      <a-checkable-tag v-for="typeItem in typeList" :key="typeItem" v-model:checked="typeCheck[typeItem]"
        @change="changeType">
        {{ typeItem }}
      </a-checkable-tag>
    </div>
    <div class="filter-item">
      <span class="label">{{ $t('case.label2') }}：</span>
      <a-checkable-tag v-for="stackItem in stackList" :key="stackList" v-model:checked="stackCheck[stackItem]"
        @change="changeStack">
        {{ stackItem }}
      </a-checkable-tag>
    </div>
  </div>
</template>
<style scoped lang="less">
.filter-wrap {
  .filter-item {
    .flex-row;
    justify-content: flex-start;

    .label {
      font-size: 20px;
      color: #333;
      font-weight: bold;
      width: 150px;
    }

    .list-wrap {
      margin-bottom: 10px;

      .ant-tag {
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>