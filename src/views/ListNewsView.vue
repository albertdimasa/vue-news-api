<template>
  <div>
    <ListNews />
  </div>
</template>

<script>
// @ is an alias to /src
import ListNews from "@/components/ListNews.vue";

export default {
  name: "ListNewsView",
  components: {
    ListNews,
  },
};
</script>
