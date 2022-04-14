<template>
  <div>
    <div v-for="(item , index) in list" :key="index">
      <div class="item"><input type="checkbox" v-model="item.completed"> {{ item.name }}
        <el-button class="itemBtn" type="danger" round @click="deleteItem(index)">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import {computed} from 'vue';
import {useStore} from 'vuex';

export default {
  name: "TaskHeader",
  methods: {
    deleteItem(index) {
      console.log('删除任务 : ' + index)
    }
  },
  setup() {
    let store = useStore();
    console.log("store -> " + JSON.stringify(store))
    let list = store.state.todoList
    return {
      list
    }
  }

}
</script>

<style scoped>
.item {
  width: 300px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.itemBtn {
  margin-left: 20px;
}

</style>
