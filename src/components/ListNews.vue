<template>
  <div>
    <h1>List Berita :</h1>
    <ul>
      <li v-for="berita in listNews" :key="berita.id">
        {{ berita.title }}
      </li>
      <!-- <p>{{ listNews }}</p> -->
    </ul>
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
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
