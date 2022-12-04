<template>
  <AppLayout>
    <template #operation>
      <el-button type="primary">新增</el-button>
      <el-button type="danger" disabled>删除</el-button>
    </template>
    <template #content> body </template>
  </AppLayout>
</template>

<script setup>
import { AppLayout } from "@/components";
</script>
