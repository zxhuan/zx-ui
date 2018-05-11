<template>
  <div id="app">
    <div class="zx-header" @click='$router.go(-1)'>
      <i class="icon"></i>
      <span>{{title}}</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'title'
      ])
    }
  };
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
  }

  .zx-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 45px;
    line-height: 45px;
    box-shadow: 0 6px 10px rgba(204, 204, 204, 0.16);
    background: white;
    z-index: 99;
  }

  .zx-header .icon {
    height: 15px;
    width: 15px;
    position: fixed;
    display: block;
    left: 15px;
    top: 15px;
    border-top: 1px solid #545454;
    border-right: 1px solid #545454;
    transform: rotate(-135deg);
  }
</style>