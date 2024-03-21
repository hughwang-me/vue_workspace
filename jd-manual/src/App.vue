<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe7c6;</div>
      首页
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe73d;</div>
      购物车
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe645;</div>
      订单
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe60d;</div>
      我的
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.5rem;
  border-top: 1px solid grey;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .2rem;
    }
    &--active {
      color: cornflowerblue;
    }
  }
}
</style>
<script setup>
</script>
