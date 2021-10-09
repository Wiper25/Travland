<template>
  <div class="nav">
    <div class="logo">
      <img :src="this.$store.getters.HEAD.logo" alt="" />
    </div>
    <div v-for="(btn, i) in this.$store.getters.HEAD.nav" :key="i" class="menu">
      {{ btn }}
    </div>
    <button class="go">{{ this.$store.getters.HEAD.btn[0] }}</button>
  </div>
</template>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
}
.nav {
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  padding-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}
.menu {
  display: flex;
  align-items: center;
}
.menu:hover {
  border-bottom: 3px solid white;
  cursor: pointer;
}
.go {
  background: #c9453b;
  border-radius: 5px;
  border: 0px;
  color: white;
}
.go:hover {
  box-shadow: 0px 6px 5px #07070769;
  cursor: pointer;
}
button {
  width: 130px;
  height: 40px;
}
</style>