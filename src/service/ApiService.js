import axios from "axios"

const BASE_URL = process.env.backend ? process.env.backend : ""

export default {
    fetchGroupedResults() {
        return axios.get(`${BASE_URL}/analysis/grouped`)
    },
    
    fetchIndividualResults() {
        return axios.get(`${BASE_URL}/analysis/individual`)
    }
}