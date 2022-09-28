<!--
 * @Author: losting
 * @Date: 2022-06-27 08:56:27
 * @LastEditTime: 2022-09-28 14:37:29
 * @LastEditors: thelostword
 * @Description: 
 * @FilePath: \recurrence\src\App.vue
-->
<template>
  <NConfigProvider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="isDark ? darkTheme : lightTheme"
  >
    <NMessageProvider>
      
      <n-layout style="height: 100vh">
        <n-button @click="toggle()">
          主题切换
        </n-button>

        <n-ellipsis style="max-width: 240px">
          住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
        </n-ellipsis>
        
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-button> 鸭子 </n-button>
          </template>
          如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
        </n-tooltip>

        <n-popover trigger="hover">
          <template #trigger>
            <n-button>悬浮</n-button>
          </template>
          <span>或许不想知道你的花园长得咋样</span>
        </n-popover>
      </n-layout>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup>
import { useDark } from '@/hooks';
import {
  NConfigProvider,
  NMessageProvider,
  NLayout,
  zhCN,
  dateZhCN,
  darkTheme,
  lightTheme
} from 'naive-ui';

const { isDark, toggle } = useDark();
</script>

<style>
.n-config-provider {
  height: 100%;
}
/* html[dark] body {
  background-color: black;
} */
</style>
