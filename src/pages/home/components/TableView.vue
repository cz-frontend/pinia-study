<template>
  <el-table :data="dataSource" empty-text="暂无数据">
    <el-table-column prop="title" label="主题" />
    <el-table-column prop="desc" label="通知描述" />
    <el-table-column label="操作" fixed="right" width="120px">
      <template #default="{ row, $index }">
        <el-button type="danger" plain @click="deleteHandle(row, $index)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ElMessage } from "element-plus";

const emits = defineEmits(["delete"]);

defineProps({
  dataSource: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

/**
 * 删除
 */
const deleteHandle = (record, index) => {
  emits("delete", record, index);
  ElMessage.success("操作成功");
};
</script>
