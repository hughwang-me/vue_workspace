<template>
  <div>
    <input
        placeholder="输入任务名称"
        v-model="name"
      @keydown.enter="addTask"/>
    <el-button type="primary" plain @click="addTask" style="margin-left: 20px">添加</el-button>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "TaskHeader",
  components: {},
  // methods: {
  //   addTask(){
  //     console.log('添加任务 : ' + name)
  //   }
  // },
  setup(props , ctx) {
    const name = ref('');
    let addTask = function (){
      console.log('添加任务 : ' + name.value)
      ctx.emit('add' , name.value);
      name.value = '';
    };
    return {
      name,
      addTask
    }
  }
}
</script>

<style scoped>

</style>
