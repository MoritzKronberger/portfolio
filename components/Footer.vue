<template>
  <footer>
      <div class="socialLinks">
        <a id="firstSocial" href="https://github.com/MoritzKronberger/portfolio">git</a>
        <a href="https://de.linkedin.com/">li</a>
      </div>
      <p>© Moritz Kronberger 2021</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';

  footer {
    margin-top: auto;
    margin-bottom: 1.5rem;
  }

  p {
    @include font($code, small);
    text-align: center;
  }

  .socialLinks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  a {
    @include font($main, small);
    background-color: $offBlack;
    color: $offWhite;
    padding: .2rem;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  #firstSocial{
    margin-right: 1rem;
  }
</style>
