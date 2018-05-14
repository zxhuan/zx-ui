<template>
  <div class="input">
    <zx-form-group>
      <zx-input v-model='inputValue' place='请输入您的姓名'></zx-input>
    </zx-form-group>
    <zx-form-group title='用户名'>
      <span slot="label-text">这里写姓名备注</span>
      <zx-input v-model='inputValue' place='请输入您的用户名'></zx-input>
    </zx-form-group>
    <zx-form-group title='限制小数'>
      <zx-input v-model='num' place='请输入两位小数' limit-point="2" type="number">
      </zx-input>
    </zx-form-group>
    <zx-form-group title='用户名+图标'>
      <zx-input v-model='inputValue' place='请输入您的用户名'>
        <i class="icon" slot='icon'></i>
      </zx-input>
    </zx-form-group>
    <hr>
    <zx-form-group title='手机号'>
      <zx-input v-model='subForm.mobile' place='请输入您的手机号' ref='mobile' :rules='rules.mobile' type='number' @enter="enterFn">
      </zx-input>
    </zx-form-group>
    <zx-form-group title='验证码'>
      <zx-input v-model='subForm.code' place='请输入验证码' ref='code' :rules='rules.code' type='number'>
        <span slot='text' class='input-text' @click='getCode("mobile","验证码",$event)'>验证码</span>
      </zx-input>
    </zx-form-group>
    <zx-form-group title='邮箱'>
      <zx-input v-model='subForm.email' place='请输入您的邮箱' ref='email' :rules='rules.email'>
      </zx-input>
    </zx-form-group>
    <zx-form-group title='银行卡'>
      <zx-input v-model='subForm.bankcard' place='请输入您的银行卡' ref='bankcard' :rules='rules.bankcard'>
      </zx-input>
    </zx-form-group>
    <zx-form-group title='身份证'>
      <zx-input v-model='subForm.identity' place='请输入您的身份证' ref='identity' :rules='rules.identity'>
      </zx-input>
    </zx-form-group>
    <zx-form-group title='性别'>
      <zx-radio-group v-model='subForm.sex' flex ref='sex' :rules='rules.sex'>
        <zx-radio-item value="1">男</zx-radio-item>
        <zx-radio-item value="2">女</zx-radio-item>
      </zx-radio-group>
    </zx-form-group>
    <zx-form-group title='兴趣'>
      <zx-checkbox-group v-model='subForm.interest' flex ref='interest' :rules='rules.interest'>
        <zx-checkbox-item value="1">读书</zx-checkbox-item>
        <zx-checkbox-item value="2">写字</zx-checkbox-item>
        <zx-checkbox-item value="3">爬山</zx-checkbox-item>
        <zx-checkbox-item value="3">书法</zx-checkbox-item>
      </zx-checkbox-group>
    </zx-form-group>
    <zx-form-group>
      <zx-button type='primary' @click='submitFunc("subForm")'>表单提交</zx-button>
    </zx-form-group>
  </div>
</template>
<script>
  // tell
  // email
  // bankcard // 银行卡
  // identity // 身份证
  export default {
    data() {
      return {
        inputValue: '',
        username: '',
        bool: false,
        num: 1,
        subForm: {
          mobile: '',
          code: '',
          email: '',
          bankcard: '',
          identity: '',
          sex: '',
          interest: []
        },
        rules: {
          mobile: { required: true, pattern: 'tell', msg: '请正确输入您的手机号码' },
          code: { required: true, pattern: '^\\d{6}$', msg: '请输入您的6位数验证码' },
          email: { required: true, pattern: 'email', msg: '请输入正确的邮箱' },
          bankcard: { required: true, pattern: 'bankcard', msg: '请输入正确的银行卡' },
          identity: { required: true, pattern: 'identity', msg: '请输入正确的身份证' },
          sex: { required: true, msg: '请选择性别' },
          interest: { required: true, msg: '请选择兴趣爱好' }
        }
      };
    },
    methods: {
      enterFn() {
        console.log(111);
      },
      // 获取验证码
      getCode(item, innerText, $event) {
        if (!this.checkItem(item)) {
          return false;
        }
        if (this.bool) { return false; }
        this.bool = true;
        let num = 10;
        this.subForm.code = 263563;
        this.timer = setInterval(() => {
          num--;
          $event.target.innerText = num + 's';
          if (num <= 0) {
            clearTimeout(this.timer);
            $event.target.innerText = innerText;
            // this.subForm.code = '';
            this.bool = false;
          }
        }, 1000);
      },
      checkItem(item) {
        if (!this.$refs[item].valid) {
          this.$dialog.toast({
            msg: this.$refs[item].msg,
            position: 'top'
          });
          return false;
        }
        return true;
      },
      // 提交
      submitFunc(formName) {
        for (let item in this[formName]) {
          if (!this.checkItem(item)) {
            return false;
          }
        };
        console.log(this[formName]);
        this.$dialog.toast({
          msg: '请打开控制台查看值',
          position: 'top'
        });
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'input');
    }
  };
</script>
<style scoped>
  .icon {
    display: block;
    height: 30px;
    width: 30px;
    background: url("../assets/logo.png") no-repeat center center;
    background-size: 80%;
  }
</style>