<template>
  <div class="ustd">
        <div class="ustdheader">
         <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>USDT提现<span class="ustdrecord"><img src="../../../public/img/29.png" alt=""></span> </div>
        </div>
        <div class="ustcont saveustd">
          <div class="ustround">
              <img src="../../../public/img/30.png" alt="">
          </div>
          <div class="ustdnum">
              $1000.00
          </div>
          <div>我的USTD</div>
            <div class="takeustd"> 提现数量</div>
            <div style="margin:20px"><el-input v-model="input" placeholder="请输入100的倍数"></el-input></div>
            <div class="ustdbuy">提现</div>
        </div>
  </div>
</template>

<script>
export default {
  name: "ustd",
  data() {
    return {
      input:"100",
    };
  },
  methods:{
    back(){
      this.$router.back(-1)
    },
  }

};
</script>

<style lang="less" scoped>
.ustdnum{
    font-size: 32px;
}
.takeustd{
    margin: 20px;
    margin-top: 50px;
    text-align: left;
}
.ustdbuy{
    background: #1ba27a;
    margin: 20px;
    padding: 15px 20px ;
    border-radius: 10px;
    margin-top: 140px;
}
.saveustd{
    padding-bottom: 60px;
}

</style>
