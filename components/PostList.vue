<template>
    <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">{{ post.title }}</NuxtLink>
          <p>{{post.description}}</p>
        </li>
    </ul>
</template>

<script>
    export default {
        data (){
            return {
                posts: ''
            }
        },
        props: ['category'],
        async fetch(){
            let posts
            this.posts = await this.$content('projects/markdown').where({ category: this.category }).sortBy('created-At', 'desc').fetch()
            return { posts }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_shared';

    ul {
        list-style-type: none;
    }

    a {
        @include font($code, regular);
        color: $offBlack;
        text-decoration: none;
    }

    p {
        @include font($main, regular);
    }
</style>