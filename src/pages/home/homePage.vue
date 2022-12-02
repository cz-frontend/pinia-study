<template>
  <div>
    <h1>模块名称：{{ store.modulename }}</h1>
    <ChildComponent />

    <button @click="onRename">更新模块名称</button>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import ChildComponent from "./components/ChildComponent.vue";

const store = useUserStore();
const onRename = () => {
  store.modulename = "用户管理";
};
</script>
