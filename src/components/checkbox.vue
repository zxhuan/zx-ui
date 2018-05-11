<template>
    <div class="checkbox">
        <zx-form-group title="checkox选项">
            <span slot="label-text">当前选中的值:{{value}}</span>
            <zx-checkbox-group v-model='value' ref='value' :rules="rules.checkbox" flex>
                <zx-checkbox-item value="选项卡一">选项卡一</zx-checkbox-item>
                <zx-checkbox-item value="选项卡二" disabled>选项卡二</zx-checkbox-item>
                <zx-checkbox-item value="选项卡三" disabled>选项卡三</zx-checkbox-item>
                <zx-checkbox-item value="选项卡四">选项卡四</zx-checkbox-item>
                <zx-checkbox-item value="选项卡五">选项卡五</zx-checkbox-item>
            </zx-checkbox-group>
        </zx-form-group>
        <div class="flex">
            <zx-button @click="submitFn" type="primary">提交</zx-button>
        </div>
        <zx-form-group title="checkox选项">
            <span slot="label-text">当前选中的值:{{values}}</span>
            <zx-checkbox-group v-model='values' @change="changeValue(values)">
                <zx-checkbox-item value="value1">value1</zx-checkbox-item>
                <zx-checkbox-item value="value2">value2</zx-checkbox-item>
                <zx-checkbox-item value="value3">value3</zx-checkbox-item>
            </zx-checkbox-group>
        </zx-form-group>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: ['选项卡三'],
                values: [],
                rules: {
                    checkbox: { required: true, msg: '请选中一个值' }
                }
            };
        },
        methods: {
            changeValue(value) {
                console.log(value);
            },
            // 代码提交
            submitFn() {
                if (!this.$refs['value'].valid) {
                    this.$dialog.toast({
                        msg: this.$refs['value'].msg,
                        position: 'top'
                    });
                    return false;
                }
                console.log(this.value);
            }
        },
        created() {
            this.$store.dispatch('setTtile', 'checkbox');
        }
    };
</script>