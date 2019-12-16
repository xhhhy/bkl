<template>
  <div>
      <div class="pay-tool">
        <div class="pay-tool-title border-bottom">
          <span class="icon1 icon-back"></span>
        </div>
        <!--密码输入框-->
        <div class="pay-tool-content">
          <div class="pay-tool-inputs">
            <div class="item" v-for="i in items" :key="i" >
              <span class="icon_dot" v-if="password[i]">{{password[i]}}</span>
            </div>
          </div>
        </div>
        <!--键盘-->
        <div class="pay-tool-keyboard">
          <ul>
            <li @click="keyUpHandle($event)" v-for="val in keys" :key="val" >
              {{ val }}
            </li>
            <li class="del" @click="delHandle" >
              <span class="icon-del el-icon-back"></span>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];
export default {
  name: "Pin",
  data() {
    return {
      centerDialogVisible: false,
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: []
    };
  },
  methods: {
    open(flag) {
      this.centerDialogVisible = !this.centerDialogVisible;
      this.clearPasswordHandle();
    },
    keyUpHandle(e) {
      let text = e.currentTarget.innerText;
      let len = this.password.length;
      if (!text || len >= 6) return;
      this.password.push(text);
      this.ajaxData();
    },
    //删除密码
    delHandle() {
      if (this.password.length <= 0) return false;
      this.password.pop();
    },
    ajaxData() {
      if (this.password.length >= 6) {
        let that = this;
        let password = this.password.join("");
        //提交方法传给父组件
        this.$emit("submit", password);
        this.centerDialogVisible = !this.centerDialogVisible;
        setTimeout(()=>{
        this.clearPasswordHandle();
        },1000)
      }
      return false;
    },
    //清空密码
    clearPasswordHandle() {
      this.password = [];
    }
  }
};
</script>

<style lang="less" scoped>
@blue: #0fbcfa;
@gray: #999999;
@red: #e01d43;
@white: white;
@bgk: #051e32;
@borderColor: #1e3547;
@footer: #051624;
.pay-tool {
    overflow: hidden;
    position: fixed;
    display: block;
    min-height: 80vh;
    bottom: 0;
    left: 0;
    width: 100%;
    margin-top: 30px;
}

.pay-tool-title {
    width: 100%;
    height: 2.08888888rem;
    line-height: 2.08888888rem;
    text-align: center;
    overflow: hidden;

    p {
        color: @white
    }
}

.icon1 {
    float: left;
    margin-top: 0.72222222rem;
}

strong {
    font-size: 16px;
}

.pay-tool-inputs {
    width: 312px;
    height: 32px;
    margin: 1.28888888rem auto 0;
    border-radius: 0.26666666rem;
    text-align: center;
}

.item {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
     border-bottom: 1px solid #999;
    // border-radius: 50%;
    margin: 10px;
    float: left;
    overflow: hidden;
}

.icon_dot {
    display: block;
    width: 30px;
    height: 30px;
    //  background: url('../../public/img/round.png') no-repeat center;
    background-size: cover;
}

.pay-tool-keyboard {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
}

.pay-tool-keyboard ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.pay-tool-keyboard li {
    list-style: none;
    width: 33.1333%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 22px;
    color: @white;
}

</style>
