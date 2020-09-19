<template>
  <div class="main" id="portfolio" style="scroll-margin: 4.3rem">
    <div
      class="block" 
      data-aos-once='true'
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="ease-in-out"
    >
      <h1>Портфолио</h1>
      <p>Здесь мои проекты и просто то чем я горжусь.</p>
    </div>
    <PortfolioItem class="item" v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import PortfolioItem from "@/components/PortfolioItem";
export default {
  name: "Portfolio",
  components: {
    PortfolioItem
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Сайт для политического движения Общество Будущее",
          description: "Сайт для политического движения Общество.Будущее.\
                        Разрабатывался на nuxt, vue, sass, fiirebase.\
                        Делал админку для добавления новостей, секцию новостей, связанную с firebase,\
                        мобильную верстку, навигацию по конституции.\
                        Посмотреть можно на ob.community",
          photo: "ОБПортфолио.png",
          url: "https://ob.community"
        },
        {
          id: 1,
          title: "Сайт-блог с переводами лекций Джордана Питерсона",
          description: "Блог посвященный переводам видео и статей канадского профессора\
                        психологии Джордана Питерсона. Бэк написан на Django,\
                        используется БД MySQL, страницы сверстаны на Bootstrap.",
          photo: "JPSite.jpg",
          url: "https://github.com/Termoplane/RuPeterson",
          reverse: true
        },
        {
          id: 2,
          title: "Переводы лекций Джордана Питерсона",
          description: "Канал на ютубе, где я переводил и озвучивал лекции кандаского профессора психологии\
                        Джордана Питерсона.",
          photo: "JPPortfolio.png",
          url: "https://www.youtube.com/channel/UCVpPqZ2p-Yk_q2bNfODhLKg/videos"
        },
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.main
  background: var(--header-color)
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  border-bottom: 1px solid var(--text-color)
  .block
    margin: 0rem 2rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 10rem
    border-bottom: 2px solid var(--text-color)
    width: 50%
    p
      margin-top: 0.5rem
    h1
      font-size: 3rem
      letter-spacing: 0.23rem
      margin: 0 1rem
      @include mobile
       margin: 0
</style>
