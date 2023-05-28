<template>
  <div>
    <span v-if="props.type === 'select'">
      <span v-if="hasError">
        <validation-error variant="Warning" :message="errorMessage"/>
      </span>
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <select v-model="formData[props.variable]" class="select form-select" v-on:change="capture">
        <option class="option" v-for="(option, optIdx) in props.options" :key="optIdx"
                    :value="option">{{ option }}</option>
      </select>
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
  options:Array,
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
  font-size: 14px;
  padding: 0;
  margin: 8px 0 0 0;
}

.option {
  text-transform: capitalize;
  width: 100%;
}

.select {
  width: 100%;
  padding: 0;
  margin: 0;
  color: v-bind(textColor);
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
}

.form-select {
  padding: 10px 5px;
  margin: 5px 0;
  border: solid 1px v-bind(themeColor);
  border-radius: 3px;
}

select:focus {
  outline: none !important;
  border-color: v-bind(themeColor);
  box-shadow: 0 0 3px v-bind(themeColor);
}

.help{
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>