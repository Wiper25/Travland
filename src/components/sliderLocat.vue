<template>
  <div class="slider">
    <div class="text">
      <h1 class="titleSlider">
        {{ this.$store.getters.SLIDER.title }}
      </h1>
      <p class="contentSlider">
        {{ this.$store.getters.SLIDER.text }}
      </p>
    </div>

    <div class="sliderBlock">
      <div :style="styleSlider.transform" class="block">
      <div class="sliderCard">
        <div class="cardSlider">
          <img :src="imgSlider_1" alt="" />
          <h3 class="titleCard">{{ this.$store.getters.SLIDER.newYork.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ this.$store.getters.SLIDER.newYork.name }}</p>
            <p class="grade">{{ this.$store.getters.SLIDER.newYork.grade }}</p>
          </div>
          <p class="term">{{ this.$store.getters.SLIDER.newYork.term }}</p>
          <p class="price">{{ this.$store.getters.SLIDER.newYork.price }}</p>
        </div>
      </div>
      <div class="sliderCard">
        <div class="cardSlider">
          <img :src="imgSlider_2" alt="" />
          <h3 class="titleCard">{{ this.$store.getters.SLIDER.china.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ this.$store.getters.SLIDER.china.name }}</p>
            <p class="grade">{{ this.$store.getters.SLIDER.china.grade }}</p>
          </div>
          <p class="term">{{ this.$store.getters.SLIDER.china.term }}</p>
          <p class="price">{{ this.$store.getters.SLIDER.china.price }}</p>
        </div>
      </div>
      <div class="sliderCard">
        <div class="cardSlider">
          <img :src="imgSlider_3" alt="" />
          <h3 class="titleCard">{{ this.$store.getters.SLIDER.iran.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ this.$store.getters.SLIDER.iran.name }}</p>
            <p class="grade">{{ this.$store.getters.SLIDER.iran.grade }}</p>
          </div>
          <p class="term">{{ this.$store.getters.SLIDER.iran.term }}</p>
          <p class="price">{{ this.$store.getters.SLIDER.iran.price }}</p>
        </div>
      </div>
      <div class="sliderCard">
        <div class="cardSlider">
          <img :src="imgSlider_4" alt="" />
          <h3 class="titleCard">{{ this.$store.getters.SLIDER.bangladeshork.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ this.$store.getters.SLIDER.bangladeshork.name }}</p>
            <p class="grade">{{ this.$store.getters.SLIDER.bangladeshork.grade }}</p>
          </div>
          <p class="term">{{ this.$store.getters.SLIDER.bangladeshork.term }}</p>
          <p class="price">{{ this.$store.getters.SLIDER.bangladeshork.price }}</p>
        </div>
      </div>
      <div class="sliderCard">
        <div class="cardSlider">
          <img :src="imgSlider_5" alt="" />
          <h3 class="titleCard">{{ this.$store.getters.SLIDER.japan.title }}</h3>
          <div class="city_grade">
            <p class="city">{{ this.$store.getters.SLIDER.japan.name }}</p>
            <p class="grade">{{ this.$store.getters.SLIDER.japan.grade }}</p>
          </div>
          <p class="term">{{ this.$store.getters.SLIDER.japan.term }}</p>
          <p class="price">{{ this.$store.getters.SLIDER.japan.price }}</p>
        </div>
      </div>
    </div>
    </div>
    <div class="sliderBtn">
      <div @click="leftSlid" class="left">ᐊ</div>
      <div @click="rightSlid" class="right">ᐅ</div>
    </div>
  </div>
</template>

<script>
import imgSlider_1 from '../assets/newYork.png'
import imgSlider_2 from '../assets/china.png'
import imgSlider_3 from '../assets/iran.png'
import imgSlider_4 from '../assets/bangladesh.png'
import imgSlider_5 from '../assets/japon.png'

export default {
  data() {
    return {
      count: 1,
      imgSlider_1,
      imgSlider_2,
      imgSlider_3,
      imgSlider_4,
      imgSlider_5,
      styleSlider: {
        transform: 'transform:translate(0px, 10px)',
      },
    };
  },
  methods: {
    leftSlid(){
      this.count = this.count + 50
      if(this.count >= 100){
        this.count = 100
      }
      this.styleSlider.transform = `transform:translate(${this.count}px, 10px)`
    },
    rightSlid(){
      this.count = this.count + 50
      if(this.count >= 100){
        this.count = 100
      }
      this.styleSlider.transform = `transform:translate(${'-' + this.count}px, 10px)`
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white;
}
.sliderBlock {
    overflow: hidden;
    height: 385px;
}
.block {
  display: flex;
  justify-content: space-around;
  transition: all 1s;
}
.sliderCard {
  border: 1px solid rgba(255, 255, 255, 0.438);
  margin:5px;
  border-radius:10px;
}
.sliderCard:hover {
    box-shadow: 0px 6px 35px #8a898969;

}
.city_grade {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h3,
h1 {
  font-family: "Gelasio", serif;

}
h3 {
  font-family: Gelasio;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  margin: 10px;
}
p {
    margin: 10px;
}
.text {
  text-align: center;
  width: 45%;
  margin: 0 auto;
  margin-top: 100px;
}
.city {
  font-size: 20px;
}
.term {
  font-size: 16px;
}
.gread {
  font-size: 18px;
}
.price {
  font-weight: 500;
  font-size: 18px;
}
.sliderBtn {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 100px;
  cursor: pointer;
}
.left,
.right {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.left:hover{
  background-color:rgba(255, 255, 255, 0.151)
}
.right:hover {
  background-color:rgba(255, 255, 255, 0.151);
}
</style>