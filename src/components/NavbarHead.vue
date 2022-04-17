<template>
  <nav>
    <v-toolbar flat class="grey lighten-4 px-10">
      <v-toolbar-title class="text-uppercase cyan--text">
        <v-img
          src="../assets/logo.jpg"
          style="width: 50px; cursor: pointer"
          @click="categoryNull"
        ></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="mt-5"
        placeholder="Search"
        filled
        dense
        prepend-inner-icon="mdi-magnify"
        v-model="search"
      ></v-text-field>

      <v-btn icon href="/kategori">
        <v-icon>mdi-shape</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      search: (this.$store.state.search = ""),
    };
  },
  methods: {
    categoryNull() {
      this.$store.dispatch("getCategory", "");
      this.search = "";

      this.$router
        .push({
          name: "Home",
        })
        .catch((err) => err);
    },
  },
  watch: {
    search(value) {
      this.$store.dispatch("getSearch", value);
    },
  },
};
</script>
