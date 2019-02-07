import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'dns'
import { rejects } from 'assert'

Vue.use(Vuex)

// store
export const store = new Vuex.Store({

  // state
  state: {
    customer: [],
    customerfilteres: [],
    curenntBranch: '',
    branches: [{
      branch: 'Battambang'
    },
      {
        branch: 'Phnom Phenh'
      },
      {
        branch: 'Pailin'
      },
      {
        branch: 'Kandal'
      },
      {
        branch: 'Svay Reang'
      }]
  },

  // mutation
  mutations: {
    SET_CURENNT_BRANCH(state, val) {
      state.curenntBranch = val
    },

    setCustomer(state , data) {
      state.customer = data
      store.getters.filterBranch(state.curenntBranch)
    },

    // getDataCustomer(state , value){
    //   state.branches = value
    // }
  //   getDataCustomer()
    
  },  

  // action
  actions: {
    setCurrentBranch(context, val) {
      context.commit('SET_CURENNT_BRANCH', val)
    },

    setCustomer(context , data) {
      context.commit('setCustomer' , data)
    },

    // getDataCustomer(context , value) {
    //   context.commit('getDataCustomer' , value)
    // }

    getDataCustomer({commit},data){
      return new Promise ((resolve , reject) => {
        setTimeout(() => {
            commit('setCustomer', data)
        })
        resolve()
      },10)
    }
  },

  // getters
  getters: {
    filterBranch: (state) => (id) => {
      let data = []
      state.customer.forEach(doc => {
        if (doc.branch == id) {
          data.push(doc)
        }
      })
      return state.customerfilteres = data
    },
    
  }

})
