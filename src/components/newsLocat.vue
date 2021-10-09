<template>
  <div class="newsBlog">
    <div class="newsText">
      <h1 class="titleNews">{{ this.$store.getters.NEWS.title }}</h1>
      <p class="contentNews">{{ this.$store.getters.NEWS.context }}</p>
    </div>
    <div class="blockNews">
      <div class="headBlog">
        <img :src="imgHead" alt="" />
        <h3 class="titleBlog">{{ this.$store.getters.NEWS.homeCard.title }}</h3>
        <p class="contentBlog">{{ this.$store.getters.NEWS.homeCard.text }}</p>
      </div>
      <div class="blogs">
        <div class="blog">
          <img :src="imgCard_1" alt="" />
          <h3 class="title">
            {{ this.$store.getters.NEWS.newsCard.hiroshimaPeace.title }}
          </h3>
          <p class="content">
            {{ this.$store.getters.NEWS.newsCard.hiroshimaPeace.text }}
          </p>
        </div>
        <div class="blog">
          <img :src="imgCard_2" alt="" />
          <h3 class="title">
            {{ this.$store.getters.NEWS.newsCard.faithfulPrayers.title }}
          </h3>
          <p class="content">
            {{ this.$store.getters.NEWS.newsCard.faithfulPrayers.text }}
          </p>
        </div>
        <div class="blog">
          <img :src="imgCard_3" alt="" />
          <h3 class="title">
            {{ this.$store.getters.NEWS.newsCard.colourFulWaters.title }}
          </h3>
          <p class="content">
            {{ this.$store.getters.NEWS.newsCard.colourFulWaters.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgHead from "../assets/nationalPark.png";
import imgCard_1 from "../assets/hiroshimajapan.png";
import imgCard_2 from "../assets/india-top.png";
import imgCard_3 from "../assets/Naltar-lake-pakistan 1.png";
export default {
  data() {
    return {
      imgHead,
      imgCard_1,
      imgCard_2,
      imgCard_3,
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  color: white;
}
h1,
h3 {
  font-family: "Gelasio", serif;
  margin: 0;
  margin-top: 5px;
}
h3 {
  font-size: 20px;
}
p {
  margin-top: 5px;
  font-size: 18px;
}
.newsText {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  width: 50%;
  text-align: center;
  margin: 0 auto;
}
.blogs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog {
  width: 65%;
}
.blockNews {
  display: flex;
  justify-content: space-around;
}
.contentBlog {
  width: 80%;
}
.headBlog {
  width: 50%;
}
</style>