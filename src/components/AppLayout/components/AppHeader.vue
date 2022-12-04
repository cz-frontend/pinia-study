<template>
  <header class="app-header">
    <div class="left-box">
      <div class="logo">锤子前端</div>
    </div>
    <div class="right-box">欢迎您，超级管理员!</div>
  </header>
</template>

<script setup></script>

<style lang="less" scoped>
.app-header {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(71, 71, 193);
  padding: 0 20px;
  .left-box {
    .logo {
      color: #fff;
      font-size: 26px;
    }
  }
  .right-box {
    color: #fff;
  }
}
</style>
