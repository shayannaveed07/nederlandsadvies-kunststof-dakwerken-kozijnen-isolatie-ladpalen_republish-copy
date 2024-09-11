<template>
  <div class="homeView">
    <NavBar v-show="showApp" />
    <HeroSection v-show="showApp" :postCode="postCode" />
    <HowToWork v-show="showApp" />
    <WarmAir v-show="showApp" />
    <Footer v-show="showApp" />
    <SecondFooter v-show="showApp" />
    <Question v-show="showQuestion" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import HowToWork from "@/components/HowToWork.vue";
import WarmAir from "@/components/WarmAir.vue";
import Footer from "@/components/Footer.vue";
import SecondFooter from "@/components/SecondFooter.vue";
import Question from "@/components/Question.vue";
export default {
  name: "HomeView",

  components: {
    NavBar,
    HeroSection,
    HowToWork,
    WarmAir,
    Footer,
    SecondFooter,
    Question,
  },
  data() {
    return {
      postCode: "",
      showApp: true,
      showQuestion: false,
    };
  },
  // inject:["heroSection"],
  methods: {
    handleButtonClick(postCode) {
      const dutchPostalCodeRegex = /^[1-9][0-9]{3} ?(?!SA|SD|SS)[A-Z]{2}$/i;

      console.log("code", postCode);
      if (postCode.length === 6 && dutchPostalCodeRegex.test(postCode)) {
        console.log("Success: Postal code is from the Netherlands");
        this.showApp = false;
        this.showQuestion = true;
      } else {
        console.log("Failure: Postal code is not from the Netherlands");
      }
    },
  },
};
</script>
