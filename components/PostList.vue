<template>
    <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
            <p id="postTitle">{{ post.title }}</p>
            <img :src="require(`../content/projects/assets/images/thumbnails/${post.slug}.png`)" alt="post thumbnail">
            <p>{{post.description}}</p>
          </NuxtLink>
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
        @include font($main, regular);
        color: $offBlack;
        text-decoration: none;
    }

    #postTitle {
        @include font($code, regular);
    }

    img {
        width: $fb-width;
        margin: .6rem 0;
    }
</style>