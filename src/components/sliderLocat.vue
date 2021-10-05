<template>
  <div class="slider">
    <div v-for="(text, i) in this.$store.getters.SLIDER" :key="i" class="text">
      <h1 class="titleSlider">
        {{ text.title }}
      </h1>
      <p class="contentSlider">
        {{ text.text }}
      </p>
    </div>
    <div class="sliderBlock">
      <div
        v-for="(slid, i) in this.$store.getters.SLIDER.sliderCard"
        :key="i"
        class="sliderCard"
      >
        <div class="cardSlider">
          <img :src="slid.img" alt="" />
          <h3 class="titleCard">{{ slid.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ slid.name }}</p>
            <p class="grade">{{ slid.grade }}</p>
          </div>
          <p class="term">{{ slid.term }}</p>
          <p class="price">{{ slid.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.sliderBlock {
  display: flex;
  justify-content: space-between;
}
.city_grade {
  display: flex;
  justify-content: space-between;
}
</style>