<template>
  <div class="common-layout">
    <el-container>
      <el-aside style="background: #f6f6f6">
        <v-aside />
      </el-aside>
      <el-container class="main-container">
        <el-header style="padding: 0px; height: 90px">
          <v-header />
        </el-header>
        <el-main>
          <el-scrollbar>
            <v-main />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
  import VAside from '@/layout/components/v-aside/index.vue'
  import VMain from '@/layout/components/v-main/index.vue'
  import VHeader from '@/layout/components/v-header/index.vue'
</script>

<style scoped>
  .main-container {
    flex: 1;
  }
</style>
