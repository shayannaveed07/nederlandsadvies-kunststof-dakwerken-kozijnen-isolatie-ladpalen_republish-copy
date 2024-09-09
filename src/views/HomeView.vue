<template>
  <div class="homeView">
    <NavBar />
    <HeroSection />
    <HowToWork />
    <WarmAir />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroSection from "@/components/HeroSection.vue";
import HowToWork from "@/components/HowToWork.vue";
import WarmAir from "@/components/WarmAir.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    HeroSection,
    HowToWork,
    WarmAir,
  },
};
</script>
