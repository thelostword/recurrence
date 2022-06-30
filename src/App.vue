<!--
 * @Author: losting
 * @Date: 2022-06-27 08:56:27
 * @LastEditTime: 2022-06-30 12:03:06
 * @LastEditors: losting
 * @Description: 
 * @FilePath: \recurrence\src\App.vue
-->
<script setup>
import { NTabs, NTabPane, NIcon } from 'naive-ui'
import { MoreVertRound, CloseSharp } from '@vicons/material';

</script>

<template>
  <h1>paneStyle 设置padding</h1>
  <div class="wrap">
    <n-tabs
      type="line"
      size="large"
      :tabs-padding="20"
      pane-style="padding: 20px;"
    >
      <n-tab-pane name="基本资料">
        <div style="background: #00000099;">基本资料</div>
      </n-tab-pane>
      <n-tab-pane name="修改密码">
        <div style="background: red">修改密码</div>
      </n-tab-pane>
    </n-tabs>
  </div>
  
  <h1>paneStyle 不设置padding</h1>
  <div class="wrap">
    <n-tabs
      type="line"
      size="large"
      :tabs-padding="20"
    >
      <n-tab-pane name="基本资料">
        <div style="background: #00000099;">基本资料</div>
      </n-tab-pane>
      <n-tab-pane name="修改密码">
        <div style="background: red">修改密码</div>
      </n-tab-pane>
    </n-tabs>
  </div>
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
.wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid #000;
}
</style>
