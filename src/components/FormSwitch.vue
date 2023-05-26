<script setup>
import {onMounted} from "vue";
import ValidationError from "./ValidationError.vue";
const emit = defineEmits(['onChange'])
const props = defineProps({
  type: String,
  label: String,
  required: Boolean,
  variable: String,
  help:String,
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

let formData = {}
let hasError = false
let errorMessage = ""

onMounted(() => {
  Reflect.set(formData, props.variable, false)
})

function check(id, variable){
  formData[variable] = !formData[variable];
  document.getElementById(id).checked = formData[variable];
  emit("onChange", props.variable, formData[props.variable])
}

</script>

<template>
  <div>
    <span v-if="props.type === 'switch'">
      <span v-if="hasError">
        <validation-error variant="Warning" :message="errorMessage"/>
      </span>
      <div style="padding-top: 15px; padding-bottom: 7px;">
          <span class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></span>
          <div class="switch"  @click="check('switch', props.variable)">
            <input v-model="formData[props.variable]" class="form-switch" id="switch" type="checkbox"/>
            <span class="slider round"></span>
          </div>
      </div>
      <span v-if="props.help" class="help">{{props.help}}</span>
    </span>

  </div>
</template>

<style scoped>

.mandatory-indicator {
  color: v-bind(highlightColor);
}

.label {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 14px;
  padding: 15px 0 0 0;
  margin: 8px 0 0 0;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 26px;
}

.form-switch {
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 46px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #dedede;
  border: solid 1px #c7c6c6;
  -webkit-transition: .2s;
  transition: .2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  top: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: v-bind(themeColor);
}

input:focus + .slider {
  box-shadow: 0 0 1px v-bind(themeColor);
}

input:checked + .slider:before {
  transform: translateX(34px);
  -webkit-transform: translateX(34px);
  -ms-transform: translateX(34px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 60px;
}

.slider.round:before {
  border-radius: 50%;
}

input:hover {
  color: v-bind(themeColor);
}

input:focus {
  color: v-bind(themeColor);
}

input:focus:hover {
  color: v-bind(themeColor);
}

.help{
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>