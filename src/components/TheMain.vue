<template>
  <div class="container">
    <About />
    <Portfolio />
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio";

export default {
  name: "TheMain",
  components: {
    About,
    Portfolio
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="sass" scoped>
.container
  overflow: hidden
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
</style>
