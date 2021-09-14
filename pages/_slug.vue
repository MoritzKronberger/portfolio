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
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    article {
        flex-basis: 2*($base-width-aspect + $base-gap);
        margin: 0 $base-gap-half/2;
    }

    h1 {
        @include font($code, huge);
        margin: $base-gap-half/2 0 0 0;
    }

    .frontMatter {
        @include font($code, regular);
        list-style-type: none;
        margin: $base-gap-half/4 0;
    }
</style>