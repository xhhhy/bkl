<template>
  <div class="firend">
           <div class="msghead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>USTD绑定 </div>
           <div class="firendcont nfirendcont">
          <div>USTD地址 </div>
          <div class="firin"> <el-input v-model="name" type="textarea" height="200"  placeholder="请输入或长按粘贴你的USTD地址"></el-input></div>
           <div class="ustdt">
                <div>温馨提醒</div>
                <div class="ustdfi"> 
                1、平台只允许TRC20协议发行的USDT地址；<br>
                2、只接受ERC20协议USDT；<br>
                3、如因个人原因绑定错误，产生无法到账与本平台无关；<br>
                4、为保障您的账户安全，<span style="color:#0fbcfa">绑定后无法修改</span>，请谨慎操作。<br>
                </div>
              </div>
          <div @click="submit" class="tofir">绑定</div>
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
.ustdfi{
    line-height: 1.8;
}
.nfirendcont{
  background: #1f2933;
}

</style>
