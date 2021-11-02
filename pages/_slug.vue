<template>
    <main>
        <article>
            <h1>{{ post.title }}</h1>
            <ul class="frontMatter">
                <li>Date: {{post.date | longMonth_numericYear}}</li>
                <li v-if="post.tech">Tech: {{post.tech}}</li>
                <li v-if="post.team">
                    Team: 
                    <span v-for="(link, member, index) of post.team" :key="member">
                        <span v-if="index !== 0">, </span>
                        <a :href="link">{{member}}</a>
                    </span>
                </li>
                <li v-if="post.role && post.team">Role: {{post.role}}</li>
                <li v-if="post.repo">
                    Code: 
                    <span v-for="(link, name, index) of post.repo" :key="name">
                        <span v-if="index !== 0">, </span>
                        <a :href="link">{{name}}</a>
                    </span>
                </li>
            </ul>
            <Carousel :path="post.slug" :slides="this.carouselResources.length" v-slot="{ currentSlide, changeToDirection }">
                <carousel-slide v-for="(img, index) of carouselResources" :key="img" :transition-name="transitions[changeToDirection]" :slide-index="index">
                    <img v-show="index === currentSlide" :src="img" :alt="post.carouselAlt ? post.carouselAlt[index] : post.slug">
                </carousel-slide>
            </Carousel>
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
        data (){
            return {
                testData: '',
                carouselResources: [],
                transitions: {right: 'slideRight', left: 'slideLeft'}
            }
        },
        mounted() {
            this.loadResources(require.context(`~/content/projects/assets/images`, true, /carousel/))
        },
        methods: {
            async loadResources(r) {
                for (const key of r.keys()) {
                    const splitPath = key.split('/')
                    const path = splitPath[splitPath.indexOf('carousel')-1]
                    if (path === this.post.slug){
                        this.carouselResources.push(r(key))
                    }
                }
            }
        },
        head() {
            return {
                title: this.post.title,
                meta: [
                    { hid: `desc-${this.post.slug}`, name: 'description', content: this.post.meta_desc ? this.post.meta_desc : `${this.post.title}: A ${this.post.category} project` }
                ]
            }
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
        flex-basis: v(clm-article-width);
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

    a {
        color: $offBlack;
        text-decoration: underline 1px;
        text-underline-offset: 2px;
    }
</style>

<style lang="scss">
    // style content generated from .md-files:
    @import '@/assets/css/_shared';

    .nuxt-content {
        h2 {
            @include font($code, big);
            margin: 1.2rem 0 .6rem;
        }

        img {
            display: block;
            max-width: 100%;
            margin: 0 auto;
        }

        p + img, img + p {
            margin-top: v(mrg-global-top);
        }

        a {
            color: $offBlack;
            text-decoration: underline 1px;
            text-underline-offset: 2px;
        }
    }

    .nuxt-content:first-child {
        margin-top: 0;
    }
</style>
