<template>
  <div class="zx-select" :class="disabled?'zx-select-disabled':''">
    <slot name='icon'></slot>
    <input type="text" :placeholder="place" v-model="currentValue" @click="showMask" style="display:none">
    <div class="form-input-wrap" @click="showMask">
      <div class="form-input">
        <span v-if="currentLabel!=''">{{currentLabel}}</span>
        <span v-else style="color: rgb(117, 117, 117);">{{place}}</span>
      </div>
    </div>
    <div class="zx-option-mask" v-show="showBool" @click="showBool=false">
      <div class="zx-option-cont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zx-select',
    data() {
      return {
        currentValue: this.value,
        showBool: false,
        currentLabel: '',
        pattern: '',
        valid: true,
        patternObj: {
          tell: '^(86)?1[3,4,5,7,8]\\d{9}$',  // 手机
          email: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', // 邮箱
          bankcard: '^\\d{15,19}$', // 银行卡
          identity: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$' // 身份证
        }
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      place: {
        type: String
      },
      rules: [Object, Array],
      value: [String, Number]
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
        this.validatorInput(val, true);
      },
      value() {
        this.currentValue = this.value;
      },
      showBool(value) {
        if (value) {
          this.lockScroll();
        } else {
          this.unLockScroll();
        }
      }
    },
    provide() {
      return {
        'select': this
      };
    },
    // inject: ['select'],
    methods: {
      showMask() {
        if(this.disabled){return false};
        this.showBool = true;
      },
      handleOptionSelect(option) {
        this.currentValue = option.value;
      },
      unLockScroll() {
        window.onmousewheel = function (event) {
          return true;
        };
      },
      lockScroll() {
        window.onmousewheel = function (event) {
          return false;
        };
      },
      // 表单规则验证
      validatorInput(value, bool) {
        this.init();
        if (this.required && this.currentValue === '') {
          this.msg = this.place;
          this.valid = false;
          return;
        }
        if (this.pattern) {
          if (new RegExp(this.pattern).test(this.currentValue)) {
            this.valid = true;
          } else {
            this.valid = false;
            return;
          }
        }
        this.valid = true;
      },
      init() {
        if (this.rules && this.rules instanceof Array) {
          for (let item of this.rules) {
            this.initData(item);
          }
        } else if (this.rules) {
          this.initData(this.rules);
        } else {
          this.pattern = '';
          this.required = false;
          this.msg = '';
        }
      },
      initData(item) {
        this.pattern = this.patternObj[item.pattern] ? this.patternObj[item.pattern] : item.pattern ? item.pattern : '';
        this.required = item.required ? item.required : false;
        this.msg = item.msg ? item.msg : item.pattern + 'value is empty !';
      }
    },
    created() {
      // this.$emit('change', this.currentValue);
      // this.$emit('input', this.currentValue);
      this.validatorInput(this.currentValue, true);
      this.$on('handleOptionClick', this.handleOptionSelect);
    }
  };
</script>
<style scoped>
</style>