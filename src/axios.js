import axios from "axios"

const instance =axios.create({
    baseURL:"https://cv-maker-6a7a6-default-rtdb.firebaseio.com/"
})

//instance.defaults.headers.common
export default instance;