<template>
  <section>
    <h5>我是子组件中展示的store信息：模块名称：{{ modulename }}</h5>

    <input
      type="text"
      v-model="modulename"
      placeholder="输入你想要修改的名字"
    />
    <buttonstore @click="onReset">重置</buttonstore>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user.js";

const store = useUserStore();
const { modulename } = storeToRefs(store);

/**
 * 重置
 */
const onReset = () => {
  store.$reset();
};
</script>
