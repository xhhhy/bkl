<template>
  <div class="myorder">
    <div class="orderhead">
     <div class="msghead newhead">我的合约</div>
      <div class="buy newbuy">
                 <div class="pricehead">
                    <img src="../../../public/img/16.png" alt="">  <span class="my">我的利息钱包</span> 
                </div>
      </div>
         <div class="usdt">
            <div class="usdtmoney"><span>$</span> 300.21</div> 
              <div class="ustdin"><router-link to="ustdinto"><span>转入资产</span></router-link>  </div> 
          </div>

          <div class="ustdtitle">
            <el-row>
              <el-col :span="8"><div >
                  <div>1.00%</div>
                  <div class="ustdname">昨日收益</div>
                </div></el-col>
              <el-col :span="8"><div class="ustdlist2" ><div >
                  <div>1.00%</div>
                  <div class="ustdname">昨日收益</div>
                </div></div></el-col>
              <el-col :span="8" class="ustdlist3"><div><div >
                  <div>1.00%</div>
                  <div class="ustdname">昨日收益</div>
                </div></div></el-col>
            </el-row>
              
          </div>

        </div>
          <div class="buy">
                 <div class="pricehead">
                        <img src="../../../public/img/9.png" alt="">  <span class="my">我的合约</span> 
                </div>
            </div>
            <div class="daylists">
                    <div class="daylist ustdlist" v-for=" (item,i) in datalist" :key="i">
                        <el-row>
                        <el-col :span="4"><div><img :src="item.image" alt=""></div></el-col>
                        <el-col :span="7"><div>
                          <div>{{item.number}}</div> 
                          <div class="ustdday">剩余<span style="color:#0fbcfa">{{item.day}}</span>Day</div>
                          </div></el-col>
                        <el-col :span="4"><div class="centerustd">
                          <div>{{item.number}}</div> 
                          <div class="ustdday">$1000</div>
                          </div></el-col>
                        <el-col :span="8"><div class="ustdr"><span   @click="buyitem1(item)"  class="ustlogt">出仓</span><span class="ustsave" @click="buyitem(item)">增值</span></div></el-col>
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
                          <div class="takust"> 当前合约金额/剩余合约天数</div>
                         <div style="margin:10px"><el-input v-model="input2" placeholder="请输入100的倍数的USTD"></el-input></div>
                          <div class="takust"> 增值的金额</div>
                         <div style="margin:10px"><el-input v-model="input1" placeholder="请输入100的倍数的USTD"></el-input></div>
                        <div @click="submit" class="tofir">确认</div>

                </div>
               
                </el-dialog>
                    <el-dialog
                title=""
                :visible.sync="dialogVisible1"
                width="85%"
                :before-close="handleClose1">
                <div class="loadcont">
                        <div class="ustround ustindex">
                            <img :src="zeng.image" alt="">
                        </div>
                        <div>{{zeng.number}}</div>
                        <div class="small">{{zeng.name}}</div>
                         <div class="takust"> 当前合约天数</div>
                         <div style="margin:10px"><el-input v-model="input3" placeholder="请输入100的倍数"></el-input></div>
                          <div class="takust"> 剩余合约天数</div>
                         <div style="margin:10px"><el-input v-model="input4" placeholder="请输入100的倍数的USTD"></el-input></div>
                          <div class="takustss"> 出仓说明：<br> 合约分仓管理制：未到期出仓的收取20%进入风控基金。 <br></div>

                        <div @click="submit1" class="tofir">提前出仓</div>

                </div>
               
                </el-dialog>
     <navfoot/>
  </div>
</template>

<script>
import navfoot from "../../components/nav"

export default {
  name: "myorder",
  components:{ navfoot},
  data() {
    return {
         input:"123456",
        input1:"",
        input2:"123456",
        input3:"123123",
        input4:"123456",
        dialogVisible:false,
        dialogVisible1:false,

           buy:{
               image: require('../../../public/img/10.png'),number:"15 Day",name:"+0.77%"
           },
           zeng:{
               image: require('../../../public/img/10.png'),number:"15 Day",name:"+0.77%"
           },

         datalist:[

               {
               image: require('../../../public/img/10.png'),day:"1" ,number:"+1.2%",name:"+0.77%"
           },
              {
               image: require('../../../public/img/11.png'),number:"+1.2%",name:"+0.77%",day:"1"
           },  {
               image: require('../../../public/img/12.png'),number:"+1.2%",name:"+0.77%",day:"1"
           }
           ]
    };
  },
  methods:{
       buyitem(item){
            this.buy=item
            this.dialogVisible=true
        },
         buyitem1(item){
            this.zeng = item
            this.dialogVisible1=true
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
         handleClose1(){
             this.dialogVisible1=false
        },
        submit(){
            console.log(411)
        },
        submit1(){
          console.log(222)
        }
  }
};
</script>

<style lang="less" scoped>
.ustdlist2{
  text-align: center;
}
.ustdlist3,.ustdr{
  text-align: right;
}

.ustdtitle{
  color:#0fbcfa;
  padding: 0 20px 20px 20px;
  font-size: 16px;
}
.centerustd{
    text-align: left;
}
.ustdin{
  font-size: 14px;
  margin-top: 10px;
  a{
    color: white;
  }
  span{
    font-size: 12px;
    background: #0fbcfa;
    border-radius: 10px;
    padding: 7px 15px 5px 15px ;
    line-height: 2;
  }
}
.orderhead,.newhead{
    background: #192129;
}
.ustdname{
  font-size: 12px;
  color: #999
}
.myorder{
  color: white
}
.newbuy{
  border: none;
    img{
      top: 0px;
      width: 15px;
  }
}
.ustdlist{
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 1.4;
  font-size: 14px;
}
.ustdday{
  color: #999;
  font-size: 10px;
 span{
   padding:  0 5px 
 }
}
.ustsave{
  padding: 5px 10px 5px 10px;
  background: #0fbcfa;
  color: black;
  font-size: 12px;
  border-radius: 8px;
}
.ustlogt{
  padding: 4px 10px 4px 10px;
  background: #1f2933;
  color: #fff;
  border: 1px solid #0fbcfa;
  font-size: 12px;
  border-radius: 8px;
  margin-right: 10px;

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
.takustss{
   color: #999;
    font-size: 12px;
    text-align: left;
    padding-left: 10px;
    line-height: 2;
}
.tofir{
  text-align: center;
  font-size: 14px;
  background-color: #0fbcfa;
  border-radius: 15px;
  margin-top: 50px;
}

</style>
