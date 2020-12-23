import axios from 'axios'
import config from '../config'
class API {

    constructor() {
        this.uriPath = config.uriPath
    }

    signUp = async (firstname, lastname, email, password) => {
        return await axios.post(this.uriPath + "/user", { firstname, lastname, email, password })
    }


}


const api = new API()

export default api;