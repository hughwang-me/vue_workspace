<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    {{ myStr }}
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { toRefs } from 'vue';

export default {
  name:'AboutView',
  setup(){
    const store = useStore();
    // const name = store.state.myStr;
    const { myStr } = toRefs(store.state);
    return { myStr }
  }
}
</script>
