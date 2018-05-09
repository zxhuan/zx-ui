<template>
    <div class="zx-checkbox-group" :class='classFlex()'>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'zx-checkbox-group',
        props: {
            value: {
                type: Array,
                required: true
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
        provide() {
            return {
                'checkboxGroup': this
            };
        },
        methods: {
            classFlex() {
                return this.flex ? 'zx-checkbox-group-flex' : '';
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
        }
    }
</script>