<!--
 * @Author: losting
 * @Date: 2022-06-27 08:56:27
 * @LastEditTime: 2022-06-27 09:16:17
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \recurrence\src\App.vue
-->
<script setup>
import {NButton, NSpace, NIcon} from 'naive-ui'
import { MoreVertRound, CloseSharp } from '@vicons/material';

const btnList = [
  {
    size: 'tiny',
    iconSize: 10,
    icon: CloseSharp,
    iconPlacement: 'left',
    text: '按钮'
  },
  {
    size: 'tiny',
    iconSize: 10,
    icon: CloseSharp,
    iconPlacement: 'right',
    text: '按钮'
  },
  {
    size: 'tiny',
    iconSize: 20,
    icon: CloseSharp,
    iconPlacement: 'left',
    text: '按钮'
  },
  {
    size: 'medium',
    iconSize: 12,
    icon: CloseSharp,
    iconPlacement: 'left',
    text: ''
  },
  {
    size: 'medium',
    iconSize: 28,
    icon: CloseSharp,
    iconPlacement: 'left',
    text: ''
  },
  {
    size: 'medium',
    iconSize: 28,
    icon: MoreVertRound,
    iconPlacement: 'left',
    text: ''
  },
]
</script>

<template>
  <h1>button 组件样式问题复现示例</h1>
  <NSpace>
    <NButton
      v-for="(item, index) in btnList"
      :key="index"
      type="error"
      :size="item.size"
      :icon-placement="item.iconPlacement"
    >
      {{item.text}}
      <template #icon>
        <NIcon
          :component="item.icon"
          :size="item.iconSize"
        />
      </template>
    </NButton>
  </NSpace>
</template>

<style>
body { margin: 0 }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
