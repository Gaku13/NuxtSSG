<template lang="pug">
section#about
  .about-container
    .data-box
      .inner
        h1 About
        .info
          p
            | text
    .contact-box
      a( href="https://" target="_blank" rel="noopener noreferrer nofollow" )
        .arrow
          IconArrow
        .content
          .en Contact
          .jp text

</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<style lang="stylus" scoped>
</style>

<script>
import IconArrow from '~/static/images/icon/arrow.svg?inline'

export default {
  components: {
    IconArrow
  }
}
</script>
