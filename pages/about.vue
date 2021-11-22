<template>
  <main>
    <article>
      <div v-html="rawSelfIcon" id="myIcon" aria-hidden="true" />
      <h2>Hi, I'm Moritz</h2>
      <p>
        As a Bachelor's student of Interactive Media at the University of
        Applied Sciences Ausgburg I am interested in all things code, especially
        human machine interactions.
      </p>
      <br />
      <p>
        While design is central to all my projects, my focus has been on the
        technical side of bringing interactive experiences to life, which
        allowed me to gain experience in full stack web development, data
        management, theory and application of deep learning techniques, as well
        as graphics programming.
      </p>
    </article>
  </main>
</template>

<script>
import rawSelfIcon from '~/assets/icons/self.svg?raw'

export default {
  data() {
    return {
      rawSelfIcon,
      metaName: 'about',
    }
  },
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
  flex-basis: calc(var(--clm-width) * 1.3);
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
