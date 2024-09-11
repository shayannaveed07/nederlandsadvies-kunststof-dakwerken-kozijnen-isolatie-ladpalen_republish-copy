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

            <div class="input-radio">
              <div class="check-item">
                <b-form-radio value="71" class="input-box"
                  >Vaste airco met buitenunit (split airco)
                </b-form-radio>
              </div>
              <div class="check-item mt-3">
                <b-form-radio value="72"
                  >Vaste airco zonder buitenunit (monoblock)</b-form-radio
                >
              </div>
              <div class="check-item mt-3">
                <b-form-radio value="73" style="color: #ffcd02"
                  >Ik wil graag advies</b-form-radio
                >
              </div>
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
</template>

<script>
export default {
  name: "SecondQuestion",
  data() {
    return {
      percentage: 67,
    };
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
.check-item input {
  margin-right: 1rem;
}
</style>
