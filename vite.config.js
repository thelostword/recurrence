/*
 * @Author: thelostword
 * @Date: 2022-06-27 08:56:27
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-28 14:30:17
 * @FilePath: \recurrence\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
