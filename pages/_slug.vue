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
        }
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
        flex-basis: 2*($base-width-aspect + $base-gap);
        margin: 0 $base-gap-eigth;
    }

    h1 {
        @include font($code, huge);
        margin: $base-gap-quarter 0 0 0;
    }

    .frontMatter {
        @include font($code, regular);
        list-style-type: none;
        margin: $base-gap-eigth 0;
    }

    
</style>

<style lang="scss">
    // styling content generated from .md-files
    @import '@/assets/css/_shared';

    .nuxt-content {
        h2 {
            @include font($code, big);
            margin: .5rem .75rem 0 0;
        }
    }
</style>
