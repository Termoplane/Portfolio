<template>
  <div class="footer">
    <div class="sm footer__block">
      <h4>Контакты</h4>
      <div class="links">
        <a href="https://github.com/Termoplane">
          <img src="@/assets/icons/github-brands.svg" v-if="!darkTheme" />
          <img src="@/assets/icons/github-light.svg" v-else />
        </a>
        <a href="https://vk.com/termoplan">
          <img src="@/assets/icons/vk-brands.svg" v-if="!darkTheme" />
          <img src="@/assets/icons/vk-light.svg" v-else />
        </a>
        <a href="https://t.me/termoplan">
          <img src="@/assets/icons/telegram-plane-brands.svg" v-if="!darkTheme" />
          <img src="@/assets/icons/telegram-light.svg" v-else />
        </a>
      </div>
    </div>
    <div class="about footer__block">
      Created by alex223666@gmail.com <br> © 2020
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    darkTheme() {
      return this.$store.getters['darkTheme']
    }
  }
}
</script>

<style lang="sass" scoped>
.footer
  display: grid
  grid-template-columns: 1fr 1fr
  background-color: var(--header-color)
  align-items: center
  justify-content: center
  width: 100vw
  padding: 0.5rem 0
  &__block
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .about
    text-align: center
    padding: 0rem 0.5rem
  .sm
    .links
      padding-top: 1rem
      a
        margin: 0 0.3rem
        img
          width: 1.3rem
          height: 1.3rem
    h4
      font-size: 1.3rem
</style>
