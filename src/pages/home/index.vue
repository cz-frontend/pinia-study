<template>
  <AppLayout
    :operation-conf="OperationButtonsConf"
    @click-operation="handleOperation"
  >
    <template #operation> </template>
    <template #content>
      <TableView :data-source="list" @delete="deleteHandle" />
    </template>
  </AppLayout>

  <!-- 弹窗 -->
  <OperationModal ref="refOperation" @refresh="_loadData" />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { AppLayout } from "@/components";
import { ref, reactive, onMounted } from "vue";
import { OperationButtonsConf } from "./config";
import { useNiticeManage } from "@/store/notice";
import OperationModal from "./operation-model.vue";
import TableView from "./components/TableView.vue";

const store = useNiticeManage();
const { list } = storeToRefs(store);

/**
 * 初始化页面数据
 */
onMounted(() => {
  _loadData();
});

/**
 * 获取列表数据
 */
const _loadData = () => {
  // 业务逻辑
};

/**
 * 处理操作按钮点击
 */
const handleOperation = (record) => {
  record.operationType === "added"
    ? displayModalHandle({ type: "added", title: "新增通知", record: {} })
    : deleteHandle();
};

/**
 * 新增 / 编辑
 */
const refOperation = ref();
const displayModalHandle = (config) => {
  refOperation.value.dataFormInit(config);
};

/**
 * 删除
 */
const deleteHandle = (record, index) => {
  store.deleteList(index);
};
</script>
