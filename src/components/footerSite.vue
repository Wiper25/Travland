<template>
  <div id="footer">
    <div class="contactBlock">
      <img src="" alt="" />
      <p>{{ this.$store.getters.FOOTER.contacts.text }}</p>
      <p>{{ this.$store.getters.FOOTER.contacts.email }}</p>
      <div class="iconBlock">
        <div
          v-for="(item, idx) in this.$store.getters.FOOTER.contacts"
          :key="idx"
          class="icon"
        >
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
    <div class="serviceBlock">
      <div
        v-for="(itemService, indexService) in this.$store.getters.NAV
          .serviceBlock"
        :key="indexService"
        class="service"
      >
        <p>{{ itemService }}</p>
      </div>
    </div>
    <div class="legalBlock">
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
        <input class="inSend" type="text" placeholder="Send email  " />
        <input type="submit" class="btn" value="Send" />
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
  color: white;
}
#footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.iconBlock {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.contactBlock {
  display: flex;
  flex-direction: column;
}
.serviceBlock {
}
.legalBlock {
}
h1 {
  font-weight: 500;
  font-size: 20px;
}
.inSend {
  height: 30px;
  outline: none;
  padding: 0px 10px;
  background-color: transparent;
  border: 1px solid;
  font-size: Gelasio;
}
.inSend:focus {
  box-shadow: 0px 6px 35px #07070769;
}
::placeholder {
  color: white;
}
.btn {
  background: #c9453b;
  border-radius: 5px;
  border: 0px;
  color: white;
  width: 90px;
  height: 30px;
  margin-left: 10px;
}
.btn:hover {
  box-shadow: 0px 6px 5px #07070769;
  cursor: pointer;
}
</style>