<template>
首页
  <TaskHeader/>
  <TaskMain/>
  <TaskFooter/>
  <CommonFooter/>
</template>

<script>
import  TaskHeader from '../components/TaskHeader';
import  TaskMain from '../components/TaskMain';
import  TaskFooter from '../components/TaskFooter';
import CommonFooter from "@/components/CommonFooter";

export default {
  name: "HomePage",
  components:{
    CommonFooter,
    TaskHeader,
    TaskMain,
    TaskFooter
  }
}
</script>

<style scoped>

</style>
