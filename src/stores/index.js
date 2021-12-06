import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        donecount(state) {
            return state.count
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        increment() {
            axios.get('http://localhost:420/api/v1/users')
            .then( data => console.log(data) )
            .catch(error => console.log(error))
            // commit('increment')
        }
    }
})

export default store