<template>
  <h5>我是子组件中展示的store信息：模块名称：{{ store.modulename }}</h5>
</template>

<script setup>
import { useUserStore } from "@/store/user.js";

const store = useUserStore();
</script>
