<template>
  <div>
    <div v-if="props.type === 'checkbox'" style="padding-top: 10px; padding-bottom: 10px;">
      <span v-if="hasError">
        <validation-error variant="Warning" :message="errorMessage"/>
      </span>
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <span v-if="orientation === 'vertical'">
        <div class="form-checkbox" v-for="(option, optIdx) in options" :key="optIdx">
          <input v-on:change="entry(option)" type="checkbox"/> <label class="label-text">{{ option }}</label>
        </div>
      </span>
      <span v-if="orientation === 'horizontal'">
        <span class="form-checkbox" v-for="(option, optIdx) in options" :key="optIdx">
          <input v-on:change="entry(option)" type="checkbox"/> <label class="label-text">{{ option }}</label>
        </span>
      </span>
      <span v-if="props.help" class="help">{{props.help}}</span>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ValidationError from "./ValidationError.vue";

const emit = defineEmits(['onChange'])
const props = defineProps({
  type:String,
  options: Array,
  variable: String,
  label: String,
  help:String,
  orientation: {
    type: String,
    default: "vertical"
  },
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
  required: Boolean
})

let values = []
let hasError = ref(false)
let errorMessage = ""

onMounted(() => {
  if(props.required){
    hasError.value = true
    errorMessage = "Select at least one of these options"
  }
})

function entry(option) {
  let check = findInList(option)
  if (check === -1) {
    values.push(option)
    emit("onChange", props.variable, values)
  } else {
    values.splice(check, 1)
  }
}

function findInList(value) {
  for (let i = 0; i < values.length; i++) {
    let x = values[i];
    if (x === value) {
      return i
    }
  }
  return -1
}

</script>

<style scoped>
.form-checkbox {
  padding-right: 5px;
}

.mandatory-indicator {
  color: v-bind(highlightColor);
}

.label {
  text-transform: capitalize;
  font-weight: bold;
  padding: 0;
  font-size: 14px;
  margin: 0;
}

.label-text {
  text-transform: capitalize;
  padding: 0;
  font-size: 14px;
}

.form-checkbox input:checked:before {
  border-color: v-bind(themeColor);
  background-color:v-bind(themeColor);
}

input[type='checkbox'] {
  accent-color: v-bind(themeColor);
}

.help{
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>