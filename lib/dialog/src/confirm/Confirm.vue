<template>
  <div class="zx-dialog-mask">
    <div class="zx-dialog-cont dialog-alert">
      <div class="zx-dialog-title" v-text="title"></div>
      <div class="zx-dialog-msg" v-html='msg'></div>
      <div class="zx-dialog-foot">
        <a href="javascript:;" @click.stop="canceConfirm">取消</a>
        <a href="javascript:;" @click.stop="closeConfirm">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      msg: String,
      title: {
        type: String,
        default: '这里是标题'
      },
      onOk: Function,
      cancel: Function
    }
  };
</script>