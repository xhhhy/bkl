<template>
  <div class="firend">
           <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>修改密码 </div>
           <div class="firendcont">
          <div>原登录密码 </div>
          <div class="firin">  
              <el-input  placeholder="请您输入原登录密码" v-model="phone" autocomplete="off">
            </el-input>
        </div>
          <div>新登录密码</div>
            <div class="firin">  
              <el-input  placeholder="请您输入新的登录密码" v-model="phone" autocomplete="off">
            </el-input>
            </div>

            <div class="firin">  
              <el-input  placeholder="请您确认新的登录密码" v-model="phone" autocomplete="off">
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
