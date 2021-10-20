<template>
    <transition :name="this.transitionName">
        <slot class="slide"/>
    </transition>
</template>

<script>
export default {
    props: {
        transitionName: String
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/transitions';

    * {
        max-width: 100%;
        height: 100%;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>