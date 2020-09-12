<template>
  <div class="header" ref="header" @scroll="opacityToggler">
    <button class="button" type="submit" @click.prevent="page('')">
      <div class="button__text">Главная</div> 
      <div class="button__bottom"></div>
    </button>
    <button class="button" type="submit" @click.prevent="page('about')">
        <div class="button__text">Обо мне</div> 
        <div class="button__bottom"></div>
    </button>
    <button class="mobileMenuToggle">
      <img src="@/assets/icons/bars-light.svg" v-if="!darkTheme">
      <img src="@/assets/icons/bars-dark.svg" v-else>
    </button>
    <div style="flexGrow: 1;"></div>
    <div class="switcher">
      <label class="switch">
        <input type="checkbox" v-model="darkTheme">
        <span class="slider round"></span>
      </label>
      <template v-if="darkTheme" class="icon">
        <div class="icon">
          <img src="../assets/icons/moon-solid.svg">
        </div>
      </template>
      <template v-else class="icon">
        <div class="icon">
          <img src="../assets/icons/sun-solid.svg">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      darkTheme: localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" ? true : false : false
    }
  },
  methods: {
    page(page) {
      window.location.href = `/#${page}`;
    },
    opacityToggler() {
      console.log(window.pageYOffset);
      const currentScrollPosition = window.pageYOffset
      if (currentScrollPosition  > 200) {
        this.$refs.header.style.opacity = 0.97;
      } else {
        this.$refs.header.style.opacity = 1;
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.opacityToggler)
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === 'dark') {
      htmlElement.setAttribute('theme', 'dark')
      this.$store.commit('setTheme', true)
      this.darkMode = true
    } else {
      htmlElement.setAttribute('theme', 'light');
      this.$store.commit('setTheme', false)
      this.darkMode = false
    }
  },
  watch: {
    darkTheme: function(val) {
        // add/remove class to/from html tag
        let htmlElement = document.documentElement;
        this.$store.commit('setTheme', !!val)

        if (val) {
            localStorage.setItem("theme", 'dark');
            htmlElement.setAttribute('theme', 'dark');
        } else {
            localStorage.setItem("theme", 'light');
            htmlElement.setAttribute('theme', 'light');
        }
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  z-index: 100
  width: 100%
  height: 4.3rem
  background: var(--header-color)
  box-shadow: 0px 1px 9px 0px var(--shadow-color)
  position: sticky
  top: 0
  display: flex
  transition: box-shadow 800ms, background 400ms, opacity 800ms
  justify-content: space-around
  align-items: center
  .mobileMenuToggle
    background: var(--header-color)
    margin-left: 1rem
    @include desktop
      display: none
    img
      width: 1.7rem
      height: 1.7rem
  .button
    background: var(--header-color)
    @include mobile
      display: none
    font-family: 'Gayathri'
    width: 10rem
    margin-right: 2rem
    position: relative
    height: 100%
    display: flex
    flex-direction: column
    overflow: hidden  
    &:first-child
      margin-left: 1rem
    &:hover 
      background-color: var(--hover-color)
      .button__bottom
        top: -1.5rem
    .button__text
      position: relative  
      font-size: 1.5rem
    .button__bottom
      clip-path: polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0, 47% 0)
      opacity: 1
      position: absolute
      width: 100%
      height: 2.1rem
      top: -2.5rem
      background: var(--secondary-color)
      transition: top 400ms
  .switcher
    display: flex
    flex-direction: row
    align-items: center
    margin-right: 2rem
    .icon
      margin-left: 0.5rem
      width: 1.5rem
      height: 1.5rem
      user-select: none
      img
        width: 1.5rem
        height: 1.5rem
    .switch
      position: relative
      display: inline-block
      width: 4rem
      height: 2.28rem
      input
        opacity: 0
        width: 0
        height: 0
      .slider
        position: absolute
        cursor: pointer
        top: 0
        left: 0
        right: 0
        bottom: 0
        background-color: #ccc
        -webkit-transition: .4s
        transition: .4s
        &::before
          position: absolute
          content: ""
          height: 1.76rem
          width: 1.76rem
          left: 0.268rem
          bottom: 0.268rem
          background-color: white
          -webkit-transition: .4s
          transition: .4s
          border-radius: 50%
      input:checked + .slider
        background-color: var(--secondary-color)
      input:focus + .slider 
        box-shadow: 0 0 1px var(--secondary-color)
      input:checked + .slider:before
        -webkit-transform: translateX(1.76rem)
        -ms-transform: translateX(1.76rem)
        transform: translateX(1.76rem)
      .round
        border-radius: 2.28rem
</style>