<template>
  <div class="firend">
           <div class="msghead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>关于我们 </div>
     <div class="header aboutlogo">
      <div class="logo">
        <img src="../../../public/img/3.png" alt="">
      </div>

    </div>
        <div class="aboutcont">
        Block chain is distributed data storage, point-to-point transmission, consensus mechanism, encryption algorithm the new application of computer technology, such as pattern. Block chain is an important concept in the currency, it is essentially a decentralized database, at the same time as the underlying technology of the currency, it is a list of associated with the use of cryptography method produce data block.
      </div>
        <div class="aboutimg">
          <img src="../../../public/img/32.png" alt="" srcset="">
          <div>扫一扫，下载BKL CHAIN</div>
        </div>


  </div>
</template>

<script>

export default {
  name: "changepass",
  data() {
    return {
      radio3: '1',
    };
  },
  methods:{
      back(){
          this.$router.back(-1)
      },
      submit(){
          console.log(this.phone)
      }
  }
};
</script>

<style lang="less" scoped>

.aboutlogo{
  .logo{
    padding-top: 180px
  }
  margin-top: -80px;
  padding-bottom: 60px;
}
.aboutcont{
  font-size: 12px;
  color:white;
  line-height: 2;
  padding: 40px 20px 20px 20px ;
}
.aboutimg{
    font-size: 12px;
  color:white;
  line-height: 2;
}
.aboutimg{
  margin-top: 40px;
  text-align: center;
  img{
    width: 120px;
  }
}
</style>
