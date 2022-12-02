# pinia 学习

## 创建项目

这里我们使用最新的 vue3 来构建项目

```
npm init vue@latest

>> 选项
```

## 初始化项目

我们删除一些不必要的资源和文件目录

## 安装 pinia

```
npm i pinia
```

## 全局引用 pinia

这里需要在 man.js 中引用并注册

```
# 引入
import { createStore } from 'pinia'

# 声明
const store = createStore()

# 注册
app.use(store)
```

## 创建一个 store

其实就是创建一个模块

/src/store/user.js

```
import { defineStore } from 'pinia'

/**
* 声明一个用户store
 */
export const useUserStore = defineStore('users',{

})
```

## 在页面中引用

/src/pages/home/homePage.vue

```
<template>
  <div>home</div>
</template>

<script setup>
import { useUserStore } from "@/store/user";

const store = useUserStore();
console.log(store);
</script>

```
