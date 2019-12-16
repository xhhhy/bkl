<template>
  <div class="firend">
           <div class="msghead "> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>邀请伙伴 </div>
           <div class="firendcont nfirendcont">
          <div>伙伴账号 </div>
          <div class="firin"> <el-input v-model="name" placeholder="请输入伙伴账号"></el-input></div>
          <div>伙伴手机号码</div>
          <div > <el-input v-model="phone" placeholder="请输入伙伴手机号码"></el-input></div>
          <div @click="submit" class="tofir">邀请</div>
          </div>
         
      

  </div>
</template>

<script>
export default {
  name: "firend",
  data() {
    return {
      name:"",
      phone:""
    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      },
      submit(){
          console.log(this.phone)
      }
  }
};
</script>

<style lang="less" scoped>
.firend{
  color: white;
  font-size: 13px;
}
.firendcont{
  line-height: 3;
    padding: 20px;
    background: #141a21;
    height: 100vh;
}
.firin{
  margin-bottom: 40px;
}
.tofir{
  text-align: center;
  font-size: 14px;
  background-color: #0fbcfa;
  border-radius: 15px;
  margin-top: 150px;
}
.nfirendcont{
  background: #1f2933;
}

</style>
