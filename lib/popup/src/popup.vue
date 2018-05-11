<template>
  <transition :name="checkName()">
    <div class="popup-group" v-show="show" ref="popup">
      <div class="popup-mask" @click="close($event)"></div>
      <div :style="style()" :class='checkClass()'>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'zx-popup',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '60%'
      },
      height: {
        type: String,
        default: '60%'
      },
      position: {
        type: String,
        default: 'right'
      }
    },
    data() {
      return {
        show: this.value
      };
    },
    watch: {
      value(val) {
        if (val) {
          this.$refs['popup'].className = 'popup-group popup-show';
        } else {
          this.$refs['popup'].className = 'popup-group';
        }
        this.show = val;
      }
    },
    methods: {
      click($event) {
        this.$emit('click', $event);
      },
      style() {
        if (this.position == 'right' || this.position === 'left') {
          return { width: this.width };
        } else {
          return { height: this.height };
        }
      },
      checkClass() {
        return  `popup-cont-${this.position}`;
      },
      close($event) {
        this.show = false;
        this.$emit('input', false);
        this.$emit('close', $event);
      },
      checkName() {
        return  `popup-${this.position}`;
      }
    },
  };
</script>
<style>
  /* 可以设置不同的进入和离开动画 */

  /* 设置持续时间和动画函数 */

  .popup-right-enter-active,
  .popup-right-leave-active,
  .popup-top-enter-active,
  .popup-top-leave-active,
  .popup-bottom-enter-active,
  .popup-bottom-leave-active,
  .popup-left-enter-active,
  .popup-left-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .popup-right-enter,
  .popup-right-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }

  .popup-left-enter,
  .popup-left-leave-active {
    transform: translateX(-10px);
    opacity: 0;
  }

  .popup-bottom-enter,
  .popup-bottom-leave-active {
    transform: translateY(10px);
    opacity: 0;
  }

  .popup-top-enter,
  .popup-top-leave-active {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>