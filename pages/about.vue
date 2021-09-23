<template>
  <main>
      <article>
        <div v-html="rawSelfIcon" 
             id="myIcon"
             aria-hidden="true"/>
        <h2>Moritz Kronberger</h2>
        <p>Hi, I'm a 22 year old Interactive Media Bachelor's Student at the University of Applied Sciences in Augsburg.</p>
        <br>
        <p>I love to code and create interesting and appealing interactions with digital media.</p>
      </article>
  </main>
</template>

<script>
  import rawSelfIcon from "~/assets/icons/self.svg?raw";

  export default {
    data () {
      return { rawSelfIcon }
    },
    head() {
      return {
        title: 'About',
        meta: [
          { hid: 'desc-about', name: 'description', content: `My portfolio's about page.` }
        ]
      }
    }, 
    transition: { name: 'slideDown', mode: "out-in" }
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