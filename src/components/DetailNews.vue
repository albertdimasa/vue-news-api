<template>
  <div id="detailNews">
    <img :src="oneNews.urlToImage" />
    <h1 class="title">{{ oneNews.title }}</h1>
    <h3 class="info">
      {{ oneNews.author }} -
      {{ moment(oneNews.publishedAt).locale("id").format("LLLL") }}
    </h3>
    <p class="desc">{{ oneNews.content }}</p>
    <a :href="oneNews.url" target="_blank">Baca selengkapnya</a>
  </div>
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
<style scoped>
#detailNews {
  margin: 0 250px;
}
img {
  object-fit: cover;
  height: 30rem;
  width: 50rem;
  border-radius: 5px;
  display: block;
  margin: auto;
}

.title {
  font-size: 30px;
}
.info {
  font-size: 15px;
  color: rgb(114, 113, 113);
}

.desc {
  font-size: 20px;
}
a {
  font-weight: bold;
  text-decoration: none;
  padding: 0px;
  margin: 0px;
  transition: 0.3s;
}
a:hover {
  color: #b34040;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff;
  margin: 4px;
}
</style>
