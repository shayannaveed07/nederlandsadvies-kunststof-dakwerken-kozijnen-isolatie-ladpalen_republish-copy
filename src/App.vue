<template>
  <div id="app">
    <router-link to="/">
      <HomeView />
    </router-link>
    <router-link to="/thankyou">
      <Thankyou />
    </router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
/* @import url("https://fonts.googleapis.com/css2?family=Catamaran:wght@800&display=swap"); */
* {
  font-family: 'Catamaran', 'sans-serif';
}
</style>
