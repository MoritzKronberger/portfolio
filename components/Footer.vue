<template>
  <footer>
      <div class="socialLinks">
        <a id="firstSocial" href="https://github.com/MoritzKronberger/portfolio"><img src="../assets/icons/gitHub.png" alt="gitHub"></a>
        <a href="https://de.linkedin.com/"><img src="../assets/icons/linkedIn.png" alt="linkedIn"></a>
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
    margin-bottom: 1.5rem;
    grid-area: footer;
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
    color: $offBlack;
    text-decoration: none;
    margin-bottom: 1rem;
  }

  a > img {
    width: 1.5rem;
  }

  #firstSocial{
    margin-right: 1rem;
  }
</style>
