import { createStore } from 'vuex'
import axios from '../axios'
import router from '../router/index'

export default createStore({
  state: {
    id: "",
    users: [],
    user: {}
  },
  mutations: {
    setId(state, id) {
      state.id = id
    },
    updateUserList(state, user) {
      state.users.push(user);
    }
  },
  actions: {
    setUserInfo({ commit, dispatch, state }, user) {
      axios.post("/users.json",user).then(response => {
          console.log(response);
          commit("setId", response.data.name)
          dispatch("getUserInfo", state.id)
        }).catch(error => {
          console.log(error);
        })
    },
    getUserInfo({ state }, id) {
      axios.get("/users/" + id + ".json").then(response => {
        state.user = response.data
        console.log(state.user)
        router.replace("/template")
      }).catch(error => {
        console.log(error);
      })
    },
    getUsersInfo({ commit }) {
      axios.get("/users.json").then(response => {
        let data = response.body;
        console.log(data)
        for (const key in data) {
          data[key].id = key;
          commit("updateUserList", data[key])
        }
      }).catch(error => {
        console.log(error);
      })
    }
  },
  getters: {
    getUserInfo(state) {
      if (Object.keys(state.user).length
      ) {
        return state.user
      } else {
        return false
      }
    }
  }
})
