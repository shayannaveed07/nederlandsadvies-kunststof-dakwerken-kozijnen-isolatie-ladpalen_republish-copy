<template>
  <div class="home">
    <div class="row">
      <div
        class="logo col-md-6 text-center text-white p-3 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/logoNl.png" alt="" />
      </div>
      <div
        class="text col-md-6 text-center p-3 d-flex justify-content-center align-items-center flex-column"
      >
        <h5>Besparen op Airconditioning was</h5>
        <p class="text-warning sub-text-nav">nog nooit zo makkelijk!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
* {
  font-weight: 800;
}
.logo {
  background: #1c1829;
}
.home {
  overflow: hidden;
}
.sub-text-nav {
  margin-left: 9rem;
}
</style>
