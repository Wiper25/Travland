<template>
  <div id="footer">
    <div>
      <img src="" alt="" />
      <p>{{ this.$store.getters.FOOTER.contacts.text }}</p>
      <p>{{ this.$store.getters.FOOTER.contacts.email }}</p>
      <div
        v-for="(item, idx) in this.$store.getters.FOOTER.contacts"
        :key="idx"
        class="contact"
      >
        <img :src="item.img" alt="" />
      </div>
      <div
        v-for="(itemService, indexService) in this.$store.getters.NAV
          .serviceBlock"
        :key="indexService"
        class="service"
      >
        <p>{{ itemService }}</p>
      </div>
      <div
        v-for="(itemLegal, iLegal) in this.$store.getters.NAV.legalBlock"
        :key="iLegal"
        class="legal"
      >
        <p>{{ itemLegal }}</p>
      </div>
    </div>
    <div class="subscribe">
      <h1>SUBSCRIBE NOW</h1>
      <form action="">
        <input type="text" />
        <input type="submit" value="" />
      </form>
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
</style>