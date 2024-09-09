<template>
  <div class="footer text-center p-5">
    <h3>
      <img src="../assets/Arrows.png" alt="" />
      Controleer of wij actief zijn in jouw regio! 
    </h3>
    <div class="form">
      <input type="text" placeholder="Postcode" class="area-form-input" />
      <button class="btn btn-dark area-form-btn">Controleer</button>
    </div>
  </div>
</template>

<style scoped>
* {
  font-weight: 800;
}
.footer {
  background: #ffe785;
}
.area-form-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e2e2e2;
  outline: none;
}
.area-form-btn {
  padding: 10px 4rem;
  border-radius: 3rem;

  cursor: pointer;
  margin-left: 1rem;
}
</style>
