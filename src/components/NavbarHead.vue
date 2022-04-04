<template>
  <nav>
    <v-toolbar flat class="grey lighten-4 px-10">
      <v-toolbar-title class="text-uppercase cyan--text">
        <!-- <router-link :to="{ name: `Home` }">
          <span class="font-weight-bold">Portal</span>
          <span>Berita</span>
        </router-link> -->
        <v-btn @click="categoryNull" class="blue--text">
          <span class="font-weight-bold">Portal</span>
          <span>Berita</span>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="mt-5"
        placeholder="Search"
        filled
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>

      <v-btn icon href="/kategori">
        <v-icon>mdi-shape</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  methods: {
    categoryNull() {
      this.$store.dispatch("getCategory", "");
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>
<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
  color: unset !important ;
}
</style>
