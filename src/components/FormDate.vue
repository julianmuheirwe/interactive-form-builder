<template>
  <div>
    <span v-if="props.type === 'date'">
      <span v-if="hasError">
        <validation-error variant="Warning" :message="errorMessage"/>
      </span>
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <input v-model="formData[props.variable]" class="input form-input" type="date" v-on:input="capture"
                 :placeholder="'Enter your ' + props.label" :required="props.required"/>
      <span v-if="props.help" class="help">{{props.help}}</span>
    </span>

  </div>
</template>

<script setup>
import {onMounted} from "vue";
import ValidationError from "../validation/ValidationError.vue";

const emit = defineEmits(['onChange'])
const props = defineProps({
  type:String,
  label:String,
  required:Boolean,
  variable:String,
  help:String,
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
let hasError = false
let errorMessage = ""

onMounted(() => {
  Reflect.set(formData, props.variable, null)
})

function capture() {
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
  cursor: pointer;
  box-sizing: border-box;
}

.form-input::-webkit-calendar-picker-indicator {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

input:focus {
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