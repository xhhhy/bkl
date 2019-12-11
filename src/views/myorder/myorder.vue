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
              <div class="ustdin"> <span>转入资产</span> </div> 
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
                        <el-col :span="8"><div class="ustdr"><span>储藏</span><span>增值</span></div></el-col>
                        </el-row>
                    </div>
            </div>

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
  span{
    font-size: 12px;
    background: #0fbcfa;
    border-radius: 10px;
    padding: 7px 15px 5px 15px ;
    line-height: 2;
  }
}
.orderhead{
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



</style>
