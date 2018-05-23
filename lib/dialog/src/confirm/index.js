import Vue from 'vue';
import zxConfirm from './Confirm.vue';
const ConfirmConstructor = Vue.extend(zxConfirm);
const instance = new ConfirmConstructor({
  el: document.createElement('div')
});
ConfirmConstructor.prototype.closeConfirm = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  typeof this.onOk === 'function' && this.onOk();
};
ConfirmConstructor.prototype.canceConfirm = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  typeof this.cancel === 'function' && this.cancel();
};
const Confirm = (options = {}) => {
  instance.msg = options.msg;
  instance.title = options.title;
  instance.onOk = options.onOk;
  instance.cancel = options.cancel;
  instance.onOkText = options.onOkText;
  instance.cancelText = options.cancelText;
  document.body.appendChild(instance.$el);
};
export default Confirm;