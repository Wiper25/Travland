<template>
  <div class="popular">
    <h1>{{ this.$store.getters.POPULAR.contentText.title }}</h1>
    <p>{{ this.$store.getters.POPULAR.contentText.text }}</p>
    <div class="cardBlock">
      <div
        v-for="(card, i) in this.$store.getters.POPULAR.cardCity"
        :key="i"
        class="card"
      >
        <div class="itemCard">
          <img :src="card.img" />
          <h3 class="titleCard">{{ card.title }}</h3>
          <div class="contentCard">{{ card.text }}</div>
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
}
.card {
  width: 360px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 10px;
}
.card:hover {
  box-shadow: 0px 6px 35px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
</style>