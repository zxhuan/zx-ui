<template>
  <div @click="changeValue" class="zx-switch">
    <div class="zx-switch-wrap" :class="checkClass(this)">
      <div class="switch" :class="currentValue?'check':'uncheck'" :style="checkStyle()">
      </div>
      <span class="switch-text">{{currentValue?activeText:inactiveText}}</span>
      <span class="dotted"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zx-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      activeText: {
        type: [String, Number]
      },
      inactiveText: {
        type: [String, Number]
      },
      activeColor: {
        type: String,
        default: '#019dfa'
      },
      inactiveColor: {
        type: String,
        default: '#fff'
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    methods: {
      checkClass(ele) {
        return `${this.currentValue ? 'ischeck' : 'uncheck'}`;
      },
      checkStyle() {
        return this.currentValue ? `background:${this.activeColor}` : `background:${this.inactiveColor}`;
      },
      changeValue() {
        this.currentValue = !this.currentValue
      }
    }
  }
</script>