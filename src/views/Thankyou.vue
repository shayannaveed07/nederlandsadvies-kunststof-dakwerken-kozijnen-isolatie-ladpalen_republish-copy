<template>
  <div class="thankyouview">
    <Thankyou v-show="showThankyou"/>
    <Application v-show="showAppSub"/>
  </div>
</template>

<script>
import Thankyou from "@/components/Questions.vue/Thankyou.vue";
import Application from "@/components/Application.vue";
export default {
 data(){
  return{
    showThankyou: true,
    showAppSub : false
  }
 },
  components: {
    Thankyou,
    Application,
  },
  methods:{
    showApplication(percentage){
     if(percentage >=120){
      this.showThankyou = false;
      this.showAppSub = true;
     }
    }
  }
};
</script>
