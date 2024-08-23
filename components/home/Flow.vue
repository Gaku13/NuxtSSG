<template lang="pug">
section#flow
  .container
    h1
      | Flow
      span text
    ol.flow-container
      li.flow-card
        .content
          .inner
            button
              IconArrow
            .title test
            .text
              a( href="https://" target="_blank" rel="noopener noreferrer nofollow" ) test link
              | text
      li.flow-card( v-parallax="0.1" )
        .content
          .inner
            .title Flow 1
            .text
              | Flow Text 1
      li.flow-card
        .content
          .inner
            .title Flow 2
            .text
              | Flow Text 2
      li.flow-card( v-parallax="0.1" )
        .content
          .inner
            .title Flow3
            .text
              | Flow Text 3

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
    IconArrow,
  }
}
</script>
