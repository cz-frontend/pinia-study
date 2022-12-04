<template>
  <el-dialog
    :title="title"
    :width="width"
    :center="isCenter"
    :show-close="isShowIcon"
    :draggable="isDraggable"
    :fullscreen="isFullscreen"
    :modelValue="displayModal"
    :close-on-click-modal="isClickCloseModal"
    :close-on-press-escape="isEscClickCloseModal"
  >
    <slot />
    <template #footer>
      <el-button @click="onCancel">{{ cancelText }}</el-button>
      <el-button type="primary" @click="onConfirm">{{ confirmText }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["cancel", "confirm"]);
const props = defineProps({
  // 对话框的宽度
  width: {
    type: String,
    default: "500px",
  },
  // 是否让dialog支持拖拽
  isDraggable: {
    type: Boolean,
    default: false,
  },
  // 是否开启全屏
  isFullscreen: {
    type: Boolean,
    default: false,
  },
  // 是否让header / 底部居中
  isCenter: {
    type: Boolean,
    default: false,
  },
  // 对话框的标题
  title: {
    type: String,
    default: "",
  },
  // 取消按钮文字
  cancelText: {
    type: String,
    default: "取 消",
  },
  // 是否显示关闭图标
  isShowIcon: {
    type: Boolean,
    default: false,
  },
  // 去定按钮文字
  confirmText: {
    type: String,
    default: "确定",
  },
  // 是否打开对话框
  displayModal: {
    type: Boolean,
    default: false,
  },
  // 是否可以通过点击遮罩层关闭弹唱
  isClickCloseModal: {
    type: Boolean,
    default: false,
  },
  // 是否可以通过按下Esc键关闭弹唱
  isEscClickCloseModal: {
    type: Boolean,
    default: false,
  },
});

/**
 * 关闭
 */
const onCancel = () => {
  emit("cancel");
};

/**
 * 确定
 */
const onConfirm = () => {
  emit("confirm");
};
</script>
