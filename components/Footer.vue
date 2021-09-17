<template>
  <footer>
      <div class="socialLinks">
        <a href="https://github.com/MoritzKronberger/portfolio"><img src="../assets/icons/gitHub.png" alt="gitHub"></a>
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
    margin: v(mrg-600) 0 v(mrg-500);
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
    margin: 0 calc(var(--mrg-400) * .5) v(mrg-400) calc(var(--mrg-400) * .5);
  }

  a > img {
    width: v(mrg-500);
  }
</style>
