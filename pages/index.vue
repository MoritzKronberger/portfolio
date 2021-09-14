<template>
  <main>
    <div class="linkContainer">
      <NuxtLink to="/design" id="firstLink">Design</NuxtLink>
      <NuxtLink to="/compsci">CompSci</NuxtLink>
    </div>
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

  .linkContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  a {
    @include font($main, huge);
    color: $offBlack;
    text-decoration: none;
    border: solid 3px;

    flex-shrink: 0;
    width: $base-width-aspect;
    height: $base-height-aspect;
    margin: $base-gap-half/4 $base-gap-half;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a:hover{
    color: $offWhite;
    background-color: $offBlack;
    border: solid 3px $offBlack;
  }
</style>
