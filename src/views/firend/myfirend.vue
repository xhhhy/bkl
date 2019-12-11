<template>
  <div class="myfirend">
           <div class="msghead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>我的伙伴 </div>
         
        <div class="daylists">
                    <div class="daylist" v-for=" (item,i) in datalist" :key="i">
                        <el-row>
                        <el-col :span="3"><div><img :src="item.image" alt=""></div></el-col>
                        <el-col :span="15"><div>{{item.number}}</div></el-col>
                        <el-col :span="6"><div class="listbot">{{item.name}}</div></el-col>
                        </el-row>
                    </div>
            </div>
  </div>
</template>

<script>
export default {
  name: "myfirend",
  data() {
    return {
              datalist:[
               {
               image: require('../../../public/img/10.png'),number:"123****123",name:"888.500"
           },
             {
               image: require('../../../public/img/11.png'),number:"123****123",name:"888.500"
           },  {
               image: require('../../../public/img/12.png'),number:"1123****1232",name:"888.500"
           }
           ,  {
               image: require('../../../public/img/13.png'),number:"123****123",name:"888.500"
           },  {
               image: require('../../../public/img/14.png'),number:"123****123",name:"888.500"
           }
           ]
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

.myfirend{
    color: white;
    font-size: 12px;
}
</style>
