<template>
  <div>
    <h1>模块名称：{{ store.modulename }}</h1>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";

const store = useUserStore();
</script>
