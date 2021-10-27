<template>
        <div id="carousel" v-show="this.slides > 0">
            <div id="carouselRelative">
                <div id="slideWrapper">
                    <slot :current-slide="this.currentSilde" :change-to-direction="this.changeToDirection"/>
                </div>
            <span v-show="this.navigation" 
                  class="material-icons-sharp navigation" 
                  id="backwards" 
                  @click="changeSlide('backwards')"
                  >navigate_before</span>
            <span v-show="this.navigation" 
                  class="material-icons-sharp navigation" 
                  id="forwards" 
                  @click="changeSlide('forwards')"
                  >navigate_next</span>
            </div>
            <div v-show="this.pagination" class="pagination">
                <div class="slideMarker" v-for="r, index of this.slides" :key="r" :id="index==currentSilde" @click="changeSlide(index)">
                </div>
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
                default: 0,
                required: true
            },
        },
        data () {
            return {
                currentSilde: 0,
                changeToDirection: ''
            }
        },
        methods: {
            changeSlide(changeTo) {
                if(changeTo === 'forwards') {
                    this.changeToDirection = 'left'
                    this.currentSilde < this.slides-1 ? this.currentSilde++ : this.currentSilde=0
                } else if (changeTo === 'backwards') {
                    this.changeToDirection = 'right'
                    this.currentSilde > 0  ? this.currentSilde-- : this.currentSilde = this.slides-1
                } else if (changeTo >= 0 && changeTo < this.slides) {
                    changeTo > this.currentSilde ? this.changeToDirection = 'left' : this.changeToDirection = 'right'
                    this.currentSilde = changeTo
                }
            }
        },
        watch: {
            // make pseudo buttons accssessible, execute after slides first update   
            slides: function (){
                this.$nextTick(() => {
                    const buttons = document.querySelectorAll('.navigation, .slideMarker')
                    for (let button of buttons) {
                        button.setAttribute('tabindex', '0')
                        button.setAttribute('role', 'button')
                        button.setAttribute('aria-label', 
                                            `carousel ${button.className === 'slideMarker' ? 
                                                        `${button.id === 'true' ? 'active' : ''} slide pagination` : 
                                                        button.id} 
                                            button`)
                        button.style.cursor = 'pointer'
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "sass:list";
    @import '@/assets/css/_shared';

    #carousel {
        width: 100%;
    }

    #carouselRelative {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    #slideWrapper {
        position: relative;
        width: v(mrg-carousel-width);
        aspect-ratio: 21 / 10;
        margin: 0 auto;
        overflow: hidden;
    }

    .navigation, .pagination {
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .navigation {
        position: absolute;
        line-height: 0;
        top: 50%;
    }

    .material-icons-sharp.navigation {
        margin-left: v(mrg-carousel-backwards-offset);
        margin-right: v(mrg-carousel-forwards-offset);
        color: $offBlack;
        font-size: v(mrg-carousel-navigation-icon-size);
    }

    #forwards {
        right: 0;
    }

    #backwards {
        left: 0;
    }

    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: v(mrg-carousel-pagination-top) 0 v(mrg-slug-frontMatter);
    }

    .slideMarker {
        width: v(mrg-carousel-pagination-diameter);
        height: v(mrg-carousel-pagination-diameter);
        border: solid v(mrg-carousel-pagination-border);
        border-radius: 50%;
        margin: 0 v(mrg-carousel-pagination-spacing);
    }

    #true {
        background-color: $offBlack;
    }
</style>
