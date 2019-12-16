<template>
  <div class="firend">
           <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>手机号码绑定 </div>
           <div class="firendcont">
          <div>当前手机号码 </div>
          <div class="firin firinin"> <el-input v-model="name" disabled placeholder=""></el-input></div>
          <div class="firin">  
              <el-input  placeholder="请输入右侧验证码" v-model="phone" autocomplete="off">
                    <template slot="append"><div class="fonts">DFVA</div></template>
            </el-input>
        </div>
        <div class="firin">
             <el-input  placeholder="请输入短信验证码" v-model="send" autocomplete="off">
                    <template slot="append"><div class="send">发送</div></template>
                </el-input>
        </div>
          <div>新手机号码</div>
          <div class="firin" >  <el-input placeholder="请输入手机号码"  v-model="phone1" class="input-with-select">
                    <select  slot="prepend"  :value="select" placeholder="请选择">
                        <option label="中国+86" value="1"></option>
                        <option label="中国+87" value="2"></option>
                        <option label="中国+88" value="3"></option>
                    </select>
                </el-input></div>
            <div class="firin">  
              <el-input  placeholder="请输入右侧验证码" v-model="phone" autocomplete="off">
                    <template slot="append"><div class="fonts">DFVA</div></template>
            </el-input>
        </div>
        <div class="firin">
             <el-input  placeholder="请输入短信验证码" v-model="send" autocomplete="off">
                    <template slot="append"><div class="send">发送</div></template>
                </el-input>
        </div>
          <div @click="submit" class="tofir">确认</div>
          </div>
         
      

  </div>
</template>

<script>
export default {
  name: "firend",
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
