import axios from 'axios'

const api = axios.create({
    baseURLhttp:'localhost:3333'
});

export default api;