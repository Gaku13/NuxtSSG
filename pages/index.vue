<template lang="pug">
main.home
  Hero
  Service
  Flow
  About
</template>

<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<script>
import Hero from '~/components/home/Hero.vue'
import Service from '~/components/home/Service.vue'
import Flow from '~/components/home/Flow.vue'
import About from '~/components/home/About.vue'

import IconArrow from '~/static/images/icon/arrow.svg?inline'

export default {
  components: {
    Hero,
    Service,
    Flow,
    About,
    IconArrow,
  }
  /*,
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
  */
};
</script>

<style lang="stylus" scoped>
.home
  /*
  padding-top 80px
  @media (max-width: 639px)
    padding-top 50px
  */
  /*
  @media (max-width: 1500px)
    padding-top 200px
  @media (max-width: 750px)
    padding-top: 100px */
  .page.is-loaded &
    .typo,
    .content
      transform translateY(0)
      opacity 1

</style>