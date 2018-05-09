<template>
  <div class="zx-tab-group">
    <ul class="zx-tab-nav">
      <!-- <li v-for='(item,key) in tabNavList' class="tab-nav-item" :class="item.key==tabActive?'tab-nav-active':''" @click="checkActive(item)"  :key="key">{{item.value}}</li> -->
      <li v-for='item in tabNavList' class="tab-nav-item" :class="item.name==showTab?'tab-nav-active':''" @click="checkActiveName(item)">{{item.value}}</li>
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
      value: String
    },
    data() {
      return {
        tabNavList: [],
        tabActive: 0,
        showTab: this.value
      };
    },
    computed: {

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
          if (value.$props.active) {
            this.tabActive = value._uid;
          }
        });
      },
      // 第一种方法
      checkActive(item) {
        this.tabActive = item.key;
        this.$emit('input');
      },
      // 第二种方法
      checkActiveName(item) {
        this.showTab = item.name;
      }
    },
    mounted() {
      this.init();
    }
  };

</script>