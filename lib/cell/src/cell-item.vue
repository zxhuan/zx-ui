<template>
  <div class="cell-group-w" :class="checkClass()" @click="clickFn($event)" v-if="type=='link'">
    <router-link :to='href'>
      <slot name="left"></slot>
      <slot name="right"></slot>
      <slot></slot>
    </router-link>
  </div>
  <div class="cell-group-w label" :class="checkClass()" @click="clickFn($event)" v-else-if='type=="label"'>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot></slot>
  </div>
  <div class="cell-group-w" :class="checkClass()" @click="clickFn($event)" v-else>
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'zx-cell-item',
    props: {
      title: String,
      arrow: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'label'
      },
      href: {
        type: [String, Object]
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickFn($event) {
        this.$emit('click');
      },
      checkClass() {
        return `${this.arrow ? 'arrow' : ''} ${this.border ? 'border' : ''}`
      }
    }
  };
</script>