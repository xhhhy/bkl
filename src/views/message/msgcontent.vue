<template>
  <div class="msgcontent">
    <div class="msghead"> <span  @click="back" class="back">返回</span>系统公告</div>
      
       <div class="msglist">
                <div class="time">2019/12/01 14:00</div>
                <div class="success">恭喜您的100USDT已充值成功！</div>
       </div>
        <div class="msglistc">内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文案内容文</div>


  </div>
</template>

<script>
export default {
  name: "msgcontent",
  data() {
    return {
      
    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      }
  }
};
</script>

<style lang="less" scoped>
.msglistc{
    padding: 20px;
    color: #999;
    font-size: 12px;
    line-height: 2;
}
.back{
    display: block;
    float: left;
    
}
.msghead{
    padding: 20px;
    text-align: center;
}

</style>
