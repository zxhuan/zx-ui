<template>
  <i class="icon iconfont" :class="bindClass"></i>
</template>
<script>
  export default {
    name: 'zx-icon',
    props: {
      name: {
        type: String,
        default: 'add-r-o'
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      color: {
        type: String,
        default: '#000'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      bindClass() {
        return `zx-icon-${this.name}`
      }
    },
    mounted() {
      this.$el.style = `font-size:${20 * this.scale}px;color:${this.color}`;
    }
  }
</script>
<style>
</style>