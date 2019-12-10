<template>
  <div class="home">
    <div class="header">
      <div class="language">
        <span><img src="../../public/img/2.png" alt=""></span>
         <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
        </el-select>
      </div>
      <div class="logo">
        <img src="../../public/img/3.png" alt="">
      </div>

      <div class="logintitle">{{this.data}}</div>

    </div>
  </div>
</template>

<script>
export default {
  name:"headlist",
  props:{
      data:String
  },

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
      }
    }
}
</script>

<style lang="less" scoped>
.el-input{
  margin-bottom: 15px!important;

}
.logininfo{
  width: 85%;
  margin: 0 auto;
  margin-top: 70px;
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


