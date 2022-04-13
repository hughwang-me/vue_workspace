<template>
  <div>你好 世界  {{ message }}</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      message: '你好 22222'
    }
  }
}
</script>

<style>
#app {
  /*font-family: Arial, Microsoft JhengHei;*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3500;
  margin-top: 60px;
}
</style>
