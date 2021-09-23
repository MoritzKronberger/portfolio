<template>
  <footer>
      <div class="socialLinks">
        <a href="https://github.com/MoritzKronberger/portfolio" 
           v-html="rawGithubIcon"
           title="Link to my GitHub profile">
        </a>
        <a href="https://de.linkedin.com/" 
           v-html="rawLinkedinIcon"
           title="Link to my LinkedIn page">
        </a>
      </div>
      <p>© Moritz Kronberger 2021</p>
  </footer>
</template>

<script>
  import rawGithubIcon from "~/assets/icons/gitHub.svg?raw";
  import rawLinkedinIcon from "~/assets/icons/linkedIn.svg?raw";

  export default {
    data(){
      return { rawGithubIcon, rawLinkedinIcon };
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/_shared';

  footer {
    margin: v(mrg-footer-top) 0 v(mrg-footer-bottom);
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
    margin-bottom: v(mrg-footer-icons-bottom);
  }

  a {
    @include font($main, small);
    color: $offBlack;
    text-decoration: none;
    margin: 0 calc(var(--mrg-footer-between-socials) * .5);
    line-height: 0;
  }
</style>

<style lang="scss">
  @import '@/assets/css/_shared';

  .socialLinks {
    svg {
      height: v(mrg-footer-icon-size);
    }

    svg > path {
      fill: $offBlack;
    }

    a:hover {
      svg {
        animation: pinch .2s;
        animation-fill-mode: both;
      }
    }
  }

  @keyframes pinch {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(.93);
    }
  }
</style>
