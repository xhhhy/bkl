<template>
  <div class="home">        
       <Head data="设置密码" />
       <div class="setpass">
              <el-form :model="ruleForm" status-icon  ref="ruleForm"  class="demo-ruleForm">
            <el-form-item prop="user" >
                <el-input  :placeholder="placeholder.user" v-model="ruleForm.user" autocomplete="off"></el-input>
            </el-form-item>
                <el-form-item prop="phone" >
                 <el-input :placeholder="placeholder.phone"  v-model="ruleForm.phone" class="input-with-select">
                    <select  slot="prepend"  :value="select" placeholder="请选择">
                        <option label="中国+86" value="1"></option>
                        <option label="中国+87" value="2"></option>
                        <option label="中国+88" value="3"></option>
                    </select>
                </el-input>
            </el-form-item>   
             <el-form-item prop="virify" >
                <el-input  :placeholder="placeholder.virify" v-model="ruleForm.virify" autocomplete="off">
                    <template slot="append"><div class="fonts">DFVA</div></template>
                </el-input>
            </el-form-item>   
             <el-form-item prop="message" >
                <el-input  :placeholder="placeholder.message" v-model="ruleForm.message" autocomplete="off">
                    <template slot="append"><div class="send">发送</div></template>

                </el-input>
            </el-form-item>  
              <el-form-item prop="password" >
                <el-input type="password" :placeholder="placeholder.password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item> 
               <el-form-item prop="password1" >
                <el-input type="password" :placeholder="placeholder.password1" v-model="ruleForm.password1" autocomplete="off"></el-input>
            </el-form-item>
              <el-form-item>
                  <div class="submit">
                <el-button type="primary" @click="onSubmit">重置密码</el-button>
                  </div>
            </el-form-item>
            </el-form>
       </div>
  </div>
</template>

<script>

import Head from "../../components/header.vue"

export default {
  name:"password",
  components:{
      Head
  },
  data() {
       return {
           select:"1",
        ruleForm: {
            user:"",
            phone:"",
            virify:"",
            message:"",
            password:"",
            password1:"",

        },
        rules:{
            // user:{required: true, message: '账户不能为空'},
            //  phone:{required: true, message: '手机号不能为空'}
        },
        placeholder :{
            user:"请输入用户账号",
            phone:"请输入手机号",
            virify:"请输入右侧验证码",
            message:"请输入短信验证码",
            password:"请输入新的登录密码",
            password1:"请确认新的登录密码",
        }
      }
    },
    methods:{
       onSubmit(){
           console.log(this.ruleForm)
           console.log(this.select)
       }
    }
}
</script>

<style lang="less" scoped>
.fonts{
    font-style:oblique
}
.setpass{
  width: 85%;
  margin: 0 auto;
  margin-top: 25px;
}

  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
.send{
    cursor: pointer;
}
.submit{
    button{
        width: 100%;
    }
}
</style>


