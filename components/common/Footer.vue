<template lang="pug">
footer#contact
  .footer-container
    .logo
      // Logo
    .nav
      ul
        li
          nuxt-link( v-scroll-to="service" to ) Service
        li
          nuxt-link( v-scroll-to="about" to ) About
        li
          a( href="https://" target="_blank" rel="noopener noreferrer nofollow" ) Contact
      .copyright
        | © copy

</template>

<style lang="stylus">
</style>

<script>

export default {
  components: {
  },
  data() {
    return {
      service: {
        el: '#service',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      },
      about: {
        el: '#about',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      }
    }
  }
}
</script>
