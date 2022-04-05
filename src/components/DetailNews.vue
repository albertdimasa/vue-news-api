<template>
  <v-container>
    <v-img :src="oneNews.urlToImage" max-width="60%" class="rounded-lg mb-3" />
    <h2>{{ oneNews.title }}</h2>
    <h4 class="blue-grey--text">
      {{ oneNews.author }} -
      {{ moment(oneNews.publishedAt).locale("id").format("LLLL") }}
    </h4>
    <p>{{ oneNews.content }}</p>
    <v-btn class="secondary mr-5" @click="$router.back()">Kembali</v-btn>
    <v-btn :href="oneNews.url" target="_blank" class="blue darken-4 white--text"
      >Baca selengkapnya</v-btn
    >
  </v-container>
</template>
<script>
export default {
  computed: {
    oneNews() {
      return this.$store.state.oneNews;
    },
  },
  methods: {
    getNews(slug) {
      this.$store.dispatch("getNews", slug);
    },
  },
  created() {
    this.getNews(this.$route.params.slug);
  },
};
</script>
<style scoped></style>
