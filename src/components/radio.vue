<template>
  <div class="radio">
    <zx-form-group title="radio选项">
      <span slot="label-text">当前选中的值:{{values}}</span>
      <zx-radio-group v-model="values" ref="values" :rules="rules.radio">
        <zx-radio-item value="value1">value1</zx-radio-item>
        <zx-radio-item value="value2" disabled>value2</zx-radio-item>
        <zx-radio-item value="value3">value3</zx-radio-item>
        <zx-radio-item value="value4">value4</zx-radio-item>
        <zx-radio-item value="value5">value5</zx-radio-item>
      </zx-radio-group>
    </zx-form-group>
    <div class="flex">
      <zx-button @click="submitFn" type="primary">提交</zx-button>
    </div>
    <zx-form-group title="radio选项">
      <span slot="label-text">当前选中的值:{{values1}}</span>
      <zx-radio-group v-model="values1" flex @change="changeValue(values1)">
        <zx-radio-item value="选项1">选项1</zx-radio-item>
        <zx-radio-item value="选项2">选项2</zx-radio-item>
        <zx-radio-item value="选项3">选项3</zx-radio-item>
        <zx-radio-item value="选项4">选项4</zx-radio-item>
        <zx-radio-item value="选项5">选项5</zx-radio-item>
        <zx-radio-item value="选项6">选项6</zx-radio-item>
      </zx-radio-group>
    </zx-form-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        values: '',
        values1: '选项1',
        rules: {
          radio: { required: true, msg: '请选中一个值' }
        }
      };
    },
    methods: {
      changeValue(value) {
        console.log(value);
      },
      // 代码提交
      submitFn() {
        if (!this.$refs['values'].valid) {
          this.$dialog.toast({
            msg: this.$refs['values'].msg,
            position: 'top'
          });
          return false;
        }
        console.log(this.values);
      },
      getValue(val) {
        console.log(val);
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'radio');
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