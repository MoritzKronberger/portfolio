<template>
        <div id="carousel" v-show="this.slides > 0">
            <slot :current-slide="this.currentSilde" :change-to-direction="this.changeToDirection"/>
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
            <div v-show="this.pagination" class="pagination">
                <span class="slideMarker" v-for="r, index of this.slides" :key="r" :id="index==currentSilde" @click="changeSlide(index)">
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
                        console.log(button.className)
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
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp');
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

    .navigation {
        line-height: 0;
        top: 50%;
    }

    .material-icons-sharp.navigation {
        margin-left: -.7rem;
        margin-right: -.65rem;
        color: $offBlack;
        font-size: 2rem;
    }

    #forwards {
        right: 0;
    }

    #backwards {
        left: 0;
    }

    .pagination {
        left: 0;
        bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .slideMarker {
        display: inline-block;
        width: .5rem;
        height: .5rem;
        border: solid 1.5px;
        border-radius: 50%;
        margin: 0 .25rem 0;
    }

    #true {
        background-color: $offBlack;
    }
</style>
