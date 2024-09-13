<template>
  <div class="footer text-center p-5 postion-relative">
    <h3>
      <img src="../assets/Arrows.png" alt="" />
      Controleer of wij actief zijn in jouw regio! 
    </h3>
    <div class="form">
      <input type="text" placeholder="Postcode" class="area-form-input" v-model="postCode" required/>
      <button class="btn btn-dark area-form-btn" @click.prevent="checkArea">Controleer</button>
    </div>
    <div class="d-flex align-items-center   "  >
          <div class="main bg-white  text-black" v-show="showmain">
  <h1 v-show="showSpinner">Loading...</h1>
  <div class="spinner-border ms-auto " role="status" aria-hidden="true"  v-show="showSpinner"></div>
</div>
</div>
  </div>
</template>


<script>
export default{
  data(){
    return{
      postCode: '',
      showmain:false,
      showSpinner:false
    }
  },
  methods: {
    checkArea() {
      this.showSpinner = true;
      
      this.showmain = true;
        let interval = setInterval(() => {
      this.$parent.handleButtonClick(this.postCode,this.showSpinner );
      // let interval = setInterval(() => {
        },2000)
      }
}
}

</script>
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
.main{
  position: absolute;
    padding:3rem 22rem;
    left: 11rem;
    margin-bottom: 8rem;
    display: flex;
    border-radius:2rem
}
.spinner-border{
  font-size:7rem;
  
}
@media (max-width: 576px) {
  * {
    font-size: 20px;
  }
  .area-form-input {
    width: 100%;
  }
  .area-form-btn {
    margin-top: 1rem;
  }
}
</style>
