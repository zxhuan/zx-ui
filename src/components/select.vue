<template>
  <div class="select">
    <zx-form-group>
      <zx-select v-model='selectValue' place='请选择选项' disabled>
        <zx-option value='1'>选项卡1</zx-option>
        <zx-option value='2'>选项卡2</zx-option>
        <zx-option value='3'>选项卡3</zx-option>
        <zx-option value='4'>选项卡4</zx-option>
      </zx-select>
    </zx-form-group>
    <zx-form-group>
      <zx-select v-model='selectValue' place='请选择选项'>
        <zx-option value='1'>选项卡1</zx-option>
        <zx-option value='2'>选项卡2</zx-option>
        <zx-option value='3'>选项卡3</zx-option>
        <zx-option value='4'>选项卡4</zx-option>
      </zx-select>
    </zx-form-group>
    <zx-form-group title='地址'>
      <zx-select v-model='selectAddress' place='请选择地址' @change='changeValue(selectAddress)'>
        <zx-option value='1'>北京</zx-option>
        <zx-option value='2'>上海</zx-option>
        <zx-option value='3'>广州</zx-option>
        <zx-option value='4'>天河</zx-option>
      </zx-select>
    </zx-form-group>
    <p>选择地址的值：{{addressValue}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selectValue: '1',
        selectAddress: '',
        addressValue: 'null'
      };
    },
    methods: {
      changeValue(val) {
        this.addressValue = val;
        console.log(val);
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'select');
    }
  };
</script>
<style scoped>
  .select {}
</style>