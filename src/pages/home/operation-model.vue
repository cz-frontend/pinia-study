<template>
  <CzModal
    :title="formConf.title"
    v-model="displayModal"
    @cancel="dataFormCancel"
    @confirm="dataFormSubmit(refForm)"
  >
    <el-form
      ref="refForm"
      :model="dataForm"
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
import { useNiticeManage } from "@/store/notice";
import { ElMessage } from "element-plus";
import { rulesConf } from "./config";
import { CzModal } from "@/base-ui";

const emits = defineEmits(["refresh"]);

const displayModal = ref(false);
const formConf = ref({
  title: "",
  type: "",
});
const dataForm = reactive({
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
const refForm = ref(null);
const store = useNiticeManage();
const dataFormSubmit = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      if (formConf.value.type === "added") {
        store.addedList({ id: new Date().getTime(), ...dataForm });
        refForm.value.resetFields();

        emits("refresh");
        ElMessage({
          type: "success",
          duration: 800,
          message: "操作成功",
          onClose: () => {
            displayModal.value = false;
          },
        });
      }
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
