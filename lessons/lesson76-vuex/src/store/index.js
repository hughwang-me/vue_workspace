import { createStore } from 'vuex'

export default createStore({
  state: {
    myStr: '你好世界'
  },
  getters: {
  },
  mutations: {
    changeStr(state , str){
      state.myStr = str
    }
  },
  actions: {
    changeStr(store , str){
        store.commit('changeStr' , str);
    }
  },
  modules: {
  }
})
