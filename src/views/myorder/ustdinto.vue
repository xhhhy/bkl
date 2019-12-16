<template>
  <div class="firend">
           <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>我的利息钱包 </div>
           <div class="firendcont">
          <div>我的利息钱包 </div>
          <div class="firin firinb">  
              <el-input  placeholder="888.00" v-model="phone" autocomplete="off">
            </el-input>
        </div>
          <div>我的资产</div>
            <div class="firin firinb">  
              <el-input  placeholder="300.0" v-model="phone" autocomplete="off">
            </el-input>
            </div>
          <div>转入资产</div>
            <div class="firin">  
              <el-input  placeholder="请输入您的利息钱包转入资产的金额" v-model="phone" autocomplete="off">
            </el-input>
             </div>
          <div @click="submit" class="tofir">确认</div>
          </div>
         
      

  </div>
</template>

<script>
export default {
  name: "changepass",
  data() {
    return {
      name:"+86 138******2",
      phone:"",
      send:"",
      phone1:"",
      select:"1"
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
