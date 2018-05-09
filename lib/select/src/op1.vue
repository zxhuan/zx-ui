<template>
        <div class="zx-option" @click="emitValue" ref="option">
            <slot></slot>
        </div>
    </template>
    <script>
        export default {
            name: "zx-option",
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