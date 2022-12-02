<template>
  <div>
    <h1>模块名称：{{ store.modulename }}</h1>
    <ChildComponent />
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import ChildComponent from "./components/ChildComponent.vue";

const store = useUserStore();
</script>
