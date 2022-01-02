import axios from 'axios'

const baseURL = 'http://127.0.0.1:8888/sportCards/'

const http = axios.create(
    {
        baseURL,
        timeout: 10000,
    }
)

export const getCards = () => http.get('getCards')
