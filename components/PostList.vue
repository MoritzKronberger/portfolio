<template>
    <main>
        <article class="projectsWrapper">
            <ul>
                <li v-for="post of posts" :key="post.slug">
                <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
                    <p id="postTitle">{{ post.title }}</p>
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

    main {
        grid-area: main;
    }

    .projectsWrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        flex-basis: calc(2 * (var(--clm-width) + var(--clm-gap)));
    }

    @media (orientation: portrait) {
        ul {
           justify-content: center; 
        }
    }

    li {
        flex-basis: v(clm-width);
        margin: v(mrg-500) calc(.5 * var(--clm-gap));
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
        width: 100%;
        margin: v(mrg-200) 0;
    }

    p {
        text-align: justify;
    }
</style>
