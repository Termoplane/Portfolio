<template>
  <div
    class="portfolio-item"
    :class="{ reversed: item.reverse }"
    data-aos-once='true'
    data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
  >
    <div class="description">
      <h1 class="description__title">{{ item.title }}</h1>
      <p class="description__text">{{ item.description }}</p>
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
      border-left: 0px !important
      border-right: 1px solid var(--text-color)
      margin-right: 3.5rem
.portfolio-item
  margin: 2rem 0rem
  display: grid
  grid-template-columns: 1fr 1fr
  @include mobile
    margin: 1rem 0rem
    grid-template-columns: 1fr
    padding-bottom: 1rem
  .description
    @include desktop
      border-left: 1px solid var(--text-color)
      margin-left: 3.5rem
    align-self: center
    justify-self: center
    @include mobile
      padding: 1rem 0rem
    &__title
      margin: 0 0.5rem
    &__text
      margin: 1rem 1rem 0 1rem

  .media
    align-self: center
    justify-self: center
</style>
