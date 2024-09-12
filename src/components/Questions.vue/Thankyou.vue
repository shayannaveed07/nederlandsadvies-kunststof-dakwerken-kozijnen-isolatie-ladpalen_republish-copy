<template>
  <div class="thankyou" v-if="showThankyou">
    <div class="container bg-white">
      <h1 class="text-center">
        Nederlandsadvies.nl analyseert nu je gegevens...
      </h1>
      <div class="progress" v-if="showThankyou">
        <div
          class="progress-bar"
          role="progressbar"
          id="progressBar"
          :style="{width : percentage + '%'}"
         
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <ul>
        <li v-for="list in lists" :key="list.value">{{ list.value }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        showThankyou: false,
        percentage:0,

      progress: 0,
      lists: [
        {
          value: "Jouw woning komt in aanmerking voor airconditioning",
        },
        {
          value: "Jij kunt besparen op je gasrekening met airconditioning",
        },
        {
          value: "Wij hebben de juiste vakmannen beschikbaar voor jou",
        },
        {
          value: "Bespaar tot 40% op de aansch",
        },
      ],
    };
  },
  computed: {
    progressBarStyle() {
      return { width: `${this.progress}%` };
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
    }
    ,
    startProgress() {
      const intervalId = setInterval(() => {
        this.percentage += 25;
        if (this.percentage >= 100) {
          clearInterval(intervalId);
        }
      }, 7000);
      if(this.percentage == 25){
        return this.lists.indexOf(this.lists[0])
      }
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
.container {
  padding: 7rem 5rem;
  border-radius: 2rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.progress-bar{
    background: #5dba01;
    transition: width 3s;
}
ul{
    margin-top:2rem
}
</style>
