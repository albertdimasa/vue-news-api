<template>
  <div id="listNews">
    <h1>Portal Berita Indonesia</h1>
    <ul>
      <li v-for="berita in listNews" :key="berita.id">
        <div class="card">
          <img :src="berita.urlToImage" class="card-img-top" />
          <div class="card-body">
            <p class="card-author">
              By <b>{{ berita.author }}</b> -
              {{ moment(berita.publishedAt).locale("id").format("LLLL") }}
            </p>
            <h4 class="card-title">{{ berita.title }}</h4>
            <p class="card-text">
              {{ berita.description }}
            </p>
            <button>
              <router-link
                :to="{
                  name: 'Detail Berita',
                  params: { slug: toSlug(berita.title) },
                }"
              >
                Lihat selengkapnya
              </router-link>
            </button>
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
  width: 18rem;
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
  border: none;
  border-radius: 7px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
}

.button:hover {
  background-color: #56bbf1;
}
</style>
