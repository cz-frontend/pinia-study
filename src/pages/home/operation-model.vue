<template>
  <CzModal
    :title="formConf.title"
    v-model="displayModal"
    @cancel="dataFormCancel"
    @confirm="dataFormSubmit(refForm)"
  >
    <el-form
      ref="refForm"
      model="dataForm"
      :rules="rulesConf"
      label-width="88px"
    >
      <el-form-item label="通知主题" prop="title">
        <el-input v-model="dataForm.title" maxlength="8" />
      </el-form-item>
      <el-form-item label="通知内容" prop="desc">
        <el-input
          type="textarea"
          maxlength="30"
          v-model="dataForm.desc"
          :autosize="{ minRows: 3, maxRows: 6 }"
        />
      </el-form-item>
    </el-form>
  </CzModal>
</template>

<script setup>
import { ref, reactive, toRefs, defineExpose } from "vue";
import { CzModal } from "@/base-ui/index";
import { rulesConf } from "./config";

const displayModal = ref(false);
const formConf = ref({
  title: "",
  type: "",
});
const dataForm = ref({
  title: "",
  desc: "",
});

/**
 * 初始化Modal
 */
const dataFormInit = (config) => {
  formConf.value = config;
  displayModal.value = true;
  dataForm.value = config.record;
};

/**
 * 保存
 */
const refForm = ref();
const dataFormSubmit = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      alert("调用接口");
    }
  });
};

/**
 * 关闭Modal
 */
const dataFormCancel = () => {
  displayModal.value = false;
};

defineExpose({
  dataFormInit,
});
</script>
