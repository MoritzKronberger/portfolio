<template>
  <main>
    <div class="linkContainer">
      <NuxtLink to="/design">Design</NuxtLink>
    </div>
    <div class="linkContainer">
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
    justify-content: space-evenly;
    align-items: center;
  }

  .linkContainer {
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-basis: 22.5rem;
    height: 7.5rem;
    border: solid 3px;
  }

  a {
    @include font($main, huge);
    color: $offBlack;
    text-decoration: none;
  }

  a:hover{
    color: $offWhite;
  }

  .linkContainer:hover {
    background-color: $offBlack;
    border: solid 3px $offBlack;
  }

  .linkContainer:hover > a {
    color: $offWhite;
  }
</style>
