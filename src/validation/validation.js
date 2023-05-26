import {ref} from "vue";

export function  useStringValidation(){
    let hasError = ref(false)
    let errorMessage = ref("")

    function validate(validations, value, label){

        if (validations.maxLength) {
            if (value.length > validations.maxLength) {
                hasError.value = true
                errorMessage.value = "This is longer than " + validations.maxLength + " characters"
            } else {
                hasError.value = false
                errorMessage.value = ""
            }
        }

        if (validations.regex) {
            let regex = new RegExp(validations.regex)
            let str = value
            if (str != null && str !== "") {
                if (regex.test(str)) {
                    hasError.value = false
                    errorMessage.value = null
                } else {
                    hasError.value = true
                    errorMessage.value = "Invalid " + label
                }
            } else {
                hasError.value = false
                errorMessage.value = null
            }
        }
    }

    return {hasError, errorMessage, validate}
}

export function useNumberValidation(){
    let hasError = ref(false)
    let errorMessage = ref("")

    function validate(validations, value, label){
        if(value){
            if (validations.max) {
                if (value > validations.max) {
                    hasError.value = true
                    errorMessage.value = "It is more than the maximum " + label
                    return
                }else{
                    hasError.value = false
                    errorMessage.value = null
                }
            }else{
                hasError.value = false
                errorMessage.value = null
            }

            if (validations.min) {
                if (value < validations.min) {
                    hasError.value = true
                    errorMessage.value = "It is less than the minimum " + label
                    return;
                }else{
                    hasError.value = false
                    errorMessage.value = null
                }
            }else{
                hasError.value = false
                errorMessage.value = null
            }
        }else{
            hasError.value = false
            errorMessage.value = null
        }
    }

    return {hasError, errorMessage, validate}
}