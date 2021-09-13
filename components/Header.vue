<template>
  <header>
    <div class="headContainer">
      <NuxtLink to="/" id="firstLink">Home</NuxtLink>
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
    justify-content: center;
    align-items: center;
  }

  a {
    @include font($main, big);
    color: $offBlack;
    text-decoration: none;
    text-align: center;
    flex-basis: $fb-width;
  }

  a.nuxt-link-exact-active {
    text-decoration: underline;
  }

  #firstLink {
    margin-right: $fb-gap;
  }
</style>