<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ path: '/' }" v-if="isHome"
        ><span>Semua Berita</span></router-link
      >
    </div>
    <p></p>
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    isHome() {
      return this.$route.name === "detailBerita";
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  text-align: center;
}

span {
  padding: 20px;
  background-color: rgb(0, 165, 187);
  color: white;
}
p {
  margin: 25px 0;
}
</style>
