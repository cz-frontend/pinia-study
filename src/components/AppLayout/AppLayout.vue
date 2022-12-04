<template>
  <AppHeader />
  <main>
    <div class="app-container">
      <div class="operation-bar">
        <slot name="operation" />
      </div>
      <slot name="content" />
    </div>
  </main>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<style lang="less" scoped>
.app-container {
  color: #333;
  font-size: 14px;
  padding: 20px;
  .operation-bar {
    display: flex;
    height: 40px;
    align-items: center;
    background-color: #eee;
    margin-bottom: 8px;
  }
}
</style>
