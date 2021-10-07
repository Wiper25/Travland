<template>
  <div class="popular">
    <!-- <div v-for="(item, i) in this.$store.getters.POPULAR[0]" :key="i">
      {{ item }}
    </div> -->
    <h1>{{ this.$store.getters.POPULAR.title }}</h1>
    <p>{{ this.$store.getters.POPULAR.text }}</p>
    <div class="block">
      <div
        v-for="(item, i) in this.$store.getters.POPULAR.cardCity"
        :key="i"
        class="cardBlock"
      >
        <div class="card">
          <div class="itemCard">
            <img :src="item.img" />
            <h3 class="titleCard">{{ item.title }}</h3>
            <div class="contentCard">{{ item.text }}</div>
          </div>
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
}
.card {
  width: 360px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
</style>