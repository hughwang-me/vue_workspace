<template>
<div>
   <div v-for="(item , index) in list" :key="index">
      <div class="item"><input type="checkbox" v-model="item.competed"> {{ item.name }}</div>
   </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "TaskHeader",
  setup(){
    const list = ref([
      {
        "name":"吃饭",
        "competed" : false
      },
      {
        "name":"睡觉",
        "competed" : false
      }
    ])
    return {
      list
    }
  }

}
</script>

<style scoped>

</style>
