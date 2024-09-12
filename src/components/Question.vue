<template>
  <div class="question-container">
    <NavBar />
    <FirstQuestion v-show="showFirstQuestion" />
    <SecondQuestion v-show="showSecondQuestion" />
    <ThirdQuestion v-show="showThirdQuestion" />
    <Thankyou v-show="ThankYou" />
    <SecondFooter />

    <!-- <GoogleMapSection v-show="showSecondQuestion" /> -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FirstQuestion from "../components/Questions.vue/FirstQuestion.vue";
import SecondQuestion from "../components/Questions.vue/SecondQuestion.vue";
import ThirdQuestion from "./Questions.vue/ThirdQuestion.vue";
import Thankyou from "./Questions.vue/Thankyou.vue";
import SecondFooter from "./SecondFooter.vue";
// import GoogleMapSection from "./GoogleMapSection.vue";

export default {
  components: {
    NavBar,
    FirstQuestion,
    SecondQuestion,
    ThirdQuestion,
    Thankyou,
    SecondFooter,
    // GoogleMapSection,
  },
  data() {
    return {
      showFirstQuestion: true,
      showSecondQuestion: false,
      showThirdQuestion: false,
      ThankYou: false,
    };
  },
  methods: {
    showNextQuestions(postCode, houseNumber) {
      const dutchPostalCodeRegex = /^[1-9][0-9]{3} ?(?!SA|SD|SS)[A-Z]{2}$/i;
      console.log("Postcode: ", postCode);
      if (
        postCode.length === 6 &&
        dutchPostalCodeRegex.test(postCode) &&
        houseNumber.length > 0
      ) {
        if (this.showFirstQuestion === true) {
          this.showFirstQuestion = false;
          this.showSecondQuestion = true;
        }
      } else {
        alert("Please enter a valid postcode or house number ");
      }
    },
    showLastQuestion() {
      if (this.showSecondQuestion === true) {
        this.showSecondQuestion = false;
        this.showThirdQuestion = true;
      }
    },
    showThankYou() {
      if (this.showThirdQuestion === true) {
        this.showThirdQuestion = false;
        this.ThankYou = true;
      }
    },
  },
};
</script>

<style scoped>
.question-container {
  background: #ffe785;
}
</style>
