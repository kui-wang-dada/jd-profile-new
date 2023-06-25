<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useCommon } from '@/store/common'
const { t, locale, te } = useI18n()
const store = useCommon()
let tabList = computed(() => store.tabList)
// console.log(tabList);
// const props = defineProps({})
onMounted(() => { })
let columns = computed(() => ([
  {
    title: t('website.column1'),
    scopedSlots: { customRender: 'index' },
    key: 1,
    width: '5%'
  },
  {
    title: t('website.column2'),
    dataIndex: 'name',
    key: 2
  },
  {
    title: t('website.column3'),
    dataIndex: 'duty',
    key: 3
  },
  {
    title: t('website.column4'),
    dataIndex: 'stack',
    key: 4
  },
  {
    title: t('website.column5'),
    dataIndex: 'hard',
    key: 5
  },
  {
    title: t('website.column6'),
    scopedSlots: { customRender: 'link' },
    key: 6
  },
]))
</script>
<template>
  <div class='wrap section-wrap'>
    <div class="top-wrap">
      <h3>{{ $t('website.title1') }}</h3>
      <h5>{{ $t('website.title2') }}</h5>
      <img class="icon-list" src="/img/home/icon-list.png" alt="" />
    </div>
    <a-tabs animated :tabBarGutter="20">
      <a-tab-pane v-for="item in tabList" :key="item.name">
        <template #tab>
          <span>
            <div class="tab-head">
              <p>{{ item.title }}</p>
            </div>
          </span>
        </template>
        <div class="tab-con">
          <div class="tab-top">
            <h4>{{ item.title }}</h4>
            <h5>{{ $t('website.time') }}:{{ item.time }}</h5>
            <h6 v-for="label_ in item.label" :key="label_">{{ label_ }}</h6>
          </div>
          <div class="tab-con-main">
            <a-table rowKey="name" style="background: #fff" :columns="columns" :data-source="item.con">
              <template #bodyCell="{ column, record, index }">
                <template v-if="column.key === 1">
                  <span>{{ index + 1 }}</span>
                </template>
                <template v-if="column.key === 6 && record.detail">
                  <a v-if="record.detail" :href="record.detail.link" target="_blank">{{ record.detail.label }}</a>
                  <span v-else>{{ record.detail.label }}</span>
                </template>
              </template>
              <!-- <span slot="index" slot-scope="text, record, index">{{ index + 1 }}</span>
              <template v-if="record.detail" slot="link" slot-scope="text, record">
                <a v-if="record.detail.link" :href="record.detail.link" target="_blank">{{ record.detail.label }}</a>
                <span v-else>{{ record.detail.label }}</span>
              </template> -->
            </a-table>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<style scoped lang="less">
.wrap {
  padding-top: 60px;

  :deep(.ant-tabs) {
    margin-top: 50px;

    .ant-tabs-nav-wrap {
      .flex-row;
      justify-content: space-around;
    }

    .ant-tabs-nav {
      margin-bottom: 0;
    }

    .ant-tabs-tab {
      padding: 12px 16px;
    }

    .ant-tabs-tab-active {
      .tab-head {
        p {
          font-weight: 500;
          color: #0c5afc;
        }
      }
    }

    .tab-head {
      .flex-col;

      p {
        font-size: 20px;
        color: #0c5afc;
      }
    }

    .ant-spin-nested-loading {
      margin-top: 0 !important;

      div {
        margin-top: 0 !important;
      }
    }


    .tab-con {
      background: #f3f8fd;
      background-size: 100% 100%;
      .flex-col;
      justify-content: flex-start;

      .tab-top {
        .flex-col;

        .logo {
          height: 60px;
        }

        h4 {
          margin-top: 40px;
          font-size: 34px;
          font-weight: 600;
          color: #333333;
        }

        h5 {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 400;
          color: #333333;
        }

        h6 {
          margin-top: 5px;
          font-size: 16px;
          font-weight: 400;
          color: #333;
        }
      }



      .tab-con-main {
        width: 1200px;
        margin: 0 auto;

        margin-top: 40px;
        margin-bottom: 40px;

        div {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>