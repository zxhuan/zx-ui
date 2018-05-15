<template>
  <div class="index-cont">
    <p>一个基于Vue2.x的移动端UI。项目中写的一些简单的vueUI框架，不断学习不断完善</p>
    <div style="display: flex;justify-content: space-between;padding:0 10px">
      <a href='https://github.com/zxhuan/zx-ui.git'>git 地址</a>
      <a href="https://www.npmjs.com/package/zx-ui">npm 地址</a>
      <a href="https://zxhuan.github.io/eg/">案例</a>
    </div>
    <div>
    </div>
    <zx-cell-group>
      <zx-cell-item type='link' border arrow href='/icon'>
        <span slot='left'>图标</span>
        <span slot='left'>icon</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/button'>
        <span slot='left'>按钮</span>
        <span slot='left'>button</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/cell'>
        <span slot='left'>列表</span>
        <span slot='left'>cell</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/tab'>
        <span slot='left'>选项卡</span>
        <span slot='left'>tab</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/input'>
        <span slot='left'>输入框</span>
        <span slot='left'>input</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/select'>
        <span slot='left'>下拉框</span>
        <span slot='left'>select</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/popup'>
        <span slot='left'>popup</span>
        <span slot='left'>popup</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/dialog'>
        <span slot='left'>弹层</span>
        <span slot='left'>dialog</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/radio'>
        <span slot='left'>单选</span>
        <span slot='left'>radio</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/checkbox'>
        <span slot='left'>多选</span>
        <span slot='left'>checkbox</span>
      </zx-cell-item>
      <zx-cell-item type='link' border arrow href='/switch'>
        <span slot='left'>Switch</span>
        <span slot='left'>Switch</span>
      </zx-cell-item>
    </zx-cell-group>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch('setTtile', '首页');
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>