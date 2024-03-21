<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link to="/">首页</router-link>
  <router-link to="/main">主页</router-link>
  <router-link to="/login">登录页面</router-link>
  <router-link to="/user">用户列表</router-link>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
