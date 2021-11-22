<template>
  <div id="carousel" v-show="this.slides > 0">
    <div id="carouselRelative">
      <div id="slideWrapper">
        <slot
          :current-slide="this.currentSilde"
          :change-to-direction="this.changeToDirection"
        />
      </div>
      <span
        class="material-icons-sharp navigation"
        id="backwards"
        @click="changeSlide('backwards')"
        >navigate_before</span
      >
      <span
        class="material-icons-sharp navigation"
        id="forwards"
        @click="changeSlide('forwards')"
        >navigate_next</span
      >
    </div>
    <div class="pagination">
      <span id="active">{{ this.currentSilde + 1 }}</span
      >/{{ this.slides }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  data() {
    return {
      currentSilde: 0,
      changeToDirection: '',
    }
  },
  methods: {
    changeSlide(changeTo) {
      if (changeTo === 'forwards') {
        this.changeToDirection = 'right'
        this.currentSilde < this.slides - 1
          ? this.currentSilde++
          : (this.currentSilde = 0)
      } else if (changeTo === 'backwards') {
        this.changeToDirection = 'left'
        this.currentSilde > 0
          ? this.currentSilde--
          : (this.currentSilde = this.slides - 1)
      }
    },
  },
  watch: {
    // make pseudo buttons accessible, execute after slides first update
    slides: function() {
      this.$nextTick(() => {
        const buttons = document.querySelectorAll('.navigation')
        for (let button of buttons) {
          button.setAttribute('tabindex', '0')
          button.setAttribute('role', 'button')
          button.setAttribute('aria-label', `carousel ${button.id} button`)
          button.onkeydown = e => {
            e.keyCode === 13 ? this.changeSlide(button.id) : ''
          }
          button.style.cursor = 'pointer'
        }
      })
    },
  },
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

.navigation {
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
  color: $offBlack-inactive;
  @include font($code, regular);
  text-align: center;
  margin: v(mrg-carousel-pagination-top) 0 v(mrg-slug-frontMatter);
}

.pagination #active {
  color: $offBlack;
}

#true {
  background-color: $offBlack;
}
</style>
