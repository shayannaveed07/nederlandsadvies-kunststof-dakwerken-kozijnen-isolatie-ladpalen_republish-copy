<template>
  <div class="thankyou" v-if="showThankyou">
    <NavBar />
    <div class="container bg-white">
      <h1 class="text-center">
        Nederlandsadvies.nl analyseert nu je gegevens...
      </h1>
      <div class="progress" v-if="showThankyou">
        <div
          class="progress-bar"
          role="progressbar"
          id="progressBar"
          :style="{ width: percentage + '%' }"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <ul class="list-item">
        <li v-show="percentage > 30" class="mb-4">
          Jouw woning komt in aanmerking
          <span class="text-success">voor airconditioning</span>
        </li>
        <li v-show="percentage > 60" class="mb-4">
          Jij kunt besparen op je gasrekening
          <span class="text-success">met airconditioning</span>
        </li>
        <li v-show="percentage > 80" class="mb-4">
          Wij hebben de juiste vakmannen<span class="text-success"
            >beschikbaar voor jou
          </span>
        </li>
        <li v-show="percentage > 100">
          Bespaar tot 40% <span class="text-success">op de aansch </span>
        </li>
      </ul>
      <h1 class="text-center" v-show="percentage > 100">
        We sturen je nu door om de woningscan af te ronden...
      </h1>
    </div>
    <SecondFooter />
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
import SecondFooter from "../SecondFooter.vue";
export default {
  components: {
    NavBar,
    SecondFooter,
  },
  data() {
    return {
      showThankyou: false,
      percentage: 0,

      progress: 0,
    };
  },
  computed: {
    progressBarStyle() {
      return { width: `${this.percentage}%` };
    },
  },
  //   watch: {
  //     showThankyou(newValue) {
  //       if (newValue) {
  //         this.startProgress();
  //       }
  //     },
  //   },
  methods: {
    showThankyou() {
      this.showThankyou = true;
      this.startProgress();
    },
    startProgress() {
      const intervalId = setInterval(() => {
        this.percentage += 10;

        if (this.percentage >= 120) {
          console.log(this.percentage, "percen");
          clearInterval(intervalId);
          this.$parent.showApplication(this.percentage)
          // this.$router.push("/application");
        }
      }, 1000);
      // if (this.percentage == 25) {
      //   return this.lists.indexOf(this.lists[0]);
      // }
      // if(this.percentage == 100){
      //   this.$router.push('/application');
      // }
    },
  },
  //   mounted() {
  //     this.$watch(
  //       () => this.showThankyou,
  //       (newValue) => {
  //         if (newValue) {
  //           this.startProgress();
  //         }
  //       }
  //     );
  //   },

  created() {
    this.showThankyou = true;
    this.startProgress();
  },
};
</script>

<style scoped>
.thankyou{
  background: #FFE785;

}
.container {
  padding: 7rem 5rem;
  border-radius: 2rem;




  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.progress-bar {
  background: #5dba01;
  transition: width 3s;
}
ul {
  margin-top: 2rem;
  font-size: 1.5rem;
}
</style>
