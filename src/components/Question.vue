<template>
  <div class="question-container">
    <NavBar />
    <FirstQuestion v-show="showFirstQuestion"   />
    <SecondQuestion v-show="showSecondQuestion" />
    <ThirdQuestion v-show="showThirdQuestion"  />
    <HomeView v-show="showApp" />
    <SecondFooter />

    <!-- <GoogleMapSection v-show="showSecondQuestion" /> -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FirstQuestion from "../components/Questions.vue/FirstQuestion.vue";
import SecondQuestion from "../components/Questions.vue/SecondQuestion.vue";
import ThirdQuestion from "./Questions.vue/ThirdQuestion.vue";
import HomeView from "@/views/HomeView.vue";

import SecondFooter from "./SecondFooter.vue";
// import GoogleMapSection from "./GoogleMapSection.vue";

export default {
  components: {
    NavBar,
    FirstQuestion,
    SecondQuestion,
    ThirdQuestion,
    HomeView,
  
    SecondFooter,
    // GoogleMapSection,
  },
  data() {
    return {
      showFirstQuestion: true,
      showSecondQuestion: false,
      showThirdQuestion: false,
      showApp:false,
      // postCode : postCode,
      
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
    showPreviousSection(){
      if(this.showFirstQuestion === true){
        this.showFirstQuestion = false;
        this.showApp = true;
        // this.$router.push("/")
      }
      else if(this.showSecondQuestion === true){
        this.showSecondQuestion = false;
        this.showFirstQuestion = true;
      }else if(this.showThirdQuestion === true){
        this.showThirdQuestion = false;
        this.showSecondQuestion = true;
      }

    }
    // showThankYou() {
    //   if (this.showThirdQuestion === true) {
    //     this.showThirdQuestion = false;
    //     this.ThankYou = true;
    //   }
    // },
  },
};
</script>

<style scoped>
.question-container {
  background: #ffe785;
}
</style>
