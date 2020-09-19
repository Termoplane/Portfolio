<template>
  <div class="container">
    <About />
    <Portfolio />
    <Technologies />
    <TheFooter />
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio";
import Technologies from "@/components/Technologies";
import TheFooter from "@/components/TheFooter";

export default {
  name: "TheMain",
  components: {
    About,
    Portfolio,
    Technologies,
    TheFooter
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
</style>
