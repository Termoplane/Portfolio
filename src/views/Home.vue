<template>
  <div class="main">
    <TheHeader class="header" />
    <MainPage />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import MainPage from '@/components/MainPage'
export default {
  name: "Home",
  components: {
    TheHeader, 
    MainPage
  },
  mounted() {
    if (this.$route.hash) {
      const id = this.$route.hash.slice(1)
      if (id) {
        document.getElementById(id).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
