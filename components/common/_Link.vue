<template lang="pug">
  a.link( href="#" )
    span
      slot
</template>

<style lang="stylus" scoped>
.link
  &:hover
    background-position: 30px center;
    span
      transform: translate3d(20px, 0, 0)
</style>
