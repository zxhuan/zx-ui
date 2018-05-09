import Vue from 'vue';
import zxToast from './toast.vue';
const ConfirmConstructor = Vue.extend(zxToast);
const instance = new ConfirmConstructor({
  el: document.createElement('div')
});
ConfirmConstructor.prototype.closeToast = (options) => {
  const el = options.$el;
  let timer = setTimeout(() => {
    el.parentNode && el.parentNode.removeChild(el);
    if (options.onOk) {
      options.onOk();
    }
    options.msg = '';
    clearTimeout(timer);
  }, options.time);
};
const Toast = (options = {}) => {
  if (instance.msg) { return false; };
  instance.msg = options.msg;
  instance.time = options.time || 1500;
  instance.onOk = options.onOk;
  instance.position = options.position;
  instance.remove = typeof options.remove == 'boolean' ? options.remove : true;
  document.body.appendChild(instance.$el);
  if (instance.remove) {
    ConfirmConstructor.prototype.closeToast(instance);
  }
};
export default Toast;