<template>
  <div class="user">
    <div class="userhead"> 
      <div class="usermsg">
        <div class="msghead newhead">个性设置<span class="userout"><img src="../../../public/img/17.png" alt=""></span> </div>
      </div>
      <div class="usertitle">
        <el-row>
          <el-col :span="6">
          <div class="userimg">
          <img src="../../../public/img/18.png" alt="">
        </div>
        </el-col>
          <el-col :span="18">
          <div class="usercont">
              <div class="username">JESON</div>
              <div class="userphone">132********12</div>
        </div></el-col>
        </el-row>
      </div>
      <div class="usermune">
        <el-row>
                <el-col :span="8">
                  <router-link to="/firend">
                   <div class="userlist">
                    <div >
                    <img src="../../../public/img/19.png" alt="">
                  </div>
                  <div>邀请伙伴</div>
                  </div>
                  </router-link>
                 
                  
              </el-col>
                <el-col :span="8">
                  <router-link to="/myfirend">
                   <div class="userlist">
                    <div >
                    <img src="../../../public/img/20.png" alt="">
                  </div>
                  <div>我的伙伴</div>
                  </div>
                  </router-link>
                  
              </el-col>
               <el-col :span="8">
                  <router-link to="/firustd">
                   <div class="userlist">
                    <div >
                    <img src="../../../public/img/21.png" alt="">
                  </div>
                  <div>USTD绑定</div>
                  </div>
                  </router-link>

              </el-col>
              </el-row>

      </div>

    
      
    </div>
    <div class="munel">
        <div class="usermunelist"  v-for="(item,i) in munelist" :key="i" >
          <router-link :to="item.url">
            <div class="munelist">
                  <el-row>
                      <el-col :span="2">
                        <div class="listimage">
                          <img :src="item.img" alt="">
                        </div>
                      </el-col>
                      <el-col :span="16">
                        <div>{{item.name}}</div>
                      </el-col>
                      <el-col :span="4">
                        <div class="grid-content" style="color:#0fbcfa;width:100%">{{item.title}}</div>
                      </el-col>
                      <el-col :span="2">
                        <div class="listfoot">
                          <img src="../../../public/img/27.png" alt="">
                        </div>
                      </el-col>
                    </el-row>
            </div>
            </router-link>
          </div>
    </div>
          
  <navfoot/>
  </div>
</template>

<script>
import navfoot from "../../components/nav"

export default {
  name: "user",
  components:{ navfoot},

  data() {
    return {
        munelist:[
          {name:"手机绑定",title:"",img:require('../../../public/img/22.png'),url:"/phonebind"},
          {name:"登录密码",title:"",img:require('../../../public/img/23.png'),url:"/changepss"},
          {name:"安全码",title:"未设置！",img:require('../../../public/img/24.png'),url:"/security"},
          {name:"语言设置",title:"",img:require('../../../public/img/25.png'),url:"/language"},
          {name:"关于我们",title:"",img:require('../../../public/img/26.png'),url:"/about"},
          
        ]
    };
  }
};
</script>

<style lang="less" scoped>

  .grid-content {
    border-radius: 4px;
    min-height: 25px;
  }
.munel{
  margin-top: 40px;
}
.listfoot{
  text-align: right;
  img{
    width: 8px;
    height: 15px;
  }
}
.userhead{
  background-color: #192129;
}
.usertitle{
  color: white;
  padding: 20PX;
  .userimg{
      img{
        width: 90%;
      }
  }
}
.username{
  font-size: 18px;
  padding-top: 18px;
}
.userphone{
  font-size: 12px;
  margin-top: 3px
}
.usermunelist{
  border-bottom: 1px solid  #363f48;
  padding-bottom: 10px;
  margin: 20px;
  font-size: 12px;
  a{
  color: #dfe0e0;

  }
}
.usermune{
  text-align: center;
  padding-bottom: 30px;
}
.listimage{
  img{
    width: 12px;
  }
}
.userlist{
  color: white;
  line-height: 2;
  font-size: 12px;
  img{
    width: 40px;
  }
}


</style>
