<template>
  <div class="secondQuestion">
    <div class="container mt-5 p-5">
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 67%"
          aria-valuenow="67"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {{ percentage }}%
        </div>
      </div>
      <div class="card mt-4">
        <div class="row">
          <div class="content col-md-8">
            <img src="../../assets/Arrows1.png" alt="" class="mb-4" />
            <h6 class="text-warning">Vraag 2 van 3</h6>
            <h1 class="first-heading">
              Welk type airco ben je in geïnteresseerd?
            </h1>
            <div class="form-check mb-2" @click="shownext">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Vaste airco met buitenunit (split airco)
              </label>
            </div>
            <div class="form-check mb-2" @click="shownext">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Vaste airco zonder buitenunit (monoblock)
              </label>
            </div>
            <div class="form-check" @click="shownext">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Ik wil graag advies
              </label>
            </div>
          </div>
          <div class="map col-md-4 position-relative">
            <img
              src="../../assets/secondQuestion.png"
              class="position-absolute"
            />
            <!-- <GoogleMapSection/> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import GoogleMapSection from '../GoogleMapSection.vue';

export default {
  name: "SecondQuestion",
  components: {
    // GoogleMapSection,
  },
  data() {
    return {
      percentage: 67,
    };
  },
  methods: {
    shownext() {
      // this.percentage += 34;
      this.$parent.showLastQuestion();
    },
  },
};
</script>

<style scoped>
* {
  font-weight: 800;
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
  margin-left: 14rem;
}
.card {
  padding: 7rem 5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
.image img {
  top: -7rem;
  left: 3.5rem;
  height: 30.05rem;
  border-radius: 0 10px 10px 0;
}
.check-item {
  background-color: #fff;
  border: 1px solid #f5f0f0;
  /* padding: 4px 12px; */
  width: 100%;
  padding: 1rem;
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
}
.map img {
  top: -7rem;
  left: 0.5rem;
  height: 35.075rem;
  border-radius: 0 10px 10px 0;
}
</style>
