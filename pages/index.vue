<template>
  <main>
    <article class="linkContainer">
      <NuxtLink to="/design" id="firstLink">Design</NuxtLink>
      <NuxtLink to="/compsci">CompSci</NuxtLink>
    </article>
  </main>
</template>

<script>
export default {
  transition(to) {
    if (to.name === "index") {
      return { name: "zoom", appear: true };
    }
  },
  data() {
    return {
      metaName: "index"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_shared";

main {
  grid-area: main;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.linkContainer {
  display: flex;
  flex-direction: v(clm-flex-direction);
  justify-content: center;
  align-items: center;
}

a {
  @include font($main, huge);
  color: $offBlack;
  text-decoration: none;
  border: solid v(fs-border-regular);

  flex-shrink: 0;
  width: v(clm-width);
  height: v(clm-height);
  margin: v(mrg-index-top) calc(var(--clm-gap) * 0.5);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

a:hover {
  animation: fill $speed300;
  animation-fill-mode: both;
  border: solid v(fs-border-regular) $offBlack;
}

@keyframes fill {
  from {
    background-color: $offWhite;
    color: $offBlack;
  }
  to {
    color: $offWhite;
    background-color: $offBlack;
  }
}
</style>
