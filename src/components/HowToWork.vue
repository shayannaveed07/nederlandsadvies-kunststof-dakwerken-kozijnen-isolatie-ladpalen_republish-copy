<template>
  <div class="container1 overflow-hidden">
    <h6 class="text-center mt-5" style="color: #1c1829">Nederlandsadvies.nl</h6>
    <h2 class="text-center" style="color: #1c1829">Hoe werkt het?</h2>
    <div class="row row-container d-flex justify-content-evenly mb-5">
      <div class="col-md-3 cards text-center">
        <img src="../assets/icon-1.png" alt="" class="cards-img" />
        <h3 class="mt-4">Stap 1</h3>
        <p>Controleer of wij actief zijn in jouw regio</p>
      </div>
      <div class="col-md-3 cards text-center">
        <img src="../assets/icon-2.png" alt="" class="cards-img" />
        <h3 class="mt-4">Stap 2</h3>
        <p>Rond de woningscan af</p>
      </div>
      <div class="col-md-3 cards text-center">
        <img src="../assets/icon-3.png" alt="" class="cards-img" />
        <h3 class="mt-4">Stap 3</h3>
        <p>Onze vakmensen geven gratis en vrijblijvend, persoonlijk advies</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-weight: 800;
}
.cards {
  background: #ffe785;
  padding: 4rem;
}
.cards-img {
  display: flex;
  margin-top: -7rem;
  margin-left: auto;
  margin-right: auto;
}
.row-container {
  margin-top: 4rem;
}
@media (max-width: 768px) {
  .cards {
    margin-bottom: 5rem;
    width: 60%;
  }
}

</style>
