/*
 * @Author: thelostword
 * @Date: 2022-06-27 08:56:27
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-28 15:04:20
 * @FilePath: \recurrence\src\main.js
 */
import { createApp } from 'vue';
import naive, { createNaiveUiStyleMeta } from './naive-ui';
import App from './App.vue';

createNaiveUiStyleMeta();

// const app = createApp(import.meta.env.PROD ? App : AppDev);
const app = createApp(App);

app
  .use(naive)
  .mount('#app');
