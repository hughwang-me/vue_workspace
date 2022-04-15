<template>
首页
  <TaskHeader @add="addTask"/>
  <TaskMain @delete="deleteTask"/>
  <TaskFooter :list="list"/>
  <CommonFooter/>
</template>

<script>
import  TaskHeader from '../components/TaskHeader';
import  TaskMain from '../components/TaskMain';
import  TaskFooter from '../components/TaskFooter';
import CommonFooter from "@/components/CommonFooter";
import {useStore} from 'vuex';

export default {
  name: "HomePage",
  components:{
    CommonFooter,
    TaskHeader,
    TaskMain,
    TaskFooter
  },
  setup(){
    let store = useStore();
    let addTask = (val)=>{
      console.log('HomePage -> addTask() : ' + val)
      store.commit('addTask' , {
        name : val,
        completed: false
      })
    }

    let deleteTask = (val)=>{
      console.log('HomePage -> deleteTask() : ' + val)
      store.commit('deleteTask' ,  val)
    }

    let  list = store.state.todoList;

    return {
      addTask,
      deleteTask,
    list
    }
  }
}
</script>

<style scoped>

</style>
