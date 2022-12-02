<template>
  <h5>我是子组件中展示的store信息：模块名称：{{ modulename }}</h5>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user.js";

const store = useUserStore();
const { modulename } = storeToRefs(store);
</script>
