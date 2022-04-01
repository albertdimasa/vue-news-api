<template>
  <v-app>
    <NavbarHead />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavbarHead from "@/components/NavbarHead.vue";
export default {
  components: { NavbarHead },
};
</script>
