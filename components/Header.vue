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
    margin-top: 2rem;
  }

  .headContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  a {
    @include font($main, big);
    color: $offBlack;
    text-decoration: none;
  }

  a.nuxt-link-exact-active {
    text-decoration: underline;
  }
</style>