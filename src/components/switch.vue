<template>
  <div class="switch">
    <div class="box" style="margin-bottom: 10px;">
      <zx-switch v-model='values' @change="changevalue(values)" active-text="开" inactive-text="关"></zx-switch>
    </div>
    <div class="box">
      <zx-switch v-model='value' @change="changevalue(value)" active-color="#019dfa" inactive-color="#a3b5bf"></zx-switch>
    </div>
    <div class="box">
      <zx-switch v-model='value1' @change="changevalue(value1)" active-color="#009688" inactive-color="#e9eaea" active-text="hello"
        inactive-text="world"></zx-switch>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        values: true,
        value: false,
        value1: false
      };
    },
    methods: {
      changevalue(values) {
        console.log(values);
      }
    },
    created() {
      this.$store.dispatch('setTtile', 'switch');
    }
  };
</script>
<style scoped lang="scss">
  .switch {
    padding: 1rem;
  }
</style>