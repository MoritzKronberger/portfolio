<template>
    <main>
        <article class="projectsWrapper">
            <ul>
                <li v-for="post of posts" :key="post.slug">
                <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
                    <h2 class="postTitle">{{ post.title }}</h2>
                    <img :src="require(`../content/projects/assets/images/thumbnails/${post.slug}.png`)" alt="post thumbnail">
                    <p>{{post.description}}</p>
                </NuxtLink>
                </li>
            </ul>
        </article>
    </main>
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
    @import '@/assets/css/breakpoints';

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
        width: v(clm-width);
        margin: 0 calc(.5 * var(--clm-gap)) v(mrg-postList-items-bottom);
    }

    a {
        @include font($main, regular);
        color: $offBlack;
        text-decoration: none;
    }

    .postTitle {
        @include font($main, regular);
    }

    img {
        width: 100%;
        margin: 1rem 0;
    }

    p {
        @include font($code, regular);
        text-align: justify;
    }
</style>
