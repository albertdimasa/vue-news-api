<template>
  <div>
    <h1>List Berita Indonesia</h1>
    <ul>
      <li v-for="berita in listNews" :key="berita.id">
        <div class="card" style="width: 18rem">
          <img :src="berita.urlToImage" class="card-img-top" />
          <div class="card-body">
            <p class="card-author">
              By <b>{{ berita.author }}</b> -
              {{ berita.publishedAt }}
            </p>
            <h4 class="card-title">{{ berita.title }}</h4>
            <p class="card-text">
              {{ berita.description }}
            </p>
            <a href="#" class="button">Lihat selengkapnya</a>
          </div>
        </div>
      </li>
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
<style scoped>
ul {
  justify-content: center;
}
li {
  list-style-type: none;
  display: inline-flex;
}
img {
  object-fit: cover;
  height: 13rem;
  width: 18rem;
  border-radius: 10px;
}
.card {
  flex-wrap: wrap;
  margin: 20px 20px;
  box-shadow: 8px 6px 8px -9px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  transition: 0.5s;
}

.card:hover {
  box-shadow: 8px 15px 12px -9px rgba(0, 0, 0, 0.8);
}

.card-body {
  text-align: left;
  padding: 0 15px 30px;
}

.card-author {
  font-size: 13px;
}

.card-title {
  line-height: 1.3;
}

.card-text {
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 1.2;
}

.button {
  background: rgb(20, 138, 216);
  color: white;
  padding: 8px 10px;
  text-decoration: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

.button:hover {
  background-color: #56bbf1;
}
</style>
