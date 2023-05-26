import axios from "axios"

const api = axios.create({

})

api.interceptors.request.use(
    (config) => {
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            alert("Wrong input")
        }

        if (error.response.status === 403) {
            alert("Not authorized to access that page. Access Denied")
        }
        return Promise.reject(error)
    }
)

export default api
