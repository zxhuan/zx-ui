<template>
  <div class="zx-option" @click.stop="emitValue($event)" ref="option" :class="bindClass()">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'zx-option',
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      name: {
        type: [String, Number]
      }
    },
    data() {
      return {
      };
    },
    inject: ['select'],
    watch: {
      value() {
        console.log(this.value);
      },
      'select.currentValue'(val) {
        let pattern = /^\s*$/g;
        if (val == this.value && !pattern.test(val) || val === this.value) {
          this.select.currentLabel = this.$el.innerHTML;
        }
      }
    },
    methods: {
      emitValue(event) {
        this.select.currentValue = this.value;
        this.select.currentLabel = event.target.innerText;
        this.select.showBool = false;
        this.$emit('click', event);
        this.$emit('input', this.select.currentValue);
      },
      bindClass() {
        let pattern = /^\s*$/g;
        return this.value === this.select.currentValue ? 'active' : '';
      }
    },
    mounted() {
      let pattern = /^\s*$/g;
      if (this.select.currentValue == this.value && !pattern.test(this.select.currentValue) || this.select.currentValue === this.value) {
        this.select.currentLabel = this.$el.innerHTML;
      }
    }
  };
</script>