
<template>
  <div class="message">


    <div class="msghead">系统消息</div>
    <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="私人信箱" name="first">  
            <div class="mymsg">
              <div class="msglist" @click="tomsg">
                <div class="time">2019/12/01 14:00</div>
                <div class="success">恭喜您的100USDT已充值成功！</div>
              </div>
              <div class="msglist">
                <div class="time">2019/12/01 14:00</div>
                <div class="success">恭喜您的100USDT已充值成功！</div>
              </div>
              <div class="msglist">
                <div class="time">2019/12/01 14:00</div>
                <div class="success">恭喜您的100USDT已充值成功！</div>
              </div>
            </div>
</el-tab-pane>
        <el-tab-pane label="系统公告" name="second">
             <div class="mymsg">
              <div class="msglist">
                <div class="time">2019/12/01 14:00</div>
                <div class="success">恭喜您的100USDT已充值成功！</div>
              </div>
            
            </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <navfoot />
  </div>

</template>

<script>
import navfoot from "../../components/nav"
export default {
  name: "message",
  components:{navfoot},
  data() {
    return {
      activeName:"first"
    };
  },
  methods:{
    tomsg(){
      this.$router.push("/msgcontent")
    },
    handleClick(){}
  }

};
</script>

<style lang="less" scoped>



</style>
