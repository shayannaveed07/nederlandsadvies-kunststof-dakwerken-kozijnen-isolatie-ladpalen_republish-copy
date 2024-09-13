<template>
  <div class="home">
    <div class="row">
      <div
        class="logo col-sm-6 text-center text-white p-3 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/logoNl.png" alt="" @click="showHome" />
      </div>
      <div class="text col-sm-6 text-center p-3 second-nav">
        <h5>Besparen op Airconditioning was</h5>
        <p class="text-warning sub-text-nav">nog nooit zo makkelijk!</p>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "NavBar",

  methods:{
    showHome() {
      
      this.$parent.showHomeApp()
    }
  }
};
</script>
<style scoped>
* {
  font-weight: 800;
}
.second-nav{
  background-color: white;
}
.logo {
  background: #1c1829;
  cursor:pointer
}
.home {
  overflow: hidden;
}
.sub-text-nav {
  margin-left: 9rem;
}
@media (max-width: 768px) {
  * {
    font-weight: 600;
  }
  .logo img {
    width: 70%;
  }
  .second-nav h5 {
    font-size: 19px;
  }
  .second-nav p {
    margin-left: 7rem;
  }
}
@media (max-width: 576px) {
  .second-nav {
    display: none;
  }
}
</style>
