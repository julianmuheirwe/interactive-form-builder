<template>
  <div>
    <div v-if="props.type === 'radio'" style="padding-top: 10px; padding-bottom: 10px;">
      <p class="label">{{ props.label }} <label v-if="props.required" class="mandatory-indicator">*</label></p>
      <span v-if="orientation === 'vertical'">
       <div class="form-radio" v-for="(option, optIdx) in options" :key="optIdx">
         <input :id="getId(option)" type="radio" name="btn" v-on:change="selection(option)"/>
         <label class="label-text" :for="getId(option)">
           {{option }}
         </label>
       </div>
     </span>
      <span v-if="orientation === 'horizontal'">
        <span class="form-radio" v-for="(option, optIdx) in options" :key="optIdx">
          <input :id="getId(option)" type="radio" name="btn" v-on:change="selection(option)"/>
          <label class="label-text" :for="getId(option)">
            {{ option }}
          </label>
        </span>
     </span>
      <span v-if="hasError">
        <validation-error style="padding-top: 5px;" variant="Warning" :message="errorMessage"/>
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
  required: Boolean
})

let hasError = ref(false)
let errorMessage = ""

onMounted(() => {
  if(props.required){
    hasError.value = true
    errorMessage = "Select one of these options"
  }
})

function selection(option) {
  emit("onChange", props.variable, option)
  const radioButtons = document.querySelectorAll('input[name="btn"]');
  let selectedSize;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedSize = radioButton.value;
      break;
    }
  }
}

function getId(option) {
  return option.replaceAll(" ", "_").toLowerCase()
}

</script>

<style scoped>

.form-radio {
  padding-right: 5px;
}

.mandatory-indicator {
  color: v-bind(highlightColor);
}

.label {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.label-text {
  text-transform: capitalize;
  padding: 0;
  font-size: 14px;
}

.form-radio input:checked:before {
  border-color: v-bind(themeColor);
  background-color:v-bind(themeColor);
}

input[type='radio'] {
  accent-color: v-bind(themeColor);
}

.help{
  font-size: 10px;
  font-style: italic;
  color: v-bind(textColor);
  opacity: 0.6;
}
</style>