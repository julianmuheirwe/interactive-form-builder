<template>
  <div>
    <span v-if="props.type === 'text-lg'">
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <textarea v-model="formData[props.variable]" class="input form-input" rows="4" v-on:input="capture"
                    :required="props.required"/>
      <span v-if="hasError">
        <validation-error variant="Error" :message="errorMessage"/>
      </span>
      <span v-if="props.help" class="help">{{props.help}}</span>
    </span>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ValidationError from "../validation/ValidationError.vue";

const emit = defineEmits(['onChange'])
const props = defineProps({
  type:String,
  label:String,
  required:Boolean,
  variable:String,
  help:String,
  validations:{
    type:Object,
    default:null
  },
  themeColor:{
    type:String,
    default:"#a0a0a0"
  },
  highlightColor:{
    type:String,
    default:"#d50303"
  },
  textColor:{
    type:String,
    default:"#000000"
  },
})

let formData = {}
let hasError = ref(false)
let errorMessage = null

function validate(){
  if(props.validations.maxLength){
    if(formData[props.variable].length > props.validations.maxLength){
      hasError.value = true
      errorMessage = "This is longer than "+ props.validations.maxLength + " characters"
      return true;
    }else{
      hasError.value = false
      errorMessage = null
    }
  }

  if (props.validations.regex) {
    let regex = new RegExp(props.validations.regex)
    let str = formData[props.variable]
    if (str != null && str !== "") {
      if (regex.test(str)) {
        hasError.value = false
        errorMessage = null
      } else {
        hasError.value = true
        errorMessage = "Invalid " + props.label
        return true;
      }
    } else {
      hasError.value = false
      errorMessage = null
    }
  }

  return false
}

onMounted(() => {
  Reflect.set(formData, props.variable, null)
})

function capture() {
  validate()
  emit("onChange", props.variable, formData[props.variable])
}

</script>

<style scoped>

.mandatory-indicator{
  color: v-bind(highlightColor);
}

.label {
  text-transform: capitalize;
  font-weight: bold;
  padding: 0;
  font-size: 14px;
  margin: 8px 0 0 0;
}

.input {
  width: 100%;
  padding: 0;
  margin: 0;
  color: v-bind(textColor);
}

.form-input {
  padding: 10px 5px;
  margin: 5px 0;
  border: solid 1px v-bind(themeColor);
  border-radius: 3px;
  box-sizing: border-box;
  text-transform: capitalize;
}

textarea:focus {
  outline: none !important;
  border-color: v-bind(themeColor);
  box-shadow: 0 0 3px v-bind(themeColor);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: v-bind(textColor);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: v-bind(textColor);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: v-bind(textColor);
}

.help{
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>