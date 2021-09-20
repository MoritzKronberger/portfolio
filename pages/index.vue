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
    grid-area: main;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .linkContainer {
    display: flex;
    flex-direction: v(clm-flex-direction);
    justify-content: center;
    align-items: center;
  }

  a {
    @include font($main, huge);
    color: $offBlack;
    text-decoration: none;
    border: solid 3px;

    flex-shrink: 0;
    width: v(clm-width);
    height: v(clm-height);
    margin: v(mrg-index-top) calc(var(--clm-gap) * .5);

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
