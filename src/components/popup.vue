<template>
  <div class="popup">
    <zx-button @click="popupFn('left','40%','40%')">左边弹出</zx-button>
    <hr>
    <zx-button @click="popupFn('right')">右边弹出</zx-button>
    <hr>
    <zx-button @click="popupFn('bottom')">底部弹出</zx-button>
    <hr>
    <zx-button @click="popupFn('top')">顶部弹出</zx-button>
    <zx-popup v-model="showBool" :position="direction" :width="w" :height="h" @close="closeMask">
      <zx-button type="warning" @click="showBool=!showBool" style="margin:10px;">点我关闭图层</zx-button>
    </zx-popup>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showBool: false,
        direction: 'right',
        h: '60%',
        w: '60%'
      };
    },
    methods: {
      popupFn(direction, h, w) {
        this.showBool = true;
        this.direction = direction;
        this.h = h ? h : '60%';
        this.w = w ? w : '60%';
      },
      closeMask() {
        console.log('关闭图层');
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'popup');
    }
  };
</script>