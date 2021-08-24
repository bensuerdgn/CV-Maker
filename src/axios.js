import axios from "axios"

const instance = axios.create({
    baseURL: "https://cv-maker-38c8f-default-rtdb.firebaseio.com/"
})

//instance.defaults.headers.common
export default instance;