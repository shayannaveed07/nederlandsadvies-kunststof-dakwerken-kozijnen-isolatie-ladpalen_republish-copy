<template>
  <div class="application">
    <NavBar />
    <div class="content">
      <div class="card mt-4 mx-5">
        <div class="content">
          <h1 class="text-center first">Bedankt!</h1>
          <h2 class="text-center second">
            Ontvang gratis en vrijblijvend 4 superscherpe  offertes op maat van
            de beste lokale specialisten.  
          </h2>
          <h6 class="text-center text-warning">
            Al meer dan 1,2 miljoen mensen ging je voor.
          </h6>
          <div class="input-field text-center">
            <form class="d-flex justify-content-center mt-4 flex-column align-items-center" @submit.prevent="shownext">
              <div class="firstinput d-flex">
              <input
                required
                type="text"
                placeholder="Voornaam"
                class="input-box"
                v-model="firstName"
              />
              <input
                required
                type="text"
                placeholder="Achternaam"
                class="input-box"
                v-model="surName"
              />
            </div>
              <div class="secondinput d-flex">
                <input
                required
                type="text"
                placeholder="Telefoonnummer"
                class="input-box"
                v-model="postCode"
              />
              <input
                required
                type="text"
                placeholder="E-mailadres"
                class="input-box"
                v-model="email"
              />
              </div>
              <button class="btn btn-warning first-btn" type="submit">
            Aanvraag Afronden
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
          <!-- <div class="input-field2 text-center"> -->
            <!-- <form class="d-flex justify-content-center mt-4">
            
            </form> -->
            <!-- <form>
                  <input
                    type="text"
                    placeholder="Straatnaam"
                    class="input-box"
                    v-model="streetNumber"
                  />
                </form> -->
            <!-- <ul>
                    <li v-for="error in errors" :key="error.title">{{ error.title }}</li>
                </ul> -->
          <!-- </div> -->
         
        </div>
      </div>
      <SecondFooter />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import SecondFooter from "./SecondFooter.vue";

export default {
  components: {
    NavBar,
    SecondFooter,
  },
  data() {
    return {
      firstName: "",
      surName: "",
      postCode: "",
      email: "",
      errors: [
        {
          title: "please enter your first name",
        },
        {
          title: "please enter your sur name",
        },
        {
          title: "please enter your postcode",
        },
        {
          title: "please enter your email",
        },
      ],
    };
  },
  methods: {
    shownext() {
      // if(this.firstName == "" && this.surName == "" && this.postCode == "" && this.email == ""){
      //     this.errors.forEach(error => {
      //         error.show = true
      //     }

      //     )
      // }else{

      this.$router.push("/");
      // }
    },
  },
};
</script>

<style scoped>
* {
  font-weight: 800;
}
.application {
  background: #ffe785;
}
.first {
  font-size: 30.9px;
}
.second {
  font-size: 30.9px;
}
.first-heading {
  font-size: 45px;
}
.progress-bar {
  background: #5dba01;
}
.input-box {
  padding: 10px;
  /* border: none;
  outline: none;  */

  border: 1px solid #79676787;
  outline: none;
}
.first-btn {
  padding: 0.5rem 12.05rem;
  cursor: pointer;
  text-align: center;
  /* margin-left: 8rem; */
  margin-top: 1rem;
  border-radius: 2rem;
  cursor: pointer;
}
.card {
  padding: 3rem 16rem;
  border-radius: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
  margin-bottom: 2rem;
}
.image img {
  top: -7rem;
  left: 3.5rem;
  height: 29.9rem;
  border-radius: 0 10px 10px 0;
}
</style>
