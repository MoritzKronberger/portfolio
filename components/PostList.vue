<template>
    <main>
        <article class="projectsWrapper">
            <ul>
                <li v-for="post of posts" :key="post.slug">
                <NuxtLink :to="{ name: 'slug', params: { slug: post.slug } }">
                    <img :src="require(`../content/projects/assets/images/thumbnails/${post.slug}.png`)" :alt="post.title + ' thumbnail'">
                    <h2>{{ post.title }}</h2>
                    <p>{{ post.tags }}</p>
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
            this.posts = await this.$content('projects/markdown').where({ category: this.category }).sortBy('date', 'desc').fetch()
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
        margin: 0 calc(.5 * var(--clm-gap)) v(mrg-postList-items-bottom);
        background: pink;
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
        outline: solid 3px;
        background-color: green;
    }

    h2 {
        @include font($main, regular);
        font-weight: bold;
        top: 0;
    }

    p {
        @include font($code, regular);
        font-weight: bold;
        bottom: 0;
    }

    h2, p {
        position: absolute;
        margin: 1rem 1rem;
        filter: opacity(1);
        transition: filter $speed500;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: opacity(0);
        transition: filter $speed500;
    }

    a:hover {
        outline: none;
        transition: outline $speed500;
    }

    a:hover img{
        filter: opacity(1);
        transition: filter $speed500;
    }

    a:hover h2, a:hover p {
        filter: opacity(0);
        transition: filter $speed500;
    }
</style>
