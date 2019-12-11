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
                                    <el-col :span="12"><div @click="toustake" class="img2">
                                        
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
        },
        toustake(){
            this.$router.push("/ustdtake")
        }
    }
}
</script>

<style lang="less" scoped>


</style>


