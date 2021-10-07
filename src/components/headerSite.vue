<template>
  <div class="headerSite">
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
* {
  font-family: "Roboto", sans-serif;
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
h1 {
  font-family: "Gelasio", serif;
}
</style>