<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCommon } from "@/store/common";
import { Swiper, SwiperSlide } from 'swiper/vue';
let store = useCommon()
// let projectList = store.projectList
let projectList = computed(() => store.projectList)
let visible = ref(false)
let activeItem = reactive({})
const { t, locale, te } = useI18n()
const props = defineProps(['filter'])

console.log(projectList);
let list = computed(() => {
  if (props.filter.stackCheck.length == 0 && props.filter.typeCheck.length == 0) {
    return projectList.value
  }
  let arr = []
  props.filter.stackCheck.forEach(item => {
    projectList.value.forEach(proItem => {
      if (proItem.stack.includes(item)) arr.push(proItem)
    })
  })
  props.filter.typeCheck.forEach(item => {
    projectList.value.forEach(proItem => {
      if (proItem.type.includes(item)) arr.push(proItem)
    })
  })
  return arr
})


const clickItem = (item) => {
  console.log(item);
  activeItem = { ...item };
  if (activeItem.con) {
    activeItem.con = activeItem.con.map((item) => {
      return item.split(",")
    })
  }
  console.log(activeItem);
  visible.value = true
}
const hideModal = () => {
  visible.value = false
}

</script>
<template>
  <div class='case-list-wrap'>
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }" :dataSource="list">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card hoverable class="card" @click="clickItem(item)">
            <div class="card-wrap">
              <div class="card-con">
                <h3>{{ item.name }}</h3>
                <div class="tag-list">
                  <a-tag v-for="tag in item.type" :key="tag" size="large" color="red">{{ tag }}</a-tag>
                  <a-tag v-for="tag in item.stack" :key="tag" size="large" color="green">{{ tag }}</a-tag>
                </div>
                <p>{{ item.label }}</p>

              </div>
              <div class="bg" :style='{ backgroundImage: `url(${item.thumb})` }'>
              </div>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
    <a-modal v-model:visible="visible" width="70%" :title="activeItem.name" :okText="$t('common.confirm')"
      :cancelText="$t('common.cancel')" @ok="hideModal">
      <div>
        <a-descriptions :title="$t('case.label6')">
          <a-descriptions-item v-for="con in activeItem.con" :key="con[0]" :label="con[0]">
            <a v-if="con[1].includes('http')" :href="con[1]" target="_blank"> {{ con[1] }}</a>
            <span v-else>{{ con[1] }}</span>
          </a-descriptions-item>
        </a-descriptions>
      </div>
      <div class="thumb-example">
        <h3>{{ $t('case.label5') }}</h3>
        <!-- swiper1 -->
        <div class="img-list">
          <a-image-preview-group>
            <a-image v-for="(item, index) in activeItem.img" :key='index' :src="item" />
          </a-image-preview-group>
        </div>

      </div>
    </a-modal>
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
      align-items: flex-start;
      overflow: hidden;
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
        width: 100%;
        padding-top: 15px;
        z-index: 1;
        padding-left: 42%;
        padding-right: 2%;

        h3 {
          font-size: 16px;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .tag-list {
          .flex-row;
          justify-content: flex-start;
          flex-wrap: wrap;

          gap: 8px;
          margin-bottom: 5px;

        }


      }
    }
  }
}

.thumb-example {
  background-color: #000;

  .img-list {
    .flex-row;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;

    :deep(.ant-image) {
      width: 30%
    }
  }
}
</style>