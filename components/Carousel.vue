<template>
        <div id="carousel" v-show="this.slides > 0">
            <slot :current-slide="this.currentSilde" />
            <span v-show="this.navigation" class="navigation" id="forwards" @click="changeSlide('forwards')">
                next
            </span>
            <span v-show="this.navigation" class="navigation" id="backwards" @click="changeSlide('backwards')">
                prev
            </span>
            <div v-show="this.pagination" class="pagination">
                <span class="slideMarker" v-for="r, index of this.slides" :key="r" :id="index" @click="changeSlide(index)">
                    o
                </span>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Boolean,
            default: true
        },
        pagination: {
            type: Boolean,
            default: true
        },
        slides: {
            type: Number,
            default: 0
        },
    },
    data () {
        return {
            currentSilde: 0
        }
    },
    methods: {
        changeSlide(changeTo) {
            if(changeTo === 'forwards') {
                this.currentSilde < this.slides-1 ? this.currentSilde++ : this.currentSilde=0
            } else if (changeTo === 'backwards') {
                this.currentSilde > 0  ? this.currentSilde-- : this.currentSilde = this.slides-1
            } else if (changeTo >= 0 && changeTo < this.slides) {
                this.currentSilde = changeTo
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/_shared';

    #carousel {
        position: relative;
        width: 100%;
        height: 20rem;
        overflow: hidden;
    }

    .navigation, .pagination {
        position: absolute;
    }

    #forwards {
        top: 50%;
        right: 1rem;
    }

    #backwards {
        top: 50%;
        left: 1rem;
    }

    .pagination {
        left: 50%;
        bottom: 1rem;
    }
</style>
