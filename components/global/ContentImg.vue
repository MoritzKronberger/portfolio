<!--  derived from: https://github.com/nuxt/content/issues/106#issuecomment-663873586 -->
<template>
  <img :src="imgSrc()" :alt="alt">
</template>

<script>
export default {
    props: {
        src: {
            required: true
        },
        alt: {
            required: true
        }
    },
    methods: {
        imgSrc() {
            return require(`~/content/${this.src}`)
        }
    }
}
</script>
