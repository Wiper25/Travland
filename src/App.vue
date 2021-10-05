<template>
  <div id="app">
    <div id="filter">
      <div id="conteiner">
        <headerSite />
        <popularLocat />
        <sliderLocat />
        <newsLocat />
        <footerSite />
      </div>
    </div>
  </div>
</template>

<script>
import headerSite from "./components/headerSite.vue";
import popularLocat from "./components/popularLocat.vue";
import sliderLocat from "./components/sliderLocat.vue";
import newsLocat from "./components/newsLocat.vue";
import footerSite from "./components/footerSite.vue";

export default {
  name: "App",
  components: {
    headerSite,
    popularLocat,
    sliderLocat,
    newsLocat,
    footerSite,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
}
#filter {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.384);
}
#conteiner {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
