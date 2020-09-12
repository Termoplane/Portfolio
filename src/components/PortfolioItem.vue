<template>
  <div
    class="portfolio-item"
    :class="{ reversed: item.reverse }"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <div class="description">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
    </div>
    <PortfolioMedia class="media" :photo="item.photo" :url="item.url" />
  </div>
</template>

<script>
import PortfolioMedia from "@/components/PortfolioMedia"

export default {
  name: "PortfolioItem",
  props: ["item"],
  components: {
    PortfolioMedia
  }
}
</script>

<style lang="sass" scoped>
.reversed
  .description
    @include desktop
      order: 2
.portfolio-item
  margin: 2rem 0rem
  display: grid
  grid-template-columns: 1fr 1fr
  @include mobile
    grid-template-columns: 1fr
  .description
    padding: 1rem 3rem
    align-self: center
    justify-self: center
    @include mobile
      padding: 1rem 0rem
  .media
    align-self: center
    justify-self: center
</style>
