<template>
    <div class="zx-tab-group" :class="postion">
        <ul class="zx-tab-nav">
            <!-- <li v-for='(item,key) in tabNavList' class="tab-nav-item" :class="item.key==tabActive?'tab-nav-active':''" @click="checkActive(item)"  :key="key">{{item.value}}</li> -->
            <li v-for='item in tabNavList' class="tab-nav-item" :class="item.name==showTab?'tab-nav-active':''" @click="checkActiveName(item)"
                ref="tabav">
                {{item.value}}
            </li>
            <span class="tab-active" ref='tabActive'></span>
        </ul>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'zx-tab',
        props: {
            value: String,
            postion: {
                type: String,
                default: 'top', // top left right
            }
        },
        data() {
            return {
                tabNavList: [],
                tabActive: 0,
                showTab: this.value
            };
        },
        watch: {
            value(val) {
                this.checkActiveName(this.tabNavList.filter(item => item.name == val)[0])
            },
            showTab(val) {
                this.$emit('input', val);
            }
        },
        methods: {
            init() {
                let tablist = this.$children.filter(item => item.$options.name == 'zx-tab-item');
                tablist.forEach((value, key) => {
                    this.tabNavList.push({
                        key: value._uid,
                        value: value.$props.label,
                        name: value.$props.name
                    });
                    //  // 第一种方法所需
                    if (value.$props.active) {
                        this.tabActive = value._uid;
                    }
                });
                setTimeout(() => {
                    this.tabNavList.map((item, key) => {
                        item.left = this.$refs.tabav[key].offsetLeft;
                        let _tabActiveEle = this.$refs.tabActive;
                        let _tabEleItem = this.$refs.tabav[key];
                        if (this.postion == 'top') {
                            item.width = this.$refs.tabav[key].clientWidth;
                            item.left = this.$refs.tabav[key].offsetLeft;
                            if (this.showTab == item.name) {
                                _tabActiveEle.style.cssText = `width:${item.width}px;transform:translateX(${item.left}px)`;
                            }
                        } else if (this.postion == 'left' || this.postion == 'right') {
                            item.height = this.$refs.tabav[key].clientHeight;
                            item.top = this.$refs.tabav[key].offsetTop;
                            if (this.showTab == item.name) {
                                _tabActiveEle.style.cssText = `height:${item.height}px;transform:translateY(${item.top}px)`;
                            }
                        } else {
                            this.postion = 'top';
                        }
                    })
                }, 1);
            },
            // 第一种方法
            checkActive(item) {
                this.tabActive = item.key;
                this.$emit('input');
            },
            // 第二种方法
            checkActiveName(item) {
                this.showTab = item.name;
                let _tabActiveEle = this.$refs.tabActive;
                if (this.postion == 'top') {
                    _tabActiveEle.style.cssText = `width:${item.width}px;transform:translateX(${item.left}px)`;
                } else {
                    _tabActiveEle.style.cssText = `height:${item.height}px;transform:translateY(${item.top}px)`;
                }
            }
        },
        mounted() {
            this.init();
        }
    };

</script>