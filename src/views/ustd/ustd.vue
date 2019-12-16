<template>
  <div class="ustd">
        <div class="ustdheader">
         <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>USDT充值<span class="ustdrecord"><img src="../../../public/img/29.png" alt=""></span> </div>
        </div>
        <div class="ustcont">
          <div class="ustround">
              <img src="../../../public/img/30.png" alt="">
          </div>
          <div  class="usttitle">
              链类型：<span>ERC20</span> 
          </div>
          <div class="usdaddress">
              <div>充币地址</div>
              <div>123131654vdfsdfsssfgsgsd131313131131</div>
              <div @click="copy" class="copy">点击复制</div>
              <div>充值二维码</div>
              <div class="erwei">
                <div><img src="../../../public/img/31.png" alt=""> <span class="ustdsave">保存二维码到相册</span></div>
              </div>
              <div class="ustdt">
                <div style="color:#fff">充值提醒</div>
                <div> 
                1、本次充值仅支持ERC20(即ETH层层协议)，先自行确认否则资产不能到帐且无法退回；<br>
                2、请勿向上述地址充值任何非USDT资产，否则资产将不可找回；<br>
                3、您充值至上述地址后，需要整个网络节点的确认，网络确认后到帐，即可正确使用；<br>
                *最小充值金额为：1 USDT，小于最小金额的充值将不能上帐且无法退回。<br>
                </div>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ustd",
  data() {
    return {
      
    };
  },
  methods:{
    back(){
      this.$router.back(-1)
    },
    copy(){
        console.log("copy")
    }
  }

};
</script>

<style lang="less" scoped>

</style>
