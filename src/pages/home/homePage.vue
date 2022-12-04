<template>
  <AppLayout :operation-conf="OperationButtonsConf">
    <template #operation> </template>
    <template #content> body </template>
  </AppLayout>
</template>

<script setup>
import { AppLayout } from "@/components";
import { OperationButtonsConf } from "./config/index";
</script>
