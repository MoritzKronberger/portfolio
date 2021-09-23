<template>
    <main>
        <article>
            <h1>{{ post.title }}</h1>
            <ul class="frontMatter">
                <li>Date: {{post.date}}</li>
                <li>Team: {{post.team}}</li>
            </ul>
            <nuxt-content :document="post" />
        </article>
    </main>
</template>

<script>
    export default {
        async asyncData({ $content, params }){
            const post = await $content('projects/markdown', params.slug).fetch();
            return { post }
        },
        head() {
            return {
                title: this.post.title,
            meta: [
                { hid: `desc-${this.post.slug}`, name: 'description', content: this.post.meta_desc ? this.post.meta_desc : `${this.post.title}: One of my ${this.post.category} projects` }
            ]
            }
        }, 
        transition: { name: 'fade', mode: "out-in" }
    } 
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_shared';

    main {
        grid-area: main;

        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    article {
        flex-basis: calc(2 * (var(--clm-width) + var(--clm-gap)));
        margin: 0 v(mrg-global-sides);
    }

    h1 {
        @include font($code, huge);
        margin: v(mrg-slug-h1-top) 0 0;
    }

    .frontMatter {
        @include font($code, regular);
        list-style-type: none;
        margin: v(mrg-slug-frontMatter) 0;
    }
</style>

<style lang="scss">
    // styling content generated from .md-files
    @import '@/assets/css/_shared';

    .nuxt-content {
        h2 {
            @include font($code, big);
            margin: 1.2rem 0 .6rem;
        }
        h2:first-of-type {
            margin-top: 0;
        }
    }
</style>
