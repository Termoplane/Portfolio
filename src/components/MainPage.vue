<template>
  <div class="main">
    <TheMain id="about" />
    <TheBlog />
  </div>
</template>

<script>
import TheMain from '@/components/TheMain.vue'
import TheBlog from '@/components/TheBlog.vue'

export default {
  name: "MainPage",
  components: {
    TheMain,
    TheBlog
  }
}
</script>

<style lang="sass" scoped>
.main
  display: grid
  grid-template-columns: 1fr
  @include mobile
    grid-template-columns: 1fr
</style>