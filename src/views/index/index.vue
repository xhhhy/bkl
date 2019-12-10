<template>
  <div class="index">
    <div class="indexcont">
        <div class="indexhead">
            <div class="top">
                <div class="head"><img src="../../../public/img/3.png" alt=""></div>
                            <div class="headnext">
                                <el-row >
                                    <el-col :span="12"><div @click="toustd">
                                        <div>
                                        <img src="../../../public/img/USDT.png" alt="">
                                        </div>
                                        <div>USDT充值</div>
                                        </div></el-col>
                                    <el-col :span="12"><div  class="img2">
                                        
                                        <div>
                                        <img src="../../../public/img/7.png" alt="">
                                        </div>
                                        <div>USDT提现</div>
                                        </div></el-col>
                                </el-row>
                            </div>
                        </div>
            </div>
           

            <div class="myprice">
                        <el-row >
                        <el-col :span="12">
                            <div class="pricehead">
                            <img src="../../../public/img/8.png" alt="">  <span class="my">我的资产</span> 
                            </div>
                            
                            </el-col>
                        <el-col :span="12"><div class="mx" >
                            交易明细  <span class="right" style="font-size:18px">></span>
                            </div></el-col>
                        </el-row>
                    </div>
                        <div class="usdt">
                            <div class="usdtmoney"><span>$</span> 300.21</div> 
                            <div class="usdtbottom">USDT</div> 
                        </div>
            </div>
            <div class="buy">
                 <div class="pricehead">
                            <img src="../../../public/img/9.png" alt="">  <span class="my">购买合约</span> 
                </div>
            </div>

            <div class="daylists">
                    <div class="daylist" v-for=" (item,i) in datalist" :key="i">
                        <el-row>
                        <el-col :span="3"><div><img :src="item.image" alt=""></div></el-col>
                        <el-col :span="15"><div>{{item.number}}</div></el-col>
                        <el-col :span="6"><div class="listbot">{{item.name}}  <span><img src="../../../public/img/15.png" alt=""></span></div></el-col>
                        </el-row>
                    </div>
            </div>


      <navfoot/>
  </div>
</template>

<script>
import navfoot from "../../components/nav"
export default {
  name:"home",
  components:{
      navfoot
  },
  data() {
       return {
           datalist:[
               {
               image: require('../../../public/img/10.png'),number:"123",name:"+0.77%"
           },
             {
               image: require('../../../public/img/11.png'),number:"123",name:"+0.77%"
           },  {
               image: require('../../../public/img/12.png'),number:"123",name:"+0.77%"
           }
           ,  {
               image: require('../../../public/img/13.png'),number:"123",name:"+0.77%"
           },  {
               image: require('../../../public/img/14.png'),number:"123",name:"+0.77%"
           }
           ]
      }
    },
    methods:{
        toustd(){
            this.$router.push("/ustd")
        }
    }
}
</script>

<style lang="less" scoped>
.daylists{
    margin: 20px;
    text-align: left;
    .daylist{
        line-height: 40px;
        margin: 10px 0 10px 0;
           border-bottom: 1px solid #363f48;
        img{
            width: 35px;
        }
    }
    .listbot{
        text-align: right;
        span{
            margin-left: 5px;
        }
        img{
        width: 10px;

        }
    }
}
.index{
    height: 100vh;
    background: #1f2933;
        color:white;

}
.buy{
    margin: 20px;
    font-size: 14px;
    border-bottom: 1px solid #363f48;
    padding-bottom: 10px;
    
}
.usdt{
    padding: 20px;
    padding-top: 0px;
.usdtmoney{
    font-size: 32px;
    color: #0fbcfa;
}
.usdtbottom{
    font-size: 14px;
    line-height: 1.5;
}
border-bottom: 5px solid #192129
}
.myprice{
    text-align: center;
    margin: 20px;
    font-size: 12px;

    border-bottom: 1px solid #363f48;
    padding-bottom: 15px
}
    .my,.right{
        margin-left: 5px
    }
.indexhead{
    background: #192129;
    padding: 20px;
    .head{
        img{
            width: 20%;
        }
    }
    .headnext{
        margin-top: 35px;
        text-align: center;
        font-size: 12px;
        line-height: 2;
        img{
            width: 35px;
        }
        .img2{
            img{
                width: 30px;
            }
        }
    }
}
.pricehead{
    vertical-align: center;
    text-align: left;
    img{
        position: relative;
        top: 3px;
        width: 15px;
        
    }
}
.mx{
    text-align: right;
}

</style>


