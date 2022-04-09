<template>
  <div>
    <DetailNews :news="oneNews" />
  </div>
</template>

<script>
// @ is an alias to /src
import DetailNews from "@/components/DetailNews.vue";

export default {
  name: "DetailNewsView",
  components: {
    DetailNews,
  },
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
