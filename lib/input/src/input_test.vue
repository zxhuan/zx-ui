<template>
    <div :class="type=='textarea'?'form-textarea-wrap':'form-input-wrap'">
        <slot name="icon"></slot>
        <textarea v-if="type=='textarea'" class="form-textarea" :placeholder="place" autocomplete="off" ref="input" v-model="currentValue"
            :disabled="disabled" @change='blurHandler'></textarea>
        <input :type="type" class="form-input" :placeholder="place" autocomplete="off" ref="input" v-model="currentValue" @blur="blurHandler"
            :disabled="disabled" @change='blurHandler' v-else>
        <slot name="text"></slot>
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
            value: [String, Number],
            // required: {
            //     type: Boolean,
            //     default: false
            // },
            disabled: {
                type: Boolean,
                default: false
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
                    // 手机
                    tell: '^(86)?1[3,4,5,7,8]\\d{9}$',
                    //邮箱
                    email: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
                    //银行卡
                    bankcard: '^\\d{15,19}$',
                    //身份证
                    identity: '^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$'
                }
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
                this.emitInput();
            },
            currentValue(val) {
                this.validatorInput(val, true);
                this.emitInput();
            },
            rules(val) {
                this.init(val);
            }
        },
        methods: {
            blurHandler() {
                this.$emit(this.currentValue, true)
            },
            emitInput() {
                this.$emit('input', this.currentValue);
            },
            // 表单规则验证
            validatorInput(value, bool) {
                // this.init(this.rules)
                if (this.required && this.currentValue == '') {
                    this.msg = this.place;
                    this.valid = false;
                    return;
                }
                if (this.pattern) {
                    if (new RegExp(this.pattern).test(this.currentValue)) {
                        this.valid = true
                    } else {
                        this.msg = this.rules.msg
                        this.valid = false;
                        return;
                    }
                }
                this.valid = true;
            },
            init(rules) {
                if (rules) {
                    for (let item in this.patternObj) {
                        this.pattern = item == rules.pattern ? this.patternObj[item] : rules.pattern;
                    }
                    this.required = rules.required ? rules.required : false
                    this.msg = rules.msg ? rules.msg : rules.pattern + " value is empty !";
                    // this.validatorInput(this.currentValue, true);
                } else {
                    this.pattern = ''
                    this.required = false
                    this.msg = ''
                }
            }
        },
        mounted() {
            this.validatorInput(this.currentValue, true);
            // this.init(this.rules);
            // let rules = this.rules;
            // if (rules) {
            //     this.required = rules.required ? rules.required : false
            //     this.msg = rules.msg ? rules.msg : rules.pattern + " value is empty !";
            //     for (let item in this.patternObj) {
            //         if (rules.pattern == item) {
            //             this.pattern = this.patternObj[item];
            //             return;
            //         } else {
            //             this.pattern = rules.pattern;
            //             return;
            //         }
            //     }
            //     console.log(this.pattern)

            // } else {
            //     this.pattern = ''
            //     this.required = false
            //     this.msg = ''
            // }
        }
    }
</script>
<style scoped lang="scss">
    $defaultColor:rgba(1, 157, 250, 1);
    $defalutFontColor:rgba(77, 79, 81, 1); // 表单
    .form-group {
        position: relative;
        margin: 0 1rem;
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        .form-label {
            font-size: 1.4rem;
            padding: .8rem 0;
            color: rgba(77, 79, 81, 1);
            span {
                color: RGBA(151, 151, 151, 1);
            }
        }
        .form-select {
            display: flex;
            position: relative;
            font-size: 1rem;
            .select-icon-inner {
                color: $defaultColor;
            }
            .select-ios {
                max-width: 100%;
                flex: 1;
                padding: 11px 8px 11px 0px;
                color: #828A9E;
            }
            .select-placeholder {
                color: RGBA(151, 151, 151, 1);
            }
        }
        .form-textarea-wrap {
            height: 8rem;
            box-shadow: 0 6px 10px rgba(204, 204, 204, 0.16);
            padding: 0.8rem;
            .form-textarea {
                height: 100%;
                width: 100%;
                resize: none;
                color: #000;
                border: none;
                &::placeholder {
                    color: RGBA(151, 151, 151, 1);
                }
            }
        }
        .form-input-wrap {
            display: flex;
            height: 3.5rem;
            line-height: 3.5rem;
            background: white;
            .icon {
                height: 3.5rem;
                width: 3.5rem;
                box-shadow: 0 6px 10px rgba(204, 204, 204, 0.16);
                /* &.phone-icon {
                        background: rgba(232, 232, 232, 1) url("../assets/img/tell-icon.png") center center no-repeat;
                    }
                    &.pass-icon {
                        background: rgba(232, 232, 232, 1) url("../assets/img/pass-icon.png") center center no-repeat;
                    }
                    &.email-icon {
                        background: rgba(232, 232, 232, 1) url("../assets/img/email-icon.png") center center no-repeat;
                    } */
            }
            .form-input {
                border: none;
                flex: 1;
                padding-left: .8rem;
                font-size: 1.2rem;
                box-shadow: 0 6px 10px rgba(204, 204, 204, 0.16);
            }
            .form-input[disabled] {
                color: rgba(77, 79, 81, 1);
            }
            .input-text {
                color: $defaultColor;
                text-align: center;
                padding: 0 1rem;
                font-size: 1.4rem;
                margin-left: 1rem;
                border: 1px solid rgba(232, 232, 232, 0.65);
            }
        }
        .submit-btn {
            // margin-top: 2rem;
            padding: 1rem;
            text-align: center;
            background: white;
            color: $defaultColor;
            border: 1px solid $defaultColor;
        }
        .bg-gray {
            background: rgba(77, 79, 81, 1);
            color: white;
            border: 1px solid rgba(77, 79, 81, 1);
        }
    }
</style>