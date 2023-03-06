import { createStore } from 'vuex'

export default createStore({
  state: {
    number: 0,
    name: "",
    age: "",
    observations: [{ key: null, value: null }],
  },

  getters: {

  },
  mutations: {
    adicionar: state => state.number++,
    remove: state => state.number--,
    reset: state => state.number = 0,

  },

  actions: {
  },

  modules: {

  }
})

