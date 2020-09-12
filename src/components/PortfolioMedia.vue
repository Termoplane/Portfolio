<template>
  <a
    class="card"
    :href="url"
    target="_blank"
    ref="card"
    @mousemove="move"
    @mouseleave="leave"
    @mouseover="over"
  >
    <div class="reflection" ref="refl"></div>
    <img :src="imgUrl(photo)" />
  </a>
</template>

<script>
export default {
  name: "PortfolioMedia",
  props: ["photo", "url"],
  mounted() {},
  data: () => ({
    debounce: null,
    photo: "@/assets/img/ОБПортфолио.png"
  }),
  methods: {
    imgUrl(path) {
      let images = require.context('../assets/img', false, /\.png$|\.jpg$/)
      return images('./' + path)
    },
    over() {
      const refl = this.$refs.refl;
      refl.style.opacity = 1;
    },
    leave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },

    move() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(1.1) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale: (val, inMin, inMax, outMin, outMax) =>
      outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
  }
}
</script>

<style lang="sass" scoped>
.card
  background-color: #ccc
  width: 30rem
  height: 14.52rem
  @include mobile
    width: 20rem
    height: 9.68rem
  transition: all .1s ease
  border-radius: 3px
  position: relative
  z-index: 1
  box-shadow: 0px 0px 21px -8px var(--text-color)
  overflow: hidden
  cursor: pointer
  &:hover
    transform: scale(1.1)
    z-index: 2
    box-shadow: 0 10px 20px var(--text-color)
    img
      filter: grayscale(0)
  .reflection
    position: absolute
    width: 100%
    height: 100%
    z-index: 2
    left: 0
    top: 0
    transition: all .1s ease
    opacity: 0
    mix-blend-mode: soft-light
  img
    width: 100%
    height: 100%
    object-fit: cover
    filter: grayscale(.65)
    transition: all .3s ease
</style>
