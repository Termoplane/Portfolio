<template>
  <div class="header" ref="header" @scroll="opacityToggler">
    <router-link class="button" :to="{ path: '/', hash: '#about' }" type="submit" @click.native="page('about')">
      <div class="button__text">Обо мне</div> 
      <div class="button__bottom"></div>
    </router-link>
    <router-link class="button" :to="{ path: '/', hash: '#portfolio' }"  type="submit" @click.native="page('portfolio')">
        <div class="button__text">Портфолио</div> 
        <div class="button__bottom"></div>
    </router-link>
    <router-link class="button" :to="{ path: '/', hash: '#technologies' }" type="submit" @click.native="page('technologies')">
        <div class="button__text">Технологии</div> 
        <div class="button__bottom"></div>
    </router-link>
    <button class="mobileMenuToggle">
      <img src="@/assets/icons/bars-light.svg" v-if="!darkTheme" @click.prevent="menuTrigger">
      <img src="@/assets/icons/bars-dark.svg" v-else @click.prevent="menuTrigger">
    </button>
    <div class="mobileMenu-container">
      <div :class="overlay" @click.prevent="hideMenu"></div>
      <div :class="mobileMenu">
        <img src="@/assets/icons/times-light.svg" v-if="!darkTheme" @click.prevent="hideMenu">
        <img src="@/assets/icons/times-dark.svg" v-else @click.prevent="hideMenu">
        <router-link exact-active-class="mobile-active" :to="{ path: '/', hash: '#about' }"  class="mobile-button" @click.native="mobilePage('about')">
          <h1 class="mobile-button__text">Обо мне</h1>
          <div class="mobile-button__left"></div>
        </router-link>
        <router-link exact-active-class="mobile-active" :to="{ path: '/', hash: '#portfolio' }"  class="mobile-button" @click.native="mobilePage('portfolio')">
          <h1 class="mobile-button__text">Портфолио</h1>
          <div class="mobile-button__left"></div>
        </router-link>
        <router-link exact-active-class="mobile-active" :to="{ path: '/', hash: '#technologies' }"  class="mobile-button" @click.native="mobilePage('technologies')">
          <h1 class="mobile-button__text">Технологии</h1>
          <div class="mobile-button__left"></div>
        </router-link>
      </div>
    </div>
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
      mobileMenu: ['mobileMenu'],
      overlay: ['overlay', 'hide'],
      darkTheme: localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark" ? true : false : false
    }
  },
  methods: {
    mobilePage(page){
      const element = document.getElementById(page)
      element.scrollIntoView({
        behavior: "smooth"
      });
      this.mobileMenu.pop()
      this.overlay.push('hide')
      document.body.style = "overflow: visible"
    },
    menuTrigger() {
      this.mobileMenu.push('slide-in')
      this.overlay.pop()
      document.body.style = "overflow: hidden"
    },
    hideMenu() {
      this.mobileMenu.pop()
      this.overlay.push('hide')
      document.body.style = "overflow: visible"
    },
    page(page) {
      const element = document.getElementById(page)
      element.scrollIntoView({
        behavior: "smooth"
      })
    },
    opacityToggler() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 200) {
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
  beforeDestroy() {
    window.removeEventListener('scroll', this.opacityToggler)
  },
  watch: {
    darkTheme: function(val) {
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
  box-shadow: 0px 1px 9px -2px var(--opposite-color)
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

  .mobileMenu-container
    .hide
      display: none
    .overlay
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background:
        color: rgba(black, 0.5)
      z-index: 50
    .mobileMenu
      opacity: 1 !important
      background:
        color: var(--primary-color)
      width: 50vw
      height: 100vh
      position: fixed
      top: 0
      left: 0
      transform: translateX(-100vw)
      transition: all 1000ms ease
      z-index: 100
      .mobile-button
        margin-bottom: 2rem
        font-family: 'Noto Serif', serif
        width: 100%
        position: relative
        display: flex
        height: 2rem
        justify-content: center
        align-items: center
        overflow: hidden
        transition: background 800ms, height 800ms
        &__text
          font-size: 1.5rem
        &__left
          position: absolute
          clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)
          background: var(--secondary-color)
          left: -2rem
          height: 2rem
          width: 2rem
          transition: left 800ms
      .mobile-active
        display: flex
        justify-content: center
        align-items: center !important
        height: 4rem
        background: var(--header-color)
        .mobile-button__left
          position: absolute
          clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)
          background: var(--secondary-color)
          left: -1.3rem
          height: 4rem
          width: 2rem
      img
        margin-left: 1rem
        margin-top: 1rem
        margin-bottom: 2rem
        height: 2rem
        width: 2rem
      @include desktop
        display: none
    .slide-in
      transform: translateX(0)

  .button
    background: var(--header-color)
    @include mobile
      display: none
    font-family: 'Noto Serif', serif
    width: 10rem
    margin-right: 0.2rem
    position: relative
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    overflow: hidden
    transition: background-color 400ms, color 400ms
    &:first-child
      margin-left: 1rem
    &:hover 
      background-color: var(--hover-color)
      .button__bottom
        top: -1.5rem
    .button__text
      position: relative  
      font-size: 1.2rem
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
