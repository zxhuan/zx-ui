<template>
  <label class="zx-radio-item" :for="'radio'+values" @click.stop="getValue" v-model='values'>
    <div class="radio-input">
      <input type="radio" :id="'radio'+values" :name="names" :disabled="disabled">
      <span class="checked"></span>
    </div>
    <div class="radio-text">
      <slot></slot>
    </div>
  </label>
</template>
<script>
  export default {
    name: 'zx-radio-item',
    props: {
      value: {
        type: [String, Number, Boolean],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    inject: ['radioGroup'],
    data() {
      return {
        values: this.value,
        names: 'radio'
      }
    },
    watch: {
      'radioGroup.currentValue'(val) {
        this.init();
      },
    },
    methods: {
      getValue() {
        this.radioGroup.currentValue = this.values;
      },
      init() {
        if (this.radioGroup.value == this.values) {
          this.values = this.radioGroup.value;
          this.$el.getElementsByTagName('input')[0].setAttribute('checked', true)
        }
      }
    },
    mounted() {
      this.names = 'radio' + this.radioGroup._uid;
      this.init();
    }
  }
</script>