<template lang="pug">
  .loading
    .loading-screen
</template>

<style lang="stylus" scoped>
.loading
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  font-size: 100px
  z-index: 0
  .page.is-loading &
    .loading-screen
      transform: translateY(0)
      visibility: visible
  .page.is-loaded &
    .loading-screen
      transition: transform .5s ease
      transform: translateY(-100%)
      visibility: visible
.loading-screen
  content: ''
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: $primary
  transform: translateY(100%)
  transition: transform 1s .5s ease
  visibility: hidden
  z-index: 1
</style>
