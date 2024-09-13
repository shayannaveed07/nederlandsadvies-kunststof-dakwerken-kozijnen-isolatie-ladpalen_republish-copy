<template>
  <div class="third-question">
    <div class="container mt-5 p-5">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ percentage }}%
        </div>
      </div>
      <div class="card mt-4">
        <div class="row">
          <div class="content col-md-8">
            <img src="../../assets/Arrows1.png" alt="" class="mb-4 arrow" />
            <h6 class="text-warning">Vraag 3 van 3</h6>
            <h1 class="first-heading">
              In hoeveel ruimtes wil je de airconditioning installeren?
            </h1>
            <form @submit.prevent="shownext">
              <input
                required
                type="text"
                placeholder="Vul het aantal ruimtes in"
                class="input-box"
                v-model="rooms"
              />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Ik weet niet hoeveel ruimtes
                </label>
              </div>
              <button class="btn btn-warning third-btn" type="submit">
                Volgende
              </button>
            </form>
          </div>
          <div class="image col-md-4 position-relative">
            <img src="../../assets/third.png" class="position-absolute" />
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      postCode: "",
      houseNumber: "",
      // streetNumber: "",
      percentage: 100,
      rooms: "",
      startLoading: false,
    };
  },
  methods: {
    shownext() {
      this.$router.push("/thankyou")
      // if (this.rooms == "") {
      //   alert("Vul het aantal ruimtes in");
      //   return;
      // } else {
      //   this.startLoading = true;
      //  this.startProgress()
      // }
    },
    // startProgress() {
      // const interval = setInterval(() => {
      //   this.percentage += 10;
      //   if (this.percentage >= 100) {
      //     clearInterval(interval);
      //     this.startLoading = false;
      //     this.$parent.showThankYou();
      //   }
      // }, 3000);
    // },
  },
  showprevious(){
      this.$parent.showPreviousSection()
    }
};
</script>

<style scoped>
* {
  font-weight: 800;
}
.first-heading {
  font-size: 45px;
}
.arrow{
  cursor:pointer
}
.progress-bar {
  background: #5dba01;
}
.input-box {
  border: 1px solid #cecece;
  padding: 0.5rem;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.first-btn {
  margin-left: 16rem;
  margin-top: 2rem;
}
.card {
  padding: 2rem 5rem;
  border-radius: 2rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
.image img {
  top: -2rem;
    left: -0.5rem;
    height: 28.2rem;
  border-radius: 0 10px 10px 0;
  width: 126%;
}
.third-btn {
  padding: 10px 4rem;
  border-radius: 3rem;

  cursor: pointer;
  margin-left: 21rem;
}
.form-check-input {
  background: #ffcd02;
  border: none;
}
.form-check-input:checked {
  background: #ffcd02;
  border: none;
}
.form-check {
  border: 1px solid #efe5e5fc;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 1rem;
  width: 90%;
}
</style>
