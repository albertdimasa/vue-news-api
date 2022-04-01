<template>
  <div id="listNews">
    <h1 class="my-5">Portal Berita Indonesia</h1>
    <v-layout row class="mx-10">
      <v-container
        v-for="berita in listNews"
        :key="berita.id"
        flex
        xs12
        sm6
        md4
        lg3
      >
        <v-card elevation="2" outlined shaped>
          <v-img :src="berita.urlToImage" max-height="150" />

          <v-card-subtitle>
            By <b>{{ berita.author }}</b> -
            {{ moment(berita.publishedAt).locale("id").format("LLLL") }} WIB
          </v-card-subtitle>
          <v-card-title class="text-center">{{ berita.title }}</v-card-title>
          <v-card-text>
            {{ berita.description }}
          </v-card-text>
          <v-btn
            class="primary mb-5"
            small
            :to="{
              name: 'Detail Berita',
              params: { slug: toSlug(berita.title) },
            }"
            >Lihat selengkapnya
          </v-btn>
        </v-card>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    listNews() {
      return this.$store.state.listNews;
    },
  },

  methods: {
    fetchNews() {
      this.$store.dispatch("fetchListNews");
    },

    toSlug(value) {
      value = value
        .toLowerCase() // LowerCase
        .replace(/\s+/g, "-") // space to -
        .replace(/&/g, `-and-`) // & to and
        .replace(/--/g, `-`);
      return value;
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
<style scoped>
#listNews {
  text-align: center;
}
</style>
