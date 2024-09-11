<template>
  <div class="question-container">
    <NavBar />
    <FirstQuestion v-show="showFirstQuestion" />
    <SecondQuestion v-show="showSecondQuestion" />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FirstQuestion from "../components/Questions.vue/FirstQuestion.vue";
import SecondQuestion from "../components/Questions.vue/SecondQuestion.vue";
export default {
  components: {
    NavBar,
    FirstQuestion,
    SecondQuestion,
  },
  data() {
    return {
      showFirstQuestion: true,
      showSecondQuestion: false,
    };
  },
  methods: {
    showNextQuestions(postCode, houseNumber, streetNumber) {
      const dutchPostalCodeRegex = /^[1-9][0-9]{3} ?(?!SA|SD|SS)[A-Z]{2}$/i;
      console.log("Postcode: ", postCode);
      if (
        postCode.length === 6 &&
        dutchPostalCodeRegex.test(postCode) &&
        houseNumber.length > 0 &&
        streetNumber.length > 0
      ) {
        if (this.showFirstQuestion === true) {
          this.showFirstQuestion = false;
          this.showSecondQuestion = true;
        }
      } else {
        alert("Please enter a valid postcode, house number and street number.");
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
