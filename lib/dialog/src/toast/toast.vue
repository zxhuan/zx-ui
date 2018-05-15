<template>
  <transition :name="fadeName">
    <!-- <div class="zx-dialog-mask nobg" v-show="showBool" :class="checkClass()">
            <div class="zx-dialog-cont zx-toast">
                <div class="zx-toast-msg" v-html='msg'></div>
            </div>
        </div> -->
    <div class="zx-toast" v-show="showBool" :class="checkClass()">
      <div class="zx-toast-msg" v-html='msg'></div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      msg: String,
      time: {
        type: Number,
        default: 1000
      },
      position: {
        type: String,
        default: 'top'
      },
      remove: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      position(val) {
        // console.log(val);
      },
    },
    data() {
      return {
      };
    },
    computed: {
      showBool() {
        return this.msg ? true : false;
      },
      fadeName() {
        let _pos = ['top', 'bottom', 'center'].includes(this.position) ? this.position : 'top';
        return 'fade-' + _pos;
      }
    },
    methods: {
      checkClass() {
        let _pos = ['top', 'bottom', 'center'].includes(this.position) ? this.position : 'top';
        return 'zx-toast-' + _pos;
      }
    }
  };
</script>
<style scoped>
  .fade-bottom-enter-active,
  .fade-bottom-leave-active,
  .fade-center-enter-active,
  .fade-center-leave-active,
  .fade-top-enter-active,
  .fade-top-leave-active {
    transition: all ease .5s;
  }

  .fade-bottom-enter,
  .fade-bottom-leave-to {
    transform: translateY(50px);
    opacity: 0;
  }

  .fade-top-enter,
  .fade-top-leave-to {
    transform: translateY(-50px);
    opacity: 0;
  }

  .fade-center-enter {
    transform: translateX(-300px);
    opacity: 0;
  }

  .fade-center-leave-to {
    transform: translateX(300px);
    opacity: 0;
  }
</style>