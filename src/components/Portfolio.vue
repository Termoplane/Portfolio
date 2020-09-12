<template>
  <div class="main">
    <div
      class="block" 
      data-aos="fade-up"
      data-aos-delay="200"
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
          title: "Сайт для политического движения Общество.Будущее",
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
          title: "Переводы лекций Джордана Питерсона",
          description: "Переводы лекций канадского профессора психологии\
                        Джордана Питерсона.",
          photo: "JPPortfolio.png",
          url: "https://www.youtube.com/channel/UCVpPqZ2p-Yk_q2bNfODhLKg/videos",
          reverse: true
        }
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  .block
    margin: 0rem 2rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 10rem
    border-bottom: 2px solid var(--text-color)
    width: 50%
    h1
      font-size: 3rem
      letter-spacing: 0.23rem
      margin: 0 1rem
      @include mobile
       margin: 0
</style>
