<template>
  <AppHeader />
  <main>
    <div class="app-container">
      <div class="operation-bar" v-if="operationConf.length">
        <template v-for="record in operationConf" :key="record.id">
          <el-button
            :type="record.operationBtnType"
            :disabled="record.disabled"
            @click="onOperation(record)"
          >
            {{ record.operationText }}
          </el-button>
        </template>
      </div>
      <slot name="content" />
    </div>
  </main>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";

const emits = defineEmits(["click-operation"]);

// props
defineProps({
  operationConf: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

// methods
const onOperation = (record) => {
  emits("click-operation", record);
};
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
    background-color: #fff;
    margin-bottom: 8px;
  }
}
</style>
