<template>
  <div id="app">
    <div id="filter">
      <div id="container">
        <navig />
        <div id="content">
          <headerSite class="headerSite" />
          <popularLocat />
          <sliderLocat />
          <newsLocat />
          <hr />
          <footerSite />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerSite from "./components/headerSite.vue";
import navig from "./components/navig.vue";
import popularLocat from "./components/popularLocat.vue";
import sliderLocat from "./components/sliderLocat.vue";
import newsLocat from "./components/newsLocat.vue";
import footerSite from "./components/footerSite.vue";

export default {
  name: "App",
  components: {
    headerSite,
    navig,
    popularLocat,
    sliderLocat,
    newsLocat,
    footerSite,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  background-image: url("./assets/background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
}
#filter {
  height: 200px;
  height: 100vh;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.384);
}
#container {
  max-width: 1200px;
  margin: 0 auto;
}
.headerSite {
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
#content {
  overflow: auto;
  height: 85vh;
  margin-top: 20px;
}
#content::-webkit-scrollbar {
  width: 0.3em;
}

#content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#content::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>
