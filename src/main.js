import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

import { createStore } from 'vuex'
// create a new store instance 
const store = createStore( {
    state: {
        itemsCount : 0,
        isShowCart: false
    },

    mutations: {
        increment(state) {
            return state.itemsCount++
        },

        decrement(state) {
            if (state.itemsCount) {
                state.itemsCount--;
            }
            return state.itemsCount
        },

        toggleCartButton(state) {
            state.isShowCart = !state.isShowCart
        },

        resetItemsCount(state) {
            state.itemsCount = 0
            return state.itemsCount
        }
    }
})


createApp(App).use(router).use(store).mount('#app')
