<template>
  <AppLayout
    :operation-conf="OperationButtonsConf"
    @click-operation="handleOperation"
  >
    <template #operation> </template>
    <template #content> body </template>
  </AppLayout>

  <!-- 弹窗 -->
  <OperationModal ref="refOperation" />
</template>

<script setup>
import { ref } from "vue";
import { AppLayout } from "@/components";
import OperationModal from "./operation-model.vue";
import { OperationButtonsConf } from "./config/index";

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
const deleteHandle = () => {};
</script>
