<template>
  <div class="cell">
    <zx-cell-group title="有标题">
      <zx-cell-item border>
        <span name='left'>左边</span>
        <span name='right'>右边</span>
      </zx-cell-item>
      <zx-cell-item border arrow type='label'>
        <span name='left'>左边</span>
        <span name='right'>type:label</span>
      </zx-cell-item>
      <zx-cell-item border arrow>
        <span name='left'>左边</span>
        <span name='right'>type:defalut</span>
      </zx-cell-item>
      <zx-cell-item border arrow type='link' href='/'>
        <span name='left'>链接</span>
        <span name='right'>type:link</span>
      </zx-cell-item>
    </zx-cell-group>
  </div>
</template>
<script>
  export default {
    name: 'cell',
    data() {
      return {};
    },
    created() {
      this.$store.dispatch('setTtile', 'cell');
    }
  };
</script>