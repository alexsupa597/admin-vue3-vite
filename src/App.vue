<template>
  <el-config-provider :locale="zh">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
  import { ElConfigProvider } from 'element-plus'
  import zh from 'element-plus/es/locale/lang/zh-cn'
</script>

<style scoped></style>
