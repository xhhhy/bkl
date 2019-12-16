<template>
  <div class="firend">
           <div class="msghead newhead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>语言设置 </div>
        <div class="lange">

           <div class="firendcont">
                   <el-radio-group v-model="radio3" >
                    <el-radio label="1" border>English</el-radio>
                    <el-radio label="2" border >中文</el-radio>
                    </el-radio-group>
              <div @click="submit" class="tofir">确认</div>

          </div>
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
.firend{
  color: white;
  font-size: 13px;
}
.firin{
  margin-bottom: 20px;
}


.lange{
    padding-top: 70px;
    background: #192129
}

</style>
