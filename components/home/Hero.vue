<template lang="pug">
section#hero
  .bg-container
    | text
    // .hero-video
      video( poster="/double-o/images/misc/bg-slide1.jpg" playsinline autoplay loop muted )
        source( type="video/mp4" src="~static/video/bg.mp4" )
    // agile( :options="options" ref="carousel" @after-change="e => currentSlide = e.currentSlide" )
      .bg.bg1
        .typo
          h1
            | text
      .bg.bg2
        .inner( :class="{ 'active': this.currentSlide === 1 }" )
          .typo
            .tagline
              | text
      .bg.bg3
        .inner( :class="{ 'active': this.currentSlide === 2 }" )
          .typo
            .tagline
              | text
    // .button
      nuxt-link( v-scroll-to="'#contact'" to )
        .icon
          IconArrow
        .text
          | text

  
  // .card-list
    .card( @mouseover="$refs.carousel.goTo(1)" :class="{ 'active': this.currentSlide === 1 }" )
      .content
        img( src="/double-o/images/icon/umbrella.svg" )
        .text
          | text
    .card( @mouseover="$refs.carousel.goTo(2)" :class="{ 'active': this.currentSlide === 2 }")
      .content
        img( src="/double-o/images/icon/timer.svg" )
        .text
          | text

</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>
<script>
import IconArrow from '~/static/images/icon/arrow.svg?inline'

export default {
  components: {
    IconArrow
  },
  data () {
    return {
      currentSlide: 0,
      options: {
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 7500,
        navButtons: false,
        // pauseOnHover: false,
        dots: false
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
    // background-image url('/images/misc/bg-slide1.jpg')
</style>
