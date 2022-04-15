<template>
  <div>已完成: {{ completed }} | 任务总数 : {{ total }}
    <el-button type="primary" @click="cleanCompleted">清空已完成任务</el-button>
  </div>
  <div class="links" style="margin-top: 20px">
    <router-link to="/about">到关于页面</router-link>
    <router-link to="/login">到登录页面</router-link>
  </div>

</template>

<script>
import {ref} from "vue";
import {useRouter} from 'vue-router';

export default {
  name: "TaskHeader",
  methods: {
    cleanCompleted() {
      console.log('点击清空已完成任务按钮')
    }
  },
  setup() {
    let completed = ref(0);
    let total = ref(0);

    let router = useRouter();
    let prePage = () => {
      router.push('/login')
    };

    let nextPage = () => {
      router.push('/login')
    };

    return {
      completed,
      total,
      prePage,
      nextPage
    }
  }
}
</script>

<style scoped>

</style>
