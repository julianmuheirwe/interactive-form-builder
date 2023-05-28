import {defineStore} from "pinia";
import {ref} from "vue";
import api from "../api.js"

export const useFormControlStore = defineStore("form-control", ()=>{
    const formData = ref(null)
    const submit = ref(null)
    const error = ref(null)

    async function fetchForm(endpoint) {
        await api.get(endpoint)
            .then((response) => {
                formData.value = response.data
            })
            .catch((response) => {
                error.value = response
            })
    }
    async function submitForm(endpoint, data) {
        await api.post(endpoint, data)
            .then((response) => {
                submit.value = response.data
            })
            .catch((response) => {
                error.value = response
            })
    }
    return {
        formData, submit, error, fetchForm, submitForm
    }
})