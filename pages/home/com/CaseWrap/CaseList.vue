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
const getImage = (name) => {
  let imgName = name.substring(name.indexOf('project'));
  return new URL(`../../../../assets/img/${imgName}`, import.meta.url).href
}

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
                <p>{{ item.label }}</p>
                <div class="type-wrap">
                  <span>{{ $t('case.label3') }}：</span>
                  <a-tag v-for="tag in item.type" :key="tag" color="red">{{ tag }}</a-tag>
                </div>
                <div class="stack-wrap">
                  <span>{{ $t('case.label4') }}：</span>
                  <a-tag v-for="tag in item.stack" :key="tag" color="green">{{ tag }}</a-tag>
                </div>
              </div>
              <div class="bg" :style='{ backgroundImage: `url(${getImage(item.thumb)})` }'>
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
        <a-carousel :autoplay="true" class="swiper">
          <div v-for="(item, index) in activeItem.img" :key='index'>
            <div class="img-box" :style="`background-image: url(${getImage(item)});`">
            </div>
          </div>
        </a-carousel>
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

        .ant-tag {
          margin-right: 8px;
        }
      }
    }
  }
}

.thumb-example {
  height: 780px;
  background-color: #000;
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;

  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide .img-box) {
  height: 780px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 100%;
}
</style>