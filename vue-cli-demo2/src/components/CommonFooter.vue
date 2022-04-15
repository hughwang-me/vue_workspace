<template>
  <div style="margin-top: 20px">
    <el-button-group>
      <el-button type="primary" @click="goLogin">登录</el-button>
      <el-button type="primary" @click="goMain">主页</el-button>
      <el-button type="primary" @click="goAbout">关于</el-button>
    </el-button-group>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "CommonFooter",
  setup(){
    let route = useRouter();

    let goLogin = () => {
      route.push('/login');
    };

    let goMain = () => {
      route.push('/');
    };

    let goAbout = () => {
      route.push('/about');
    };

    return{
      goLogin,
      goMain,
      goAbout
    }
  }
}
</script>

<style scoped>

</style>
