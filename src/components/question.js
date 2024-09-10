import Vue from "vue";
import Question from "./Question.vue";

new Vue({
  el: "#question-page",
  components: { Question },
  template: `
    <div>
      <Question />
    </div>
  `,
});