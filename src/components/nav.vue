<template>
  <div>
    <el-footer  height="60px" id="nav">
      <el-row :gutter="15">
        <el-col :span="6" v-for="(item,index) in nav" :key="index">
          <router-link :to="item.url" active-class="active">
            <i class="icon iconfont" :class="item.iconClass"></i>
          </router-link>
        </el-col>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "navfoot",
  data() {
    return {
      nav:[
        {url:'/index',iconClass:'icon-hetongwenshu'},
        {url:'#',iconClass:'icon-touziguanli'},
        {url:'/message',iconClass:'icon-xiaoxi'},
        {url:'#',iconClass:'icon-custom-user'}
      ]
    };
  }
};
</script>

<style scoped>
</style>
