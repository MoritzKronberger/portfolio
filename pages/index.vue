<template>
  <main>
    <NuxtLink to="/design" id="firstLink">Design</NuxtLink>
    <NuxtLink to="/compsci">CompSci</NuxtLink>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';
  
  main {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    @include font($main, huge);
    color: $offBlack;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: $fb-width;
    height: 7.5rem;
    border: solid 3px;
  }

  a:hover{
    color: $offWhite;
    background-color: $offBlack;
    border: solid 3px $offBlack;
  }

  #firstLink {
    margin-right: $fb-gap;
  }
</style>
