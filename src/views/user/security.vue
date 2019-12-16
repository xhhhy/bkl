<template>
  <div class="security">
           <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>23123 </div>
           <div class="firendcont">
              <Pin @submit="submit" />   
          </div>
         
      

  </div>
</template>

<script>
import Pin from "../../components/pin.vue"
export default {
  name: "security",
  components:{Pin},
  data() {
    return {

    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      },
       submit(pwd) {
           console.log(pwd)
    }
  }
};
</script>

<style lang="less" scoped>
.security{
    color: #fff
}
.firend{
  color: white;
  font-size: 13px;
}
.firin{
  margin-bottom: 20px;
}

.tofir{
  text-align: center;
  font-size: 14px;
  background-color: #0fbcfa;
  border-radius: 5px;
  margin-top: 150px;
}

</style>
