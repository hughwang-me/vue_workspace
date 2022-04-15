<template>
  <div>已完成: {{ completed }} | 任务总数 : {{ list.length }}
    <el-button type="primary" @click="cleanCompleted">清空已完成任务</el-button>
  </div>
  <div class="links" style="margin-top: 20px">
    <router-link to="/about">到关于页面</router-link>
    <router-link to="/login">到登录页面</router-link>
  </div>

</template>

<script>
import {useRouter} from 'vue-router';
import {computed} from "vue";

export default {
  name: "TaskHeader",
  props:{
    list: {
      type: Array
    }
  },
  setup(props) {
    let completed = computed(()=>{
      let arr = props.list.filter(item =>{
        return item.completed === true;
      })
      return arr.length;
    })
    let router = useRouter();
    let prePage = () => {
      router.push('/login')
    };

    let nextPage = () => {
      router.push('/login')
    };

    let cleanCompleted = () =>{
      console.log('Task Footer cleanCompleted')
    }

    return {
      prePage,
      nextPage,
      completed,
      cleanCompleted
    }
  }
}
</script>

<style scoped>

</style>
