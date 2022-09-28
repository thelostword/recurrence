/*
 * @Author: thelostword
 * @Date: 2022-09-28 14:25:58
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-28 15:01:45
 * @FilePath: \recurrence\src\naive-ui.js
 */
import { computed } from 'vue';
import {
  create,
  NEllipsis,
  NPopover,
  NTooltip,
  NButton,

  createDiscreteApi,
  darkTheme,
  lightTheme,
} from 'naive-ui';
import { useDark } from '@/hooks';

const { isDark } = useDark();

const configProviderPropsRef = computed(() => ({
  theme: isDark.value ? darkTheme : lightTheme,
}));

const { message, dialog, notification } = createDiscreteApi(
  ['message', 'dialog', 'notification'],
  {
    configProviderProps: configProviderPropsRef,
  },
);

window.$message = message;
window.$dialog = dialog;
window.$notification = notification;

export default create({
  components: [
    NEllipsis,
    NPopover,
    NTooltip,
    NButton,
  ],
});

const createMeta = (name) => {
  const meta = document.createElement('meta');
  meta.name = name;
  document.head.appendChild(meta);
};

export const createNaiveUiStyleMeta = () => {
  createMeta('naive-ui-style');
  createMeta('vueuc-style');
};
