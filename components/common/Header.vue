<template lang="pug">
headroom
  header
    nuxt-link.logo( to="/" )
      // Logo
    nav
      a.nav-button( href="#" @click="click" )
        | menu
      .nav-container
        a.nav-close( href="#" @click="close" )
          X
        ul
          li
            nuxt-link( v-scroll-to="service" to ) Service
          li
            nuxt-link( v-scroll-to="about" to ) About
          li
            nuxt-link( v-scroll-to="contact" to ) Contact

</template>

<script>
// import Logo from '~/static/images/logo.svg?inline'
import X from '~/static/images/icon/x.svg?inline'

import { headroom } from 'vue-headroom'

export default {
  components: {
    // Logo,
    X,
    headroom,
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
      },
      contact: {
        el: '#contact',
        onStart: function(el) {
          var nav;
          nav = document.querySelector('.nav-container');
          return nav.classList.remove('show');
        }
      }
    };
  },
  methods: {
    click: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.add('show');
    },
    close: function() {
      var nav;
      nav = document.querySelector('.nav-container');
      return nav.classList.remove('show');
    }
  }
}
</script>

<style lang="stylus">
  header
    position relative
    display flex
    align-items center
    justify-content space-between
    height 80px
    padding 0 40px
    background $white
    transition transform .75s .25s ease, opacity .75s .25s ease, visibility .75s .25s
    z-index $zindex-header
</style>

