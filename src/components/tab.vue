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
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data() {
      return {
        active: 'tab1'
      };
    }
  };
</script>