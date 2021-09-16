<template>
  <main>
      <article>
        <img src="../assets/icons/self.png" alt="my logo">
        <h2>Moritz Kronberger</h2>
        <p>Hi, I'm a 22 year old Interactive Media Bachelor's Student at the University of Applied Sciences in Augsburg.</p>
        <br>
        <p>I love to code and create interesting and appealing interactions with digital media.</p>
      </article>
  </main>
</template>

<script>
export default {

}
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

  article {
    flex-basis: $base-width-aspect;
    margin-bottom: 15%;
    margin-right: $base-gap-eigth;
    margin-left: $base-gap-eigth;
    text-align: justify;
  }

  h2 {
    @include font($code, big);
    margin-bottom: 2rem;
  }

  img {
    width: 2rem;
    margin-bottom: 2.5rem;
  }
</style>
