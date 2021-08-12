import axios from "axios"

const BASE_URL = process.env.backend ? process.env.backend : ""

export default {
    fetchTest() {
        return axios.get(`${BASE_URL}/analysis/grouped`)
    }
}