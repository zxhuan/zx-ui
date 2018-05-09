import Vue from 'vue';
import zxAlert from './alert.vue';
const AlertConstructor = Vue.extend(zxAlert);
const instance = new AlertConstructor({
  el: document.createElement('div')
});
AlertConstructor.prototype.closeAlert = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  typeof this.onOK === 'function' && this.onOK();
};
const Alert = (options = {}) => {
  instance.msg = options.msg;
  instance.onOK = options.onOK;
  document.body.appendChild(instance.$el);
};
export default Alert;