import axios from 'axios'

const instance = axios.create({
})

instance.interceptors.response.use(
    function (response) {
        return response.data
    }
)

export const get = (url) => instance.get(url)

export const post = (url, body) => instance.post(url, body)

export const put = (url, body) => instance.put(url, body)

export const _delete = (url) => instance.delete(url)