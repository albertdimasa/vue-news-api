<template>
  <nav>
    <v-toolbar flat class="grey lighten-4 px-10">
      <v-toolbar-title class="text-uppercase cyan--text">
        <a @click="$router.back()">
          <span class="font-weight-bold">Portal</span>
          <span>Berita</span>
        </a>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="mt-5"
        placeholder="Search"
        filled
        dense
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-shape</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<style scoped>
a {
  cursor: pointer;
  text-decoration: none;
  color: unset !important ;
}
</style>
