<template>
  <section class="section">
    <div class="first-question">
      <div class="container mt-5 p-5">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 34%"
            aria-valuenow="34"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {{ percentage }}%
          </div>
        </div>
        <div class="card mt-4">
          <div class="row">
            <div class="content col-md-8">
              <img src="../../assets/Arrows1.png" alt="" class="mb-4 arrow" @click="showprevious"/>
              <h6 class="text-warning">Vraag 1 van 3</h6>
              <h1 class="first-heading">Wat is jouw adres?</h1>
              <div class="input-field">
                <form class="d-flex" @submit.prevent="shownext" >
                  <input
                    required
                    type="text"
                    placeholder="Postcode"
                    class="input-box"
                    v-model="postCode"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Huisnr"
                    class="input-box"
                    v-model="houseNumber"
                  />
                  <button
                class="btn btn-warning first-btn"
                type = "submit"
              >
                Volgende
              </button>
                </form>
                <!-- <form>
                  <input
                    type="text"
                    placeholder="Straatnaam"
                    class="input-box"
                    v-model="streetNumber"
                  />
                </form> -->
              </div>
              
            </div>
            <div class="image col-md-4 position-relative">
              <img
                src="../../assets/firstQuestion.png"
                class="position-absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      postCode: "",
      houseNumber: "",
      // streetNumber: "",
      percentage: 34,
    };
  },
  methods: {
    shownext() {
      // this.percentage += 34;
      this.$parent.showNextQuestions(this.postCode, this.houseNumber);
    },
    showprevious(){
      this.$parent.showPreviousSection()
    }
  },
};
</script>

<style scoped>
* {
  font-weight: 800;
}
.arrow{
  cursor:pointer
}
.first-heading {
  font-size: 45px;
}
.progress-bar {
  background: #5dba01;
}
.input-box {
  padding: 10px;
  border: none;
  outline: none;
}
.first-btn {
  position:absolute;
  margin-left: 13rem;
  margin-top: 5rem;
  padding: 10px 4rem;
  border-radius: 3rem;

  cursor: pointer;
}
.card {
  padding: 7rem 5rem;
  border-radius: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
.image img {
  top: -7rem;
  left: 6.5rem;
    height: 25.45rem;
  border-radius: 0 10px 10px 0;
}
</style>
