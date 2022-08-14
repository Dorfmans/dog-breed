import axios from 'axios'

export default class HTTPService {
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL
        })
    }

    post(url, data, { headers }) {
        return this.axios.post(url, data, { headers })
    }


    get(url, { headers }) {
        return this.axios.get(url, { headers });
    }
}