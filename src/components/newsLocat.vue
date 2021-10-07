<template>
  <div @click="f1()" class="newsBlog">
    <!-- <div v-for="(content, i) in this.$store.getters.NEWS.contentText" :key="i">
      {{ content }} -->
    <h1 class="titleNews">{{ this.$store.getters.NEWS.title }}</h1>
    <p class="contentNews">{{ this.$store.getters.NEWS.context }}</p>
    <div class="headBlog">
      <img :src="this.$store.getters.NEWS.homeCard.img" alt="" />
      <h5 class="titleBlog">{{ this.$store.getters.NEWS.homeCard.title }}</h5>
      <p class="contentBlog">{{ this.$store.getters.NEWS.homeCard.text }}</p>
    </div>
    <div
      v-for="(item, i) in this.$store.getters.NEWS.newsCard"
      :key="i"
      class="blog"
    >
      <img :src="item.img" alt="" />
      <h5 class="title">{{ item.title }}</h5>
      <p class="content">{{ item.text }}</p>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    f1() {
      console.log(this.$store.getters.NEWS);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}
h1,
h5 {
  font-family: "Gelasio", serif;
}
</style>