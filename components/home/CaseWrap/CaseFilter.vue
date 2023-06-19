<script setup>
import { ref, onMounted, computed, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCommon } from "@/store/common";
import { useI18n } from 'vue-i18n'
const { t, locale, te } = useI18n()
const props = defineProps(['filter', 'changeStack', 'changeType'])
let store = useCommon()
let projectList = computed(() => store.projectList)
let typeCheck = reactive({})
let stackCheck = reactive({})

let typeList = computed(() => {
  let list = []
  projectList.value.forEach(item => {
    list.push(...item.type)
  })
  list = [t('common.all'), ...new Set(list)];
  return list
})
console.log(store.projectList);
let stackList = computed(() => {
  let list = []
  projectList.value.forEach(item => {
    list.push(...item.stack)
  })
  list = [t('common.all'), ...new Set(list)];
  return list
})
typeList.value.forEach(item => typeCheck[item] = false)
stackList.value.forEach(item => stackCheck[item] = false)
const changeType = (checked, item) => {
  if (item == t('common.all')) {
    for (const key in typeCheck) {
      typeCheck[key] = checked
    }
  }
  let list = []
  for (const key in typeCheck) {
    if (typeCheck[key] && key != t('common.all')) {
      list.push(key)
    }
  }
  props.changeType(list)
}
const changeStack = (checked, item) => {
  // console.log(item);
  if (item == t('common.all')) {
    for (const key in stackCheck) {
      stackCheck[key] = checked
    }
  }
  let list = []
  for (const key in stackCheck) {
    if (stackCheck[key] && key != t('common.all')) {
      list.push(key)
    }
  }
  props.changeStack(list)
}

</script>
<template>
  <div class='filter-wrap'>
    <div class="filter-item">
      <span class="label">{{ $t('case.label1') }}：</span>
      <div class="list-wrap">
        <a-checkable-tag v-for="typeItem in typeList" :key="typeItem" v-model:checked="typeCheck[typeItem]"
          @change="(checked) => changeType(checked, typeItem)">
          {{ typeItem }}
        </a-checkable-tag>
      </div>
    </div>
    <div class="filter-item">
      <span class="label">{{ $t('case.label2') }}：</span>
      <div class="list-wrap">
        <a-checkable-tag v-for="stackItem in stackList" :key="stackList" v-model:checked="stackCheck[stackItem]"
          @change="(checked) => changeStack(checked, stackItem)">
          {{ stackItem }}
        </a-checkable-tag>
      </div>
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
      margin-right: 10px;
    }

    .list-wrap {
      // margin-bottom: 10px;

      .ant-tag {
        font-size: 16px;
        cursor: pointer;
      }

      .ant-tag {
        margin-right: 8px;
      }
    }
  }
}
</style>