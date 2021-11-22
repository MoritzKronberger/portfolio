<template>
  <transition :name="this.transitionName">
    <slot />
  </transition>
</template>

<script>
export default {
  props: {
    transitionName: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/transitions';

* {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
