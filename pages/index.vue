<template>
  <main>
    <div class="linkContainer">
      <NuxtLink to="/design" id="firstLink">Design</NuxtLink>
      <NuxtLink to="/compsci">CompSci</NuxtLink>
    </div>
  </main>
</template>

<script>
  export default {
    head() {
      return {
        title: 'Portfolio',
        meta: [
          { hid: 'desc-portfolio', name: 'description', content: `This is Moritz Kronberger's personal portfolio-website.` }
        ]
      }
    }, 
    transition: { name: 'zoom', mode: "out-in" }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';
  @import '@/assets/css/transitions';

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
    animation: fill .1s;
    animation-fill-mode: both;
    border: solid 3px $offBlack;
  }

  @keyframes fill {
    from {
      background-color: $offWhite;
      color: $offBlack;
    }
    to {
      color: $offWhite;
      background-color: $offBlack;
    }
  }
</style>
