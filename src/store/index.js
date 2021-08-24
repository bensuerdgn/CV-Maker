import { createStore } from 'vuex'
import axios from '../axios'

export default createStore({
  state: {
    id: ""
  },
  mutations: {
    setId(state,id) {
      state.id=id
    }
  },
  actions: {
    setUserInfo({commit}, user) {
      axios.post("/users.json",
        {
          name: user.name,
          surname: user.surname,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address,
          postCode: user.postCode,
          city: user.city,
          birthdate: user.birthdate,
          birthPlace: user.birthPlace,
          drivingLicense: user.drivingLicense,
          gender: user.gender,
          militaryState: user.militaryState,
          maritalStatus: user.maritalStatus,
          linkedin: user.linkedin,
          website: user.website,
        }).then(response => {
          console.log(response);
          commit("setId",response.data.name)
        }).catch(error => {
          console.log(error);
        })
    },
    getUserInfo() {
    }
  },
  getters: {

  }
})
