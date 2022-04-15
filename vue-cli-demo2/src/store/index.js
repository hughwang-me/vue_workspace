import {createStore} from "vuex";

export default createStore({
    state: {
        todoList: [
            {
                name: "吃饭",
                completed: false
            },
            {
                name: "睡觉",
                completed: false
            },
            {
                name: "写代码",
                completed: true
            },
        ]
    },
    mutations: {
        addTask(state, todo) {
            console.log('store -> addTask : ' + todo)
            state.todoList.push(todo)
        },
        deleteTask(state, index) {
            console.log('store -> deleteTask : ' + index)
            state.todoList.splice(index,1)
        },
        clearTask(state, todo) {
            state.todoList = todo
        }
    },
    actions: {},
    modules: {}
})
