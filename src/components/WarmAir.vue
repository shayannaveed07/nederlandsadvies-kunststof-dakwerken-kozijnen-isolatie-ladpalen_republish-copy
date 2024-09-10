<template>
  <section class="">
    <div class="warm p-5 d-flex justify-content-center align-items-center mt-5">
      <div class="content text-white">
        <h1>Waarom airconditioning?</h1>
        <h3>Airconditioning heeft verschillende voordelen:</h3>
        <div class="checkmarks d-flex">
          <img src="../assets/icons.png" />
          <h5>Verbeterde luchtkwaliteit;</h5>
        </div>
        <div class="checkmarks d-flex">
          <img src="../assets/icons.png" />
          <h5>Betere slaapkwaliteit;</h5>
        </div>
        <div class="checkmarks d-flex mb-5">
          <img src="../assets/icons.png" />
          <h5>Geluidsstil: de split airco maakt nauwelijks geluid; </h5>
        </div>
        <h6>
          Bovendien is een airconditioning multifunctioneel: hij verwarmt je
          huis ook <br />gemakkelijk op koude winterdagen. Zo bespaar jij enorm
          op je gasrekening. 
        </h6>
      </div>
      <div class="images position-relative">
        <div class="main-img">
          <img src="../assets/newsolar.png" />
        </div>
        <div class="sticker">
          <img src="../assets/Label.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
* {
  font-weight: 800;
}
.warm {
  background: #1c1829;
}
.checkmarks {
  height: 2rem;
}

.sticker img {
  position: absolute;
  right: 9rem;
  top: 17rem;
}

.sticker {
  margin-bottom: 15rem;
}
.main-img img {
  width: 70%;
  margin-top: 14rem;
}
.images {
  margin-left: 3rem;
}
@media (max-width: 480px) {
  * {
    font-size: 16px;
  }
}
@media (max-width: 1024px) {
  .sticker img {
    right: 2rem;
    top: 15rem;
    width: 40%;
  }
}
@media (max-width: 1280px) {
  .main-img img {
    width: 70%;
    margin-top: 14rem;
  }
  .sticker img {
    right: 6rem;
    top: 16rem;
  }
}
@media (max-width: 768px) {
  .images {
    display: none;
  }
}
</style>
