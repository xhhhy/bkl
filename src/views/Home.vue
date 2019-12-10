<template>
  <div class="home">
    <Head :data="login" />
   <div class="form">
    <el-input
      placeholder="用户账号"
      suffix-icon="../../public/img/4.png"
      v-model="name">
    </el-input>
   <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
   <div style="height:16px">
  <div class="loginof" v-show="istrue">用户名或密码不正确 !</div>
   </div>
  </div>

  <div class="logininfo">
        <el-row>
      <el-col :span="10"><div class="pasword"><router-link to="password">忘记密码？</router-link> </div></el-col>
      <el-col :span="14"><div ><button @click="loginform" class="tologin">登录<span><img  src="../../public/img/6.png" alt=""></span></button></div></el-col>
    </el-row>
  </div>
  </div>
</template>
<script>
import Head from "../components/header"
export default {
  name:"home",
  components:{Head},
  data() {
       return {
        options: [{
          value: '1',
          label: 'English'
        }, {
          value: '2',
          label: '简体中文'
        }],
        value: '1',
        name:"",
        password:"",
        istrue:true,
        login:"登录"
      }
    },
    methods:{
      loginform(){
          this.$router.push("index")
      }
    }

}
</script>

<style lang="less" scoped>
.el-input{
  margin-bottom: 15px!important;
  input{

  }
}
.logininfo{
  width: 85%;
  margin: 0 auto;
  margin-top: 70px;
  a{
    text-decoration: none;
    color: white;
    padding-left: 10px;
  }
}.pasword{
  color: white;
  line-height: 45px;
  font-size: 14px;

}
.tologin{
  padding: 12px 80px 12px 80px;
  width: 100%;
  border-radius: 5px;
  vertical-align: center;
  background: #0fbcfa;
  color: white;
  border:none;
  img{
      width: 15px;
      position: relative;
      left: 50px;
  }
  }
.loginof{
  font-size: 12px;
  color: #c42040;

}
.form{
margin-top: 40px;
}
.el-input--suffix .el-input__inner{
  padding: 5px 0 5px 0!important
}


</style>


