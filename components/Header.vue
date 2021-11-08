<template>
  <nav>
    <div class="headContainer">
      <span class="linkWrapper">
        <NuxtLink to="/" class="nuxtLink">Home</NuxtLink>
      </span>
      <span class="linkWrapper">
        <NuxtLink to="/about" class="nuxtLink">About</NuxtLink>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    // remove underline from nuxt-link-exact-active when hovering over other nav link
    const nuxtLinks = document.getElementsByClassName("nuxtLink");
    for (let link of nuxtLinks) {
      link.onmouseover = () => {
        const activeNuxtLink = document.getElementsByClassName(
          "nuxt-link-exact-active"
        )[0];
        activeNuxtLink ? activeNuxtLink.classList.add("noUnderline") : "";
      };
      link.onmouseout = () => {
        const activeNuxtLink = document.getElementsByClassName(
          "nuxt-link-exact-active"
        )[0];
        activeNuxtLink ? activeNuxtLink.classList.remove("noUnderline") : "";
      };
    }

    // hide navbar on scroll down
    const navBar = document.getElementsByTagName("nav")[0];
    this.$hideOnScrolldown(
      () => {
        navBar.style.top = `-${navBar.offsetHeight}px`;
      },
      () => {
        navBar.style.top = "0";
      }
    );
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_shared";
@import "@/assets/css/animations";

nav {
  grid-area: header;
  padding: v(mrg-header-top) 0;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: $offWhite;
  transition: top $speed700 ease-in-out;
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
}

a {
  @include font($main, big);
  color: $offBlack;
  text-decoration: none;
  text-align: center;
}

//animated underline:
$underlineWidth: 2px;
$underlineSpeed: $speed400;

@include hoverUnderline(
  "a",
  $underlineWidth,
  92%,
  50%,
  $offBlack,
  $underlineSpeed
);

.nuxt-link-exact-active {
  background-size: 100% $underlineWidth;
  transition: background-size $underlineSpeed linear;
}

.noUnderline {
  background-size: 0 $underlineWidth;
  transition: background-size $underlineSpeed linear;
}
</style>
