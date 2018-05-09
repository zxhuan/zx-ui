<template>
  <div class="zx-dialog-mask">
    <div class="zx-dialog-cont dialog-alert">
      <div class="zx-dialog-msg" v-html='msg'></div>
      <div class="zx-dialog-foot">
        <a href="javascript:;" @click.stop="closeAlert">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zx-alert',
  props: {
    msg: String,
    onOK: Function
  }
};
</script>