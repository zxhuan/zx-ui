<template>
  <div class="tab">
    <zx-tab v-model='active'>
      <zx-tab-item label='选项卡一' name='tab1'>
        选项卡一
      </zx-tab-item>
      <zx-tab-item label='选项卡二' name='tab2'>
        选项卡二
      </zx-tab-item>
      <zx-tab-item label='选项卡三' name='tab3'>
        选项卡三
      </zx-tab-item>
    </zx-tab>
    <div style="margin: 20px 0;border: 0.5px solid rgb(247, 247, 247)"></div>
    <zx-tab v-model='active' :postion="'left'">
      <zx-tab-item label='选项卡一' name='tab1'>
        选项卡一
      </zx-tab-item>
      <zx-tab-item label='选项卡二' name='tab2'>
        选项卡二
      </zx-tab-item>
      <zx-tab-item label='选项卡三' name='tab3'>
        选项卡三
      </zx-tab-item>
    </zx-tab>
    <div style="margin: 20px 0;border: 0.5px solid rgb(247, 247, 247)"></div>
    <zx-tab v-model='active' :postion="'right'">
      <zx-tab-item label='选项卡一' name='tab1'>
        选项卡一
      </zx-tab-item>
      <zx-tab-item label='选项卡二' name='tab2'>
        选项卡二
      </zx-tab-item>
      <zx-tab-item label='选项卡三' name='tab3'>
        选项卡三
      </zx-tab-item>
    </zx-tab>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data() {
      return {
        active: 'tab1'
      };
    },
    created() {
      this.$store.dispatch('setTtile', 'tab');
    }
  };
</script>
<style>
  .tab-wrap {
    position: relative;
  }
  .tab{
    height: 300px;
    width: 100%;
  }
                    
</style>