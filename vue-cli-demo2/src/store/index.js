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
            state.todoList.push(todo)
        },
        deleteTask(state, todo) {
            state.todoList.splice(todo, 1)
        },
        clearTask(state, todo) {
            state.todoList = todo
        }
    },
    actions: {},
    modules: {}
})
