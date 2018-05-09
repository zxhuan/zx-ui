<template>
  <div class="form-group">
    <label class="form-label" v-if="title">{{title}}
      <slot name="label-text"></slot>
    </label>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'zx-form-group',
    props: {
      title: String
    }
  };
</script>
<style scoped>
  .submit-btn {
    padding: 1rem;
    text-align: center;
    background: white;
    color: rgba(1, 157, 250, 1);
    border: 1px solid rgba(1, 157, 250, 1);
  }

  .bg-gray {
    background: rgba(77, 79, 81, 1);
    color: white;
    border: 1px solid rgba(77, 79, 81, 1);
  }
</style>