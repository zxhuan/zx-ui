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
import Vue from 'vue';
const install = function(Vue) {
  Vue.component(CellGroup.name, CellGroup);
  Vue.component(CellItem.name, CellItem);
  Vue.component(Popup.name, Popup);
  Vue.component(Button.name, Button);
  Vue.component(inputItem.name, inputItem);
  Vue.component(inputGroup.name, inputGroup);
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
  Vue.component(tabGroup.name, tabGroup);
  Vue.component(tabItem.name, tabItem);
  Vue.component(RadioGroup.name, RadioGroup);
  Vue.component(RadioItem.name, RadioItem);
  Vue.component(checkboxGroup.name, checkboxGroup);
  Vue.component(checkboxItem.name, checkboxItem);
  Vue.component(Switch.name, Switch);
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