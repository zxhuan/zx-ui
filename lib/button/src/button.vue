<template>
  <button class="zx-button" :class="checkClass()" type="button" @click="clickFn($event)">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
  export default {
    name: 'zx-button',
    data() {
      return {

      };
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      size: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      flex: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickFn(event) {
        this.$emit('click', event);
      },
      checkClass() {
        // 判断是否禁用
        let disabled = '', flex = '';
        if (this.disabled) {
          disabled = 'disabled';
        }
        if (this.flex) {
          flex = 'flex'
        }
        return `zx-button-${this.type} size-${this.size} ${disabled} ${flex}`;
        // return 'zx-button-' + this.type + ' size-' + this.size + ' ' + disabled;
      }
    }
  };
</script>