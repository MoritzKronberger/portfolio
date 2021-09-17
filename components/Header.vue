<template>
  <header>
    <div class="headContainer">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';

  header {
    grid-area: header;
    padding: v(mrg-500) 0;
    position: sticky;
    top: 0;
    background-color: $offWhite;
  }

  .headContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    @include font($main, big);
    color: $offBlack;
    text-decoration: none;
    text-align: center;
    flex-basis: v(hdc-width);
    margin: 0 min( calc(var(--hdc-gap) * 0.5) , 10%);
  }

  a.nuxt-link-exact-active {
    text-decoration: underline;
  }
</style>
