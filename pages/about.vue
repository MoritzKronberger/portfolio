<template>
  <main>
      <article>
        <div v-html="rawSelfIcon" 
             id="myIcon"
             aria-hidden="true"/>
        <h2>Hi, I'm Moritz</h2>
        <p>As a Bachelor's student of Interactive Media at the University of Applied Sciences Ausgburg I love to code and create meaningful human machine interactions.</p>
        <br>
        <p>While design is central to all my projects, my focus is on the technical side of bringing interactive experiences to life.</p>
      </article>
  </main>
</template>

<script>
  import rawSelfIcon from "~/assets/icons/self.svg?raw";

  export default {
    data () {
      return { 
        rawSelfIcon,
        metaName: 'about'
      }
    }
  }
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

  article {
    flex-basis: v(clm-width);
    margin-bottom: v(mrg-about-bottom);
  }

  p {
    text-align: justify;
  }

  h2 {
    @include font($code, big);
    margin-bottom: v(mrg-about-h2-bottom);
  }
</style>

<style lang="scss">
  @import '@/assets/css/_shared';
  
  #myIcon {
    line-height: 0;
    margin-bottom: v(mrg-about-icon-bottom);
    
    svg {
      width: v(mrg-about-icon-width);
    }

    svg > path {
      fill: $offBlack;
    }
  }
</style>