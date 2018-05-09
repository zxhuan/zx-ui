<template>
  <!-- <div class="zx-tab-c" :class="checkActive">
    <slot></slot>
  </div> -->
  <div class="zx-tab-c" :class="checkActiveName">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'zx-tab-item',
  props: {
    label: String,
    active: Boolean,
    name: String
  },
  computed: {
    checkActive() {
      // 第一种方法
      return this._uid === this.$parent.tabActive ? 'zx-tab-active' : '';
    },
    checkActiveName() {
      // 第二种方法
      return this.name == this.$parent.showTab ? 'zx-tab-active' : '';
    }
  },
  data() {
    return {};
  }
};

</script>