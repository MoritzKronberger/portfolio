<template>
  <header>
    <div class="headContainer">
      <span class="linkWrapper">
        <NuxtLink to="/" class="nuxtLink">Home</NuxtLink>
      </span>
      <span class="linkWrapper">
        <NuxtLink to="/about" class="nuxtLink">About</NuxtLink>
      </span>
    </div>
  </header>
</template>

<script>
  export default {
    mounted () {
      const nuxtLinks = document.getElementsByClassName("nuxtLink")
      for(let link of nuxtLinks){
        link.onmouseover = function(){
          const activeNuxtLink = document.getElementsByClassName("nuxt-link-exact-active")[0]
          activeNuxtLink ? activeNuxtLink.classList.add("noUnderline") : ''
        }
        link.onmouseout  = function(){
          const activeNuxtLink = document.getElementsByClassName("nuxt-link-exact-active")[0]
          activeNuxtLink ? activeNuxtLink.classList.remove("noUnderline") : ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';
  @import '@/assets/css/animations';

  header {
    grid-area: header;
    padding: v(mrg-header-top) 0;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: $offWhite;
    }

  .headContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .linkWrapper {
    flex-basis: v(hdc-width);
    margin: 0 calc(var(--hdc-gap) * 0.5);
    display: flex;
    justify-content: center;
    //align-items: center;
  }

  a {
    @include font($main, big);
    color: $offBlack;
    text-decoration: none;
    text-align: center;
  }

  //underline animation
  $underlineWidth: 2px;
  $underlineSpeed: $speed400;

  @include hoverUnderline("a", $underlineWidth, 92%, 50%, $offBlack, $underlineSpeed);

  .nuxt-link-exact-active {
    background-size: 100% $underlineWidth;
    transition: background-size $underlineSpeed linear;
  }

  .noUnderline {
    background-size: 0 $underlineWidth;
    transition: background-size $underlineSpeed linear;
  }
</style>
