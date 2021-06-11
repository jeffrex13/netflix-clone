import axios from 'axios';

/* base url is used to make requests to the database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;