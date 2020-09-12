<template>
  <div class="main">
    <div 
      class="card" 
      data-aos="fade-right"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div class="front">
        <img src="@/assets/img/my_photo.jpg">
      </div>
      <div class="back">
        <div class="back-content">
          <h2>Termoplan</h2>
          <span>Никольский Алексей</span>
          <div class="sm">
            <a href="https://github.com/Termoplane">
              <img src="@/assets/icons/github-brands.svg" v-if="!darkTheme">
              <img src="@/assets/icons/github-light.svg" v-else>
            </a>
            <a href="https://vk.com/termoplan">
              <img src="@/assets/icons/vk-brands.svg" v-if="!darkTheme">
              <img src="@/assets/icons/vk-light.svg" v-else>
            </a>
            <a href="https://t.me/termoplan">
              <img src="@/assets/icons/telegram-plane-brands.svg" v-if="!darkTheme">
              <img src="@/assets/icons/telegram-light.svg" v-else>
            </a>
            <a href="https://www.youtube.com/channel/UCVpPqZ2p-Yk_q2bNfODhLKg">
              <img src="@/assets/icons/youtube-brands.svg" v-if="!darkTheme">
              <img src="@/assets/icons/youtube-light.svg" v-else>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <img src="@/assets/icons/arrow-light.svg" v-if="!darkTheme">
      <img src="@/assets/icons/arrow-dark.svg" v-else>
      <div 
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1>Привет!</h1>
        <br>
        <p>
          Меня зовут Лёша, я веб-разработчик, самоучка. Пишу код, учусь, работаю, живу.
          Увлекаюсь многими интересными штуками: играю на гитаре, перевожу лекции.
        </p>
        <br>
        <p>
          Это мой сайт портфолио, поэтому если ты рекрутер - можешь посмотреть мои работы, они выложены на гитхабе.
          Его можно найти под фото, как и все остальные мои контакты.
        </p>
        <br>
        <p>
          Еще про меня можно будет узнать дальше, поэтому не стесняйся и листай.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    darkTheme() {
      return this.$store.getters['darkTheme']
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  padding: 2rem 0
  width: 100%
  height: 100%
  display: grid
  grid-template-columns: 1fr 1fr
  border-bottom: 1px solid var(--text-color)
  @include mobile
    grid-template-columns: 1fr
  .about
    margin-right: 4rem
    text-align: center
    justify-self: center
    align-self: center
    @include mobile
      margin: 0 1.5rem
      order: -1
    img
      position: absolute
      width: 20rem
      height: 20rem
      top: 2rem
      left: 28rem
      @include mobile
        display: none
      
  .card
    justify-self: center
    @include mobile
      margin-top: 2rem
    align-self: center
    position: relative
    width: 18.9rem
    height: 27rem
    cursor: pointer
    &:hover
      .front
        transform: perspective(600px) rotateY(-180deg)
      .back
        transform: perspective(600px) rotateY(0deg)
    .front, .back
      border-radius: 1rem
      width: 100%
      height: 100%
      max-width: 100%
      max-height: 100%
      overflow: hidden
      backface-visibility: hidden
      position: absolute
      transition: transform .6s linear
      box-shadow: 9px -1px 65px -11px var(--shadow-color)
    .front
      transform: perspective(600px) rotateY(0deg)
      img
        height: 100%
    .back
      background: var(--header-color)
      transform: perspective(600px) rotateY(180deg)
      .back-content
        position: relative
        top: 35%
        color: #2c3e50
        text-align: center
        .sm
          margin: 20px 0
          a
            display: inline-flex
            width: 2.5rem
            height: 2.5rem
            justify-content: center
            align-items: center
            color: var(--text-color)
            font-size: 18px
            transition: 0.4s
            border-radius: 50%
            &:hover
              background: #BA00CE
              color: white
            img
              width: 2rem
              height: 2rem
              fill: var(--text-color)
</style>>
