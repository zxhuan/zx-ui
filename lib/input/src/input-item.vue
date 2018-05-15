<template>
  <div :class="type=='textarea'?'form-textarea-wrap':'form-input-wrap'">
    <slot name="icon"></slot>
    <textarea v-if="type=='textarea'" class="form-textarea" :placeholder="place" autocomplete="off" ref="input" v-model="currentValue"
      :disabled="disabled" @change='blurHandler'></textarea>
    <input :type="type" class="form-input" :placeholder="place" autocomplete="off" ref="input" v-model="currentValue" :disabled="disabled"
      @change='changeHandler($event)' v-else-if="type=='file'" @keyup.enter="enterFn($event)">
    <input :type="type" class="form-input" :placeholder="place" autocomplete="off" ref="input" v-model="currentValue" @blur="blurHandler"
      :disabled="disabled" @change='blurHandler' @keyup.enter="enterFn($event)" v-else>
    <slot name="text"></slot>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'zx-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      place: {
        type: String,
        default: ''
      },
      value: [String, Number, Object, File],
      // required: {
      //     type: Boolean,
      //     default: false
      // },
      disabled: {
        type: Boolean,
        default: false
      },
      limitPoint: {
        type: [String, Number]
      },
      rules: [Object, Array]
    },
    data() {
      return {
        currentValue: this.value,
        valid: true,
        pattern: '',
        required: false,
        msg: '',
        patternObj: {
          tell: '^(86)?1[3,4,5,7,8]\\d{9}$',  // 手机
          email: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', // 邮箱
          bankcard: '^\\d{15,19}$', // 银行卡
          identity: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$' // 身份证
        }
      };
    },
    watch: {
      place(val) {
        this.place = val;
        this.msg = val;
      },
      value(val) {
        this.currentValue = val;
        this.emitInput();
      },
      currentValue(val) {
        this.validNumLength(val);
        this.validatorInput(val, true);
        this.emitInput();
      },
      rules(val) {
        this.validatorInput();
      }
    },
    methods: {
      // 显示小数点
      validNumLength(val) {
        if (this.type == 'number' && this.limitPoint) {
          this.currentValue = this.currentValue.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
          this.currentValue = this.currentValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
          this.currentValue = this.currentValue.replace(new RegExp('^(\\-)*(\\d+)\\.(\\d{1,' + this.limitPoint + '}).*$'), '$1$2.$3');
        }
      },
      enterFn($event) {
        this.$emit('enter', $event)
      },
      blurHandler() {
        this.$emit('change', this.currentValue);
      },
      changeHandler(event) {
        this.$emit('change', event);
        // this.$emit(this.currentValue, true);
      },
      emitInput() {
        this.$emit('input', this.currentValue);
      },
      // 表单规则验证
      validatorInput(value, bool) {
        this.init();
        if (this.required && this.currentValue == '') {
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
    mounted() {
      this.validatorInput(this.currentValue, true);
    }
  };
</script>
<style scoped>
  .submit-btn {
    padding: 1rem;
    text-align: center;
    background: white;
    color: rgba(1, 157, 250, 1);
    border: 1px solid rgba(1, 157, 250, 1);
  }

  .bg-gray {
    background: rgba(77, 79, 81, 1);
    color: white;
    border: 1px solid rgba(77, 79, 81, 1);
  }
</style>