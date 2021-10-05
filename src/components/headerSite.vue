<template>
  <div class="headerSite">
    <div class="nav">
      <div class="logo"></div>
      <div
        v-for="(btn, i) in this.$store.getters.HEAD.nav"
        :key="i"
        class="menu"
      >
        {{ btn }}
      </div>
      <div class="go"></div>
    </div>
    <div class="contentHeader">
      <h1></h1>
      <p></p>
      <button></button>
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
</style>