<template>
    <div class="bodyDiv">
        <Header/>
        <div class="projectsWrapper">
            <Nuxt />
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .projectsWrapper {
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>