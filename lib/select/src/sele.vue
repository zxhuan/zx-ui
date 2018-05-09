<template>

</template>
<script>
    export default {
        name: "zx-select",
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
                currentValue: '',
                visbale: false,
                cachedOptions: [],
            }
        },
        props: {
            value: { // 必须要使用value
                default: '',
            },
        },
        provide() {
            return {
                'select': this
            };
        },
        created() {
            this.$on('handleOptionClick', this.handleOptionSelect);
        },
        mounted() {
            this.setOptionLabel();
        },
        wathch: {

        },
        directives: { Clickoutside },
        methods: {
            toggleMenu() {
                this.visbale = !this.visbale;
            },
            handleClose() {
                this.visbale = false;
            },
            setOptionLabel() {
                var flag = false;
                for (var i = 0, j = this.cachedOptions.length; i < j; i++) {
                    if (this.cachedOptions[i].value == this.value) {
                        flag = true;
                        this.currentValue = this.cachedOptions[i].label;
                        break;
                    }
                }
                if (!flag) {
                    this.currentValue = this.value;
                }
            },
            handleOptionSelect(option) {
                this.currentValue = option.label;
                this.visbale = false;
                this.$emit('change', option.value);
                this.$emit('input', option.value);
            }
        },
    }
</script>
<style lang="scss" scoped>
    .zx-option {
        padding: 5px 0;
        font-size: 14px;
    }
</style>
</template>
<script>
    export default {
        name: "zx-select",
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            name: {
                type: [String, Number]
            }
        },
        inject: ['select'],
        methods: {
            emitValue() {
                console.log(this);
                // console.log(this.value)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .zx-option {
        padding: 5px 0;
        font-size: 14px;
    }
</style>