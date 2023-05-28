<template>
  <div>
    <span v-if="props.type === 'text'">
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <input v-model="formData[props.variable]" :class="stringValidator.hasError.value ? 'err-input' : 'input form-input'"  type="text" v-on:input="capture"
             :required="props.required"/>
       <span v-if="stringValidator.hasError.value">
          <validation-error variant="Error" :message="stringValidator.errorMessage.value"/>
       </span>
      <span v-if="props.help" class="help">{{ props.help }}</span>
    </span>
    <span v-if="props.type === 'text-masked'">
          <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
          <input v-model="formData[props.variable]" :class="stringValidator.hasError.value ? 'err-input' : 'input form-input'"  type="password" v-on:input="capture"
                 :required="props.required"/>
       <span v-if="stringValidator.hasError.value">
          <validation-error variant="Error" :message="stringValidator.errorMessage.value"/>
       </span>
      <span v-if="props.help" class="help">{{ props.help }}</span>
    </span>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import ValidationError from "../validation/ValidationError.vue";
import {useStringValidation} from "../validation/validation.js";

const emit = defineEmits(['onChange'])
const props = defineProps({
  type: String,
  label: String,
  required: Boolean,
  variable: String,
  validations: {
    type: Object,
    default: null
  },
  help: String,
  themeColor: {
    type: String,
    default: "#a0a0a0"
  },
  highlightColor: {
    type: String,
    default: "#d50303"
  },
  textColor: {
    type: String,
    default: "#000000"
  },
})

const stringValidator = useStringValidation()
let formData = {}

onMounted(() => {
  Reflect.set(formData, props.variable, null)
})

function capture() {
  stringValidator.validate(props.validations, formData[props.variable], props.label)
  emit("onChange", props.variable, formData[props.variable])
}

</script>

<style scoped>

.mandatory-indicator {
  color: v-bind(highlightColor);
}

.label {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 14px;
  padding: 0;
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
}

.err-input {
  width: 100%;
  outline: none !important;
  box-shadow: 0 0 3px red;
  padding: 10px 5px;
  margin: 5px 0;
  border: solid 1px red;
  border-radius: 3px;
  box-sizing: border-box;
}

.err-input:focus {
  outline: none !important;
  border-color: red;
  box-shadow: 0 0 3px red;
  padding: 10px 5px;
  margin: 5px 0;
  border-radius: 3px;
  box-sizing: border-box;
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

input:focus {
  outline: none !important;
  border-color: v-bind(themeColor);
  box-shadow: 0 0 3px v-bind(themeColor);
}

.help {
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>