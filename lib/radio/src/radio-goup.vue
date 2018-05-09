<template>
  <div class="zx-radio-group" v-model="currentValue" :class="classFlex()">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'zx-radio-group',
    props: {
      value: {
        required: true,
        type: [Number, String, Boolean]
      },
      flex: {
        type: Boolean
      },
      rules: [Object, Array]
    },
    data() {
      return {
        currentValue: this.value,
        required: false,
        valid: true
      }
    },
    provide() {
      return {
        'radioGroup': this
      };
    },
    watch: {
      value(val) {
        this.currentValue = val;
        this.validatorInput(val, true);
      },
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
        this.validatorInput(val, true);
      }
    },
    methods: {
      classFlex() {
        return this.flex ? 'zx-radio-group-flex' : '';
      },
      init() {
        if (this.rules && this.rules instanceof Array) {
          for (let item of this.rules) {
            this.initData(item);
          }
        } else if (this.rules) {
          this.initData(this.rules);
        } else {
          this.required = false;
          this.msg = '';
        }
      },
      // 表单规则验证
      validatorInput(value, bool) {
        this.init();
        if (this.required && this.currentValue == '') {
          this.valid = false;
          return;
        }
        this.valid = true;
      },
      initData(item) {
        this.required = item.required ? item.required : false;
        this.msg = item.msg ? item.msg : item.pattern + 'value is empty !';
      }
    },
    created() {
      this.validatorInput(this.currentValue, true);
      // console.log(this._uid);
    }
  }
</script>