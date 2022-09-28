/*
 * @Author: thelostword
 * @Date: 2022-09-27 16:48:12
 * @LastEditors: thelostword
 * @LastEditTime: 2022-09-28 14:38:25
 * @FilePath: \recurrence\src\hooks\use-dark\index.js
 */
import { get, set } from '@losting/ls';
import { ref } from 'vue';

const setAttr = (dark) => {
  const html = document.querySelector('html');
  if (dark) {
    html.setAttribute('dark', '');
    return;
  }
  html.removeAttribute('dark');
};

const cacheDark = !!get('is-dark');
setAttr(cacheDark);
const isDark = ref(cacheDark);

export function useDark({ onChange } = {}) {
  let doing = false;
  const toggle = () => {
    if (doing) return;
    doing = true;
    isDark.value = !isDark.value;
    set('is-dark', isDark.value);
    setAttr(isDark.value);
    if (onChange && typeof onChange === 'function') onChange(isDark.value);
    doing = false;
  };

  return {
    isDark,
    toggle,
  };
}
