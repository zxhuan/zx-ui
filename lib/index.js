import { CellItem, CellGroup } from './cell';
import { Popup } from './Popup';
import { Button } from './button';
import { inputItem, inputGroup } from './input';
import { Select, Option } from './select';
import { Alert, Confirm, Toast } from './dialog';
import { tabGroup, tabItem } from './tab';
import { RadioGroup, RadioItem } from './radio';
import { checkboxGroup, checkboxItem } from './checkbox';
import { Switch } from './switch';
import { Icon } from './icon';
import Vue from 'vue';

// console.log(fontawesome);
// Vue.use(fa);
const components = [
  CellItem,
  CellGroup,
  Button,
  inputItem,
  inputGroup,
  Select,
  Option,
  tabGroup,
  Popup,
  tabItem,
  RadioGroup,
  RadioItem,
  checkboxGroup,
  checkboxItem,
  Switch,
  Icon
];
const install = (Vue) => {
  components.map(item => {
    Vue.component(item.name, item);
  });
  Vue.prototype.$dialog = {
    alert: Alert,
    Confirm: Confirm,
    toast: Toast
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install
};