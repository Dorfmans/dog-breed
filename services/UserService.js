import HTTPService from "./HTTPService";

export default class UserService extends HTTPService {
    async register(email, { headers }) {
        return this.post('/register', email, { headers });
    }

    async list(query, { headers }) {
        return this.get(`/list?breed=${query}`, { headers })
    }

    async getImage(url) {
        return this.get(url)
    }
}