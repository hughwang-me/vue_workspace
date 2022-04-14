<template>
<div>已完成: {{completed}} | 任务总数 : {{total}}  <el-button type="primary" @click="cleanCompleted">清空已完成任务</el-button></div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TaskHeader",
  methods: {
    cleanCompleted(){
      console.log('点击清空已完成任务按钮')
    }
  },
  setup(){
    let completed = ref(0);
    let total = ref(0);

    return {
      completed,
      total
    }
  }
}
</script>

<style scoped>

</style>
