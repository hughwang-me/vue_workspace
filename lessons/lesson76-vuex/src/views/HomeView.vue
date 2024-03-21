<template>
  <div class="home"> 
    <input v-model="name"/>

    <hr>{{ myStr }}
    <button @click="clickSub">提交</button>
  </div>
</template>

<script> 
export default {
  name: 'HomeView',
  data(){
    return {
      name : '王欢'
    }
  },
  computed:{
    myStr(){
      return this.$store.state.myStr;
    }
  },
  methods:{
    clickSub(){
      this.$store.dispatch('changeStr', this.name)
    }
  }
}
</script>
