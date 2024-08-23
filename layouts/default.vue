<template lang="pug">
//- .page( :class="{ 'is-loaded': dataLoadFinish }" )
.page
  Header
  .nuxt-container
    Loading
    .nuxt-body
      nuxt
    Footer
</template>

<style lang="stylus">
</style>

<script>
import Header from '~/components/common/Header.vue';
import Footer from '~/components/common/Footer.vue';
import Loading from '~/components/common/Loading.vue';


export default {
  components: {
      Header,
      Footer,
      Loading,
  },
  data: function() {
    return {
      dataLoadFinish: false
    };
  },/*
  mounted: function() {
    var page;
    page = document.querySelector('.page');
    page.classList.add('is-loading');
    return this.$nextTick(function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        _this.dataLoadFinish = true;
      }, 1500);
    });
  }*/
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }  
}
 </script>
