<template>
  <div class="homeView">
    <NavBar />
    <HeroSection />
    <HowToWork />
    <WarmAir />
    <Footer />
    <SecondFooter />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import HowToWork from "@/components/HowToWork.vue";
import WarmAir from "@/components/WarmAir.vue";
import Footer from "@/components/Footer.vue";
import SecondFooter from "@/components/SecondFooter.vue";
export default {
  components: {
    NavBar,
    HeroSection,
    HowToWork,
    WarmAir,
    Footer,
    SecondFooter,
  },
};
</script>
