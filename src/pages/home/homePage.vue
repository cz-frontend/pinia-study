<template>
  <div>home</div>
</template>

<script setup>
import { useUserStore } from "@/store/user";

const store = useUserStore();
console.log(store);
</script>
