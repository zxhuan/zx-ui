<template>
  <!-- <div class="zx-tab-c" :class="checkActive">
    <slot></slot>
  </div> -->
  <div class="zx-tab-c" :class="checkActiveName">
    <slot></slot>
  </div>
  <!-- <transition name="slide-fade" v-if="this.name == this.$parent.showTab">
    <div class="zx-tab-c" :class="checkActiveName">
      <slot></slot>
    </div>
  </transition> -->
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
<style scoped>
  /* 可以设置不同的进入和离开动画 */

  /* 设置持续时间和动画函数 */

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */

    {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>