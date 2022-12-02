<template>
  <div>
    <h1>模块名称：{{ modulename }}</h1>
    <ChildComponent />

    <button @click="onRename">更新模块名称</button>

    <br />
    <br />
    <br />

    <section>
      <h3>批量修改store数据呀</h3>
      <ul>
        <li>姓名： {{ userinfo.name }}</li>
        <li>病别： {{ userinfo.age }}</li>
        <li>描述： {{ userinfo.desc }}</li>
      </ul>

      <input type="text" v-model="formData.name" placeholder="姓名" />
      <br />
      <input type="text" v-model="formData.age" placeholder="年龄" />
      <br />
      <input type="text" v-model="formData.desc" placeholder="描述" />
      <br />
      <button @click="onSubmit">提交</button>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";
import ChildComponent from "./components/ChildComponent.vue";

const store = useUserStore();
const { modulename, userinfo } = storeToRefs(store);

const onRename = () => {
  store.modulename = "用户管理";
};

/**
 * 批量修改store数据
 */
const formData = reactive({});
const onSubmit = () => {
  console.log("修改前", store.userinfo);
  store.$patch((store) => {
    store.userinfo = formData;
  });
  console.log("修改后", store.userinfo);
};
</script>
