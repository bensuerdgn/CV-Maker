import { createStore } from 'vuex'
import axios from '../axios'

export default createStore({
  state: {

  },
  mutations: {
  },
  actions: {
    setUserInfo(payload) {
      axios.post("users.json", 
      {
        name: payload.name,
        surname: payload.surname,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        address: payload.address,
        postCode: payload.postCode,
        city: payload.city,
        birthdate: payload.birthdate,
        birthPlace: payload.birthPlace,
        drivingLicence: payload.drivingLicence,
        gender: payload.gender,
        militaryState: payload.militaryState,
        maritalStatus: payload.maritalStatus,
        linkedin: payload.linkedin,
        website: payload.website,
      }).then(response => {
        console.log(response.data);
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
