<template>
  <div class="headerSite">
    <div class="nav">
      <div class="logo">
        <img :src="this.$store.getters.HEAD.logo" alt="" />
      </div>
      <div
        v-for="(btn, i) in this.$store.getters.HEAD.nav"
        :key="i"
        class="menu"
      >
        {{ btn }}
      </div>
      <button class="go">{{ this.$store.getters.HEAD.btn[0] }}</button>
    </div>
    <div class="contentHeader">
      <h1>{{ this.$store.getters.HEAD.contentText[0] }}</h1>
      <p>{{ this.$store.getters.HEAD.contentText[1] }}</p>
      <button class="go margin">{{ this.$store.getters.HEAD.btn[1] }}</button>
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
.nav {
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  padding-top: 20px;
}
.menu {
  display: flex;
  align-items: center;
}
.menu:hover {
  border-bottom: 3px solid white;
  cursor: pointer;
}
.contentHeader {
  color: white;
  margin-top: 15%;
}
.contentHeader h1 {
  width: 50%;
}
.contentHeader p {
  width: 30%;
  margin-top: 3%;
}
.go {
  background: #c9453b;
  border-radius: 5px;
  border: 0px;
  color: white;
}
button {
  width: 130px;
  height: 40px;
}
.margin {
  margin-top: 100px;
}
</style>