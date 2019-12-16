<template>
  <div class="myfirend">
           <div class="msghead"> <span  @click="back" class="back"><img src="../../../public/img/28.png" alt=""></span>我的伙伴 </div>
            <div class="peoplemy" @click="openload">全部伙伴：<span style="color:#0fbcfa">12</span>人>></div>
        <div class="daylists">
                    <div class="daylist" v-for=" (item,i) in datalist" :key="i">
                        <el-row>
                        <el-col :span="3"><div><img :src="item.image" alt=""></div></el-col>
                        <el-col :span="15"><div>{{item.number}}</div></el-col>
                        <el-col :span="6"><div class="listbot">{{item.name}}</div></el-col>
                        </el-row>
                    </div>
            </div>


            <el-dialog
                title=""
                :visible.sync="dialogVisible"
                width="85%"
                :before-close="handleClose">
                <div class="loadcont">
                <div>我的伙伴详情</div>
                <div class="loadlist">
                    <div  class="mylist">
                    <div>黄金</div>
                   <div style="font-size: 10px;color:#999">当前有效级别</div>
                    </div>
                     <div  class="mylist">
                    <div>黄金</div>
                   <div style="font-size: 10px;color:#999">当前有效级别</div>
                    </div> <div  class="mylist">
                    <div>黄金</div>
                   <div style="font-size: 10px;color:#999">当前有效级别</div>
                    </div> <div  class="mylist">
                    <div>黄金</div>
                   <div style="font-size: 10px;color:#999">当前有效级别</div>
                    </div>
                </div>

                </div>
               
                </el-dialog>
  </div>
</template>

<script>
export default {
  name: "myfirend",
  data() {
    return {  dialogVisible: false,
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
      openload(){
          this.dialogVisible=true
      },
      back(){
          this.$router.back(-1)
      },
       handleClose(done) {
            done();
      }

  }
};
</script>

<style lang="less" scoped>
.loadlist{
    display: flex;
    flex-wrap: wrap;
    line-height: 2;
    margin-top: 25px;
    .mylist{
        width: 40%;
        margin: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #363f48;
    }


}
.myfirend{
    color: white;
    font-size: 12px;
}
.peoplemy{
    text-align: right;
    margin: 20px;
    line-height: 2;
}
</style>
