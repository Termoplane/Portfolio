<template>
  <div class="main" id="technologies" style="scroll-margin: 4.3rem">
    <div
      class="title"
      data-aos-once='true'
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    >
      <h1>Технологии</h1>
      <p class="subtitle">Технологии, которыми я пользуюсь:</p>
    </div>
    <div class="technologies">
      <div
        v-for="technology in technologies"
        :key="technology.id"
        class="technology"
        data-aos-once='true'
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <h3 class="name">
          {{ technology.name }}
        </h3>
        <div class="photo">
          <img :src="imgUrl(technology.photo)">
        </div>
        <div class="description">
          <p>{{ technology.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Technologies",
  data() {
    return {
      technologies: [
        {
          id: 0,
          name: 'Vue.js',
          photo: 'Vue.png',
          description: 'Vue.js - фреймворк для построения одностраничных приложений - основной инструмент в моей работе.'
        },
        {
          id:1,
          name: "Node.js",
          photo: "Node.png",
          description: "Node.js - среда для выполнения JS кода, значительно расширяющая его возможности, позволяющая работать ему не только в браузере, но и на сервере."
        },
        {
          id:2,
          name: "Nuxt",
          photo: "Nuxt.png",
          description: "Nuxt - мощный фреймворк основанный на Vue, Webpack, Babel, Node.js, позволяющий строить универсальные веб-приложения и реализовывать Server-Side Rendering без лишних проблем."
        },
        {
          id:3,
          name: "Git",
          photo: "Git.png",
          description: "Командная разработка не может обойтись без системы контроля версий. Да и собственные проекты благодаря ней отслеживать намного легче. Git в связке с Github/Gitlab создают отличную среду для совместной работы в команде."
        },
        {
          id:4,
          name: "Firebase",
          photo: "Firebase.png",
          description: "Данные, непременно возникающие в процессе работы веб приложения нужно где-то хранить. И чтобы не поднимать свою базу данных и свой бекенд, есть отличные облачный решения, одним из которых является Firebase, который очень легко интегрировать в Vue/Nuxt, любые другие SPA проекты."
        },
        {
          id:5,
          name: "Django",
          photo: "Django.png",
          description: "Также я знаком с серверной разработкой и языком Python. Django - это один из самых универсальных бекенд фреймворков, придерживающийся концепции web 2.0. Прекрасный инструмент, который позволяет генерировать веб-страницы на лету."
        },
        {
          id:6,
          name: "Nginx",
          photo: "Nginx.png",
          description: "Все запросы от клиентов должен кто-то обрабатывать, и отдавать нужный контент тоже кто-то должен. Здесь на помощь приходит Nginx - тонко конфигурируемый и универсальный веб-сервер."
        },
        {
          id:7,
          name: "Sass",
          photo: "Sass.png",
          description: "Разрабатывая веб-приложение нельзя также забывать про качественную верстку и приятный глазу дизайн. Обычный CSS в какой-то момент становится слишком неудобным и громоздким, поэтому препроцессор Sass - отличная ему замена, позволяющая писать стили более эффективно и ёмко."
        }
      ]
    }
  },
  methods: {
    imgUrl(path) {
      let images = require.context('../assets/img', false, /\.png$|\.jpg$/)
      return images('./' + path)
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  padding: 3rem 0
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .title
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    padding-bottom: 2rem
    border-bottom: 2px solid var(--text-color)
    width: 50%
    h1
      letter-spacing: 0.23rem
  .technologies
    padding-top: 3rem
    width: 100%
    height: 100%
    display: grid
    grid-template-columns: repeat(4, 1fr)
    @include mobile
      grid-template-columns: 1fr 1fr
    justify-content: center
    align-items: start
    text-align: center
    .title

    .technology
      margin-top: 3rem
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .description
        padding: 1rem 2rem 0
        @include mobile
          padding: 1rem 1rem 0 1rem
      .photo
        transition: transform 1000ms
        img
          width: 6rem
          height: 5.193rem
          transform: scale(1)
        &:hover
          transform: scale(1.3)
</style>
