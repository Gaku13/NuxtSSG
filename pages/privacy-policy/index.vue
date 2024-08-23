<template lang="pug">
  main.policy
    .page-container
      h1.typo Privacy Policy
      h2 プライバシーポリシー
      p
        | test text
      p
        | lorem ipsum
      ol
        li
          b lorem ipsum
          | lorem ipsum
</template>
<i18n>
  {
    "ja": {},
    "en": {}
  }
</i18n>

<style lang="stylus" scoped>
main.policy
  padding-top: 180px
  @media (max-width: 1500px)
    padding-top: 150px
  @media (max-width: 750px)
    padding-top: 100px

.page-container
  max-width: 750px
  margin-left: auto
  margin-right: auto
  padding-left: 25px
  padding-right: 25px
  transition: transform .5s .5s ease, opacity .5s .5s ease
  transform: translateY(20px)
  opacity: 0
  .page.is-loaded &
    transform: translateY(0)
    opacity: 1
  div
    line-height: 22px
h1
  color: $primary
  margin-top: 0
  margin-bottom: 80px
h2
  margin-bottom: 60px
  @media (max-width: 750px)
    font-size: 24px
p
  line-height: 22px
  margin-bottom: 25px
ol
  padding: 0
  margin: 0 0 40px 20px
  > li
    line-height: 22px
    margin-bottom: 25px
    b
      display: block
      margin-bottom: 10px
    ul
      list-style: disc
      padding: 0
      margin: 20px 0 40px 20px
      li
        margin-bottom: 10px
</style>

<script>
// import Link from '~/components/common/Link.vue';

export default {
  components: { 
    // Link
  }
};
</script>
