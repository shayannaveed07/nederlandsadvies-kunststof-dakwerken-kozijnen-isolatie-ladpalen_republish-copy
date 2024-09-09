<template>
  <div id="app">
    <HomeView />
  </div>
</template>
<script>
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    HomeView,
  },
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@800&display=swap"); */
.app {
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
}
</style>
