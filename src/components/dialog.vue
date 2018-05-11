<template>
  <div class="dialog" style="padding-top: 10px">
    <h2>toast</h2>
    <div class="flex">
      <zx-button @click="toastFn('bottom')">toast['bottom']</zx-button>
      <zx-button @click="toastFn('top')">toast['top']</zx-button>
      <zx-button @click="toastFn('center')">toast['center']</zx-button>
      <zx-button @click="toastFn('top',5000)">5s后移除</zx-button>
      <zx-button @click="removeFn">弹出，但不移除</zx-button>
    </div>
    <h2>alert</h2>
    <div class="flex">
      <zx-button @click="alertFn">alert</zx-button>
    </div>
    <h2>confirm</h2>
    <div class="flex">
      <zx-button @click="confirmFn">confirm</zx-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        moveBool: false
      };
    },
    methods: {
      removeFn() {
        this.$dialog.toast({
          msg: '弹出，但不移除',
          remove: false // 默认为true【移除】，false[不移除]
        });
      },
      toastFn(direction, duration) {
        this.$dialog.toast({
          msg: direction,
          position: direction,
          time: duration ? duration : '', // 时间间隔
          onOk: () => {
            console.log('hello world!');
          }
        });
      },
      alertFn() {
        this.$dialog.alert({
          msg: '弹层信息',
          onOk: () => {
            console.log('alertFn callback');
          }
        });
      },
      confirmFn() {
        this.$dialog.Confirm({
          title: '温馨提示',
          msg: '此操作将删除该条数据，是否继续',
          onOk: () => {
            this.$dialog.toast({
              msg: '删除成功'
            });
          },
          cancel: () => {
            this.$dialog.toast({
              msg: '取消删除'
            });
          }
        });
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'dialog');
    }
  };
</script>
<style scoped>
  .flex {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .flex .zx-button {
    margin-bottom: 10px;
  }
</style>