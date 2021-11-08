<template>
  <main>
    <article class="projectsWrapper">
      <ul>
        <li class="projectCard" v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
            <img
              :src="
                require(`../content/projects/assets/images/thumbnails/${post.thumbnail}`)
              "
              :alt="post.title + ' thumbnail'"
            />
            <div class="cardInfo">
              <h2>{{ post.title }}</h2>
              <p>{{ post.tags }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: ""
    };
  },
  props: ["category"],
  async fetch() {
    let posts;
    this.posts = await this.$content("projects/markdown")
      .where({ category: this.category })
      .sortBy("date", "desc")
      .fetch();
    return { posts };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_shared";
@import "@/assets/css/breakpoints";
@import "@/assets/css/animations";

$revealSpeed: $speed700;

main {
  grid-area: main;
}

.projectsWrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: v(mrg-global-top);
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: v(clm-flex-direction);
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: calc(2 * (var(--clm-width) + var(--clm-gap)));
}

@media only screen and(max-width: map-get($breakpoints, mobile)) {
  ul {
    align-items: center;
    width: 100%;
  }
}

li {
  margin: 0 calc(0.5 * var(--clm-gap)) v(mrg-postList-items-bottom);
  width: v(clm-width);
  height: v(clm-width);
}

a {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  @include font($main, regular);
  color: $offBlack;
  text-decoration: none;
  overflow: hidden;
  border-bottom: v(fs-border-regular) solid;
}

.cardInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $offWhite;
  border-top: v(fs-border-regular) solid;
  border-left: v(fs-border-regular) solid;
  border-right: v(fs-border-regular) solid;
  transform: translateY(0%);
  transition: transform $revealSpeed;
}

h2,
p {
  position: absolute;
  margin: v(mrg-postList-text-around);
}

h2 {
  @include font($main, regular);
  font-weight: bold;
  top: 0;
  margin-top: v(mrg-postList-text-around);
  transition: margin-top $revealSpeed;
}

p {
  @include font($code, regular);
  font-weight: bold;
  bottom: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a:hover .cardInfo {
  transform: translateY(v(mrg-postList-hide-percent));
  transition: transform $revealSpeed;
}

a:hover h2 {
  margin-top: v(mrg-postList-h2-hidden);
  transition: margin-top $revealSpeed;
}
</style>
