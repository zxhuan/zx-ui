<template>
  <div class="cell-grop">
    <div class="cell-group-t" v-if="title">
      <div class="cell-title" title="title">{{title}}</div>
    </div>
    <slot></slot>
    <slot name="bottom"></slot>
  </div>
</template>
<script>
export default {
  name: 'zx-cell-group',
  props: {
    title: String
  }
};
</script>