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
                    <div class="daylist"   v-for=" (item,i) in datalist"  @click="buyitem(item)" :key="i">
                        <el-row>
                        <el-col :span="3"><div><img :src="item.image" alt=""></div></el-col>
                        <el-col :span="15"><div>{{item.number}}</div></el-col>
                        <el-col :span="6"><div class="listbot">{{item.name}}  <span><img src="../../../public/img/15.png" alt=""></span></div></el-col>
                        </el-row>
                    </div>
            </div>

            <el-dialog
                title=""
                :visible.sync="dialogVisible"
                width="85%"
                :before-close="handleClose">
                <div class="loadcont">
                        <div class="ustround ustindex">
                            <img :src="buy.image" alt="">
                        </div>
                        <div>{{buy.number}}</div>
                        <div class="small">{{buy.name}}</div>
                         <div class="takust"> 我的USTD</div>
                         <div style="margin:10px"><el-input v-model="input" placeholder="请输入100的倍数"></el-input></div>
                          <div class="takust"> 购买的金额</div>
                         <div style="margin:10px"><el-input v-model="input1" placeholder="请输入100的倍数的USTD"></el-input></div>
                        <div @click="submit" class="tofir">确认</div>

                </div>
               
                </el-dialog>
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
       return {input:"123456",
        input1:"",

           buy:{
               image: require('../../../public/img/10.png'),number:"15 Day",name:"+0.77%"
           },
           datalist:[
               {
               image: require('../../../public/img/10.png'),number:"15 Day",name:"+0.77%"
           },
             {
               image: require('../../../public/img/11.png'),number:"30 Day",name:"+0.77%"
           },  {
               image: require('../../../public/img/12.png'),number:"90 Day",name:"+0.77%"
           }
           ,  {
               image: require('../../../public/img/13.png'),number:"180 Day",name:"+0.77%"
           },  {
               image: require('../../../public/img/14.png'),number:"360 Day",name:"+0.77%"
           }
           ],
           dialogVisible:false
      }
    },
    methods:{
        buyitem(item){
            console.log(item)
            this.buy=item
            this.dialogVisible=true
        },
        toustd(){
            this.$router.push("/ustd")
        },
        toustake(){
            this.$router.push("/ustdtake")
        },
        handleClose(){
             this.dialogVisible=false
        },
        submit(){
            console.log(411)
        }
    }
}
</script>

<style lang="less" scoped>
.ustindex{
    margin-top: -60px;

}
.loadcont{
    text-align: center;
    font-size: 24px;
    .small{
        font-size: 14px;
        color: #999;
    }
    input{
        color:#0fbcfa!important;
    }
}
.takust{
    color: #999;
    font-size: 14px;
    text-align: left;
    padding-left: 10px;
    line-height: 2;
}
.tofir{
  text-align: center;
  font-size: 14px;
  background-color: #0fbcfa;
  border-radius: 15px;
  margin-top: 80px;
}

</style>


