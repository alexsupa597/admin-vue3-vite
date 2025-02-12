<template>
  <!-- 两层 -->
  <el-sub-menu v-if="item.children" :index="item.path">
    <template #title>
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </template>
    <template v-for="item in item.children" :key="item.path">
      <el-menu-item :index="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-sub-menu>
  <!-- 一层 -->
  <el-menu-item v-else :index="item.path">
    <el-icon>
      <component :is="item.meta.icon"></component>
    </el-icon>
    <template #title>
      <span>{{ item.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup lang="ts" name="SidebarItem">
  defineOptions({
    name: 'SidebarItem'
  })
  const props = defineProps({
    item: { type: Object, default: () => {} }
  })
</script>

<style scoped></style>
