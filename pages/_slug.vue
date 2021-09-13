<template>
  <article>
      <nuxt-content :document="post" />
  </article>
</template>

<script>
    export default {
        async asyncData({ $content, params }){
            const post = await $content('projects/markdown', params.slug).fetch();
            return { post }
        }
    }
</script>

<style>

</style>