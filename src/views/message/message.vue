
<template>
  <div class="message">


    <div class="msghead">系统消息</div>
    <div class="content">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="私人信箱" name="first">  
            <div class="mymsg">
              <div class="msglist">
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
  }
};
</script>

<style lang="less" scoped>
.mymsg{
  margin-top: 15px;
  .msglist{
    margin: 20px;
    border-bottom: 1px solid #363f48;
    padding-bottom: 10px;
    .time{
      font-size: 12px;
      letter-spacing: 1px;
      color: #999;
      line-height: 2;
    }
    .success{
      font-size: 14px;
    }
  }
}


</style>
