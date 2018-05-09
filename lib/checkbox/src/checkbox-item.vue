<template>
    <label class="zx-checkbox-item" :for="'checkbox'+uid">
        <div class="checkbox-input">
            <input type="checkbox" :name="names" :id="'checkbox'+uid" :ref="'checkbox'+value" @click='getValue' :disabled="disabled">
            <span class="checked"></span>
        </div>
        <div class="checkbox-text">
            <slot></slot>
        </div>
    </label>
</template>
<script>
    export default {
        name: 'zx-checkbox-item',
        props: {
            value: {
                type: [Number, String]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        inject: ['checkboxGroup'],
        data() {
            return {
                values: this.value,
                names: 'checkbox',
                checked: false,
                uid: 0
            }
        },
        methods: {
            getValue() {
                this.checked = this.$refs['checkbox' + this.value].checked;
                if (this.checked) {
                    this.checkboxGroup.currentValue = this.checkboxGroup.currentValue.push(this.value);
                } else {
                    for (var i = 0; i < this.checkboxGroup.currentValue.length; i++) {
                        if (this.checkboxGroup.currentValue[i] == this.value) {
                            this.checkboxGroup.currentValue.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.checked = this.$refs['checkbox' + this.value].checked;
            this.names = 'checkbox' + this.checkboxGroup._uid;
            this.uid = this._uid;
            this.checkboxGroup.currentValue.forEach(value => {
                if (value == this.value) {
                    this.$refs['checkbox' + this.value].checked = true;
                }
            });
        }
    };
</script>