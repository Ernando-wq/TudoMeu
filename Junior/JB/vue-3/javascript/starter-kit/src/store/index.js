import { createStore } from 'vuex';


 
export const store = createStore({
    state() {
        return {
            menu: []
        }
        
    },
    getters: {
        getMenu(state){
            return state.menu
        }  
    },
    mutations: {
        SET_MENU: (state, payload) => state.menu = payload

    },
    actions: {
        setMenu(context, payload){
            context.commit('SET_MENU', payload)
            // console.log(payload)
            
        }

    },
    modules: {

    }

})

