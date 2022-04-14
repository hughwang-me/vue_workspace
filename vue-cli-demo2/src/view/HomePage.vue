<template>
首页
  <TaskHeader/>
  <TaskMain/>
  <TaskFooter/>
</template>

<script>
import  TaskHeader from '../components/TaskHeader';
import  TaskMain from '../components/TaskMain';
import  TaskFooter from '../components/TaskFooter';

export default {
  name: "HomePage",
  components:{
    TaskHeader,
    TaskMain,
    TaskFooter
  }
}
</script>

<style scoped>

</style>
