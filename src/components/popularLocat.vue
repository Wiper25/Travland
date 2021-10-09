<template>
  <div class="popular">
    <!-- <div v-for="(item, i) in this.$store.getters.POPULAR[0]" :key="i">
      {{ item }}
    </div> -->
    <h1>{{ this.$store.getters.POPULAR.title }}</h1>
    <p>{{ this.$store.getters.POPULAR.text }}</p>
    <div class="block">
      <div class="cardBlock">
        <div class="card">
          <div class="itemCard">
            <img :src="imgPopular_1" />
            <h3 class="titleCard">{{ this.$store.getters.POPULAR.turkey.title }}</h3>
            <div class="contentCard">{{ this.$store.getters.POPULAR.turkey.text }}</div>
          </div>
        </div>
        <div class="card">
          <div class="itemCard">
            <img :src="imgPopular_2" />
            <h3 class="titleCard">{{ this.$store.getters.POPULAR.malaysia.title }}</h3>
            <div class="contentCard">{{ this.$store.getters.POPULAR.malaysia.text }}</div>
          </div>
        </div>
        <div class="card">
          <div class="itemCard">
            <img :src="imgPopular_3" />
            <h3 class="titleCard">{{ this.$store.getters.POPULAR.korea.title }}</h3>
            <div class="contentCard">{{ this.$store.getters.POPULAR.korea.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgPopular_1 from "../assets/imgTurkey.png";
import imgPopular_2 from "../assets/imgKuala.png";
import imgPopular_3 from "../assets/imgKorea.png";
export default {
  data() {
    return {
      imgPopular_1,
      imgPopular_2,
      imgPopular_3,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white;
}
.popular h1 {
  text-align: center;
}
.popular p {
  margin: 0 auto;
  text-align: center;
  width: 50%;
}
.cardBlock {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    width: 95%;
}
.card {
  width: 360px;
  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.438);
  box-sizing: border-box;
  border-radius: 10px;
  
}
.card:hover {
  box-shadow: 0px 6px 35px #8a898969;
  cursor: pointer;
}
.block {
  display: flex;
  justify-content: space-around;
}
h3,
h1 {
  font-family: "Gelasio", serif;
}
.itemCard {
  text-align: center;
}
</style>