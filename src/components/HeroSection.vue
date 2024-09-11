<template>
  <div class="hero">
    <div class="hero-content text-white">
      <h1>Hou je huis koel met</h1>
      <h1 class="text-warning">airconditioning</h1>
      <h3>Doe de woningscan en check:</h3>
      <div class="checkmarks d-flex">
        <img src="../assets/icons.png" alt="" />
        <h4>Hoeveel jij kan besparen op airconditioning;</h4>
      </div>
      <div class="checkmarks d-flex">
        <img src="../assets/icons.png" alt="" />
        <h4>De best beschikbare offertes voor jouw woning;</h4>
      </div>
      <div class="checkmarks d-flex">
        <img src="../assets/icons.png" alt="" />
        <h4>De juiste specialisten voor gratis & vrijblijvend advies;</h4>
      </div>
      <h4 class="mb-4 mt-5">Controleer nu of wij actief zijn in jouw regio:</h4>
      <div class="area-form position-relative">
        <div>
          <img src="../assets/Layer_1.png" class="arrow" />
        </div>
        <input
          type="text"
          placeholder="Postcode"
          class="area-form-input"
          v-model="postCode"
        />
        <button
          class="btn btn-warning area-form-btn"
          @click.prevent="checkArea"
        >
          Controleer
        </button>
        <!-- <div v-show="showQuestion">
          <Question />
        </div> -->
        <p class="add-form-btn-subtext">Klaar binnen 1 minuut</p>
      </div>
      <div class="sticker text-warning">
        <h6>
          Bespaar tot <br />
          40% op de <br />aanschafprijs
        </h6>
      </div>
    </div>
  </div>
</template>
<!-- //script -->
<script>
// import Question from "./Question.vue";

export default {
  name: "HeroSection",
  // components: { Question },
  props: {
    // postCode: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    return {
      // localpostCode: this.postCode,

      postCode: "",
      // showQuestion: false,
    };
  },

  methods: {
    checkArea() {
      this.$parent.handleButtonClick(this.postCode);
      // const dutchPostalCodeRegex = /^[1-9][0-9]{3} ?(?!SA|SD|SS)[A-Z]{2}$/i;
      // if (
      //   this.postCode.length == 6 &&
      //   dutchPostalCodeRegex.test(this.postCode)
      // ) {
      // this.showQuestion = true;
      // console.log("Success: Postal code is from the Netherlands");
      // this.postCode = "";

      // this.openQuestionPage();
      // window.location.href = "../components/Question.vue";
      // }
      // else {
      //   console.log("Failure: Postal code is not from the Netherlands");
      // }
    },
    // openQuestionPage() {

    //   const pageUrl = "../components/Question.vue";
    //   window.open(pageUrl, "_blank");

    // },
  },
};
</script>
<!-- //style -->
<style scoped>
* {
  font-weight: 800;
}
a {
  font-weight: 800;
}
.hero {
  background-image: url("../assets/airco1.png");
  /* width: 1920px;
  height: 794px;
  top: 118px;
  gap: 0px; */
  opacity: 0px;
  background-position: center;
}
.hero-content {
  padding: 8rem 4rem;
  margin-left: 3rem;
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
.sticker {
  position: absolute;
  top: 14rem;
  left: 59%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  background-color: #000000;
  padding: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  width: 9rem;
  height: 9rem;
  padding: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
}
.add-form-btn-subtext {
  font-size: 12px;
  color: #fff;
  margin-left: 2rem;
  position: absolute;

  left: 18rem;
}
.arrow {
  position: absolute;
  left: -7rem;
  bottom: 0;
}
.checkmarks {
  line-height: 10px;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  * {
    font-weight: 600;
  }
  .checkmarks {
    height: 2rem;
  }
  .sticker {
    left: 73%;
    top: 13rem;
  }
}
@media (max-width: 1024px) {
  .sticker {
    left: 85%;
  }
}
@media (max-width: 508px) {
  .hero-content h4 {
    font-size: 16px;
  }
  .hero-content {
    margin-left: 0;
  }
}
@media (max-width: 576px) {
  .sticker {
    display: none;
  }
  .area-form-input {
    display: none;
  }
  .area-form-btn {
    display: none;
  }
  .arrow {
    display: none;
  }
}
@media (max-width: 662px) {
  .add-form-btn-subtext {
    display: none;
  }
  .area-form-input {
    padding: 5px;
  }
  .area-form-btn {
    padding: 5px 2rem;
  }
}
@media (max-width: 587px) {
  .area-form-input {
    padding: 3px;
  }
  .area-form-btn {
    padding: 3px 1rem;
  }
}
@media (max-width: 335px) {
  .hero-content {
    font-size: 15px;
  }
}
</style>
