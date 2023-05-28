<template>
  <div class="container">
    <form v-if="form.formData" :class="(hasBorder) ? 'form' : (hasBorderWithShadow) ? 'form-shadow-borderless' : 'form-borderless'" id="form" @submit.prevent="onSubmit">
      <h2 class="title">{{ builderData.title }}</h2>

      <div v-if="builderData.instructions" >
        <instructions :text="builderData.instructions.information" :background-color="builderData.instructions.backgroundColor"/>
      </div>

      <div style="display: flex;">
        <div v-for="(column, cidx) in builderData.form.columns" :key="cidx" class="column">
          <div v-for="(element, idx) in column.fields" :key="idx">
            <div v-if="element.type === 'column'" class="inner-column">
              <span v-for="(col, col_idx) in element.columns" :key="col_idx" :class="(col_idx === element.columns.length - 1) ? 'col-end' : 'col'">
                <form-input
                    :type="col.type"
                    :label="col.label"
                    :variable="col.variable"
                    :required="col.required"
                    :help="col.help"
                    :validations="col.validations"
                    :theme-color="themeColor"
                    :highlight-color="highlightColor"
                    :text-color="textColor"
                    v-on:onChange="onFormUpdated"/>

                <form-input-number
                    :type="col.type"
                    :label="col.label"
                    :variable="col.variable"
                    :required="col.required"
                    :help="col.help"
                    :validations="col.validations"
                    :theme-color="themeColor"
                    :highlight-color="highlightColor"
                    :text-color="textColor"
                    v-on:onChange="onFormUpdated"/>

              <form-date
                  :type="col.type"
                  :label="col.label"
                  :variable="col.variable"
                  :required="col.required"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <form-text-area
                  :type="col.type"
                  :label="col.label"
                  :variable="col.variable"
                  :required="col.required"
                  :validations="col.validations"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <form-switch
                  :type="col.type"
                  :label="col.label"
                  :variable="col.variable"
                  :required="col.required"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <form-select
                  :type="col.type"
                  :label="col.label"
                  :options="col.options"
                  :variable="col.variable"
                  :required="col.required"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <radio-group
                  :type="col.type"
                  v-on:pickedItem="pickedItem"
                  :label="col.label"
                  :variable="col.variable"
                  :options="col.options"
                  :orientation="col.orientation"
                  :required="col.required"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <checkbox-group
                  :type="col.type"
                  v-on:checkedItems="checkedItems"
                  :label="col.label"
                  :variable="col.variable"
                  :options="col.options"
                  :orientation="col.orientation"
                  :required="col.required"
                  :help="col.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>
            </span>
            </div>
            <div v-else>

              <form-input
                  :type="element.type"
                  :label="element.label"
                  :variable="element.variable"
                  :required="element.required"
                  :help="element.help"
                  :validations="element.validations"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <form-input-number
                  :type="element.type"
                  :label="element.label"
                  :variable="element.variable"
                  :required="element.required"
                  :help="element.help"
                  :validations="element.validations"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <form-date
                  :type="element.type"
                  :label="element.label"
                  :variable="element.variable"
                  :required="element.required"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor" v-on:onChange="onFormUpdated"/>

              <form-text-area
                  :type="element.type"
                  :label="element.label"
                  :variable="element.variable"
                  :required="element.required"
                  :validations="element.validations"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor" v-on:onChange="onFormUpdated"/>

              <form-switch
                  :type="element.type"
                  :label="element.label"
                  :variable="element.variable"
                  :required="element.required"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor" v-on:onChange="onFormUpdated"/>

              <form-select
                  :type="element.type"
                  :label="element.label"
                  :options="element.options"
                  :variable="element.variable"
                  :required="element.required"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor" v-on:onChange="onFormUpdated"/>

              <radio-group
                  :type="element.type"
                  v-on:pickedItem="pickedItem"
                  :label="element.label"
                  :variable="element.variable"
                  :options="element.options"
                  :orientation="element.orientation"
                  :required="element.required"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>

              <checkbox-group
                  :type="element.type"
                  v-on:checkedItems="checkedItems"
                  :label="element.label"
                  :variable="element.variable"
                  :options="element.options"
                  :orientation="element.orientation"
                  :required="element.required"
                  :help="element.help"
                  :theme-color="themeColor"
                  :highlight-color="highlightColor"
                  :text-color="textColor"
                  v-on:onChange="onFormUpdated"/>
            </div>
          </div>
        </div>
      </div>

      <div style="padding: 15px 0;" v-if="builderData.informationLinks">
        <p v-for="(link, lidx) in builderData.informationLinks" :key="lidx">
          {{link.label}} <a class="link" target="_blank" :href="link.url">here</a>
        </p>
      </div>

      <div class="button-holder">
        <div class="btn"></div>
        <div class="btn"></div>
        <div class="btn">
          <button v-if="hasCancelButton" class="button-col-width outline-button" type="button" @click="cancel">Cancel</button>
        </div>
        <div class="btn">
          <button class="button-col-width button" type="submit">{{ props.submitButtonText }}</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import {defineComponent, onMounted, watch} from "vue";
import {useFormControlStore} from "../form-control.js";
import RadioGroup from "../../widgets/RadioGroup.vue";
import CheckboxGroup from "../../widgets/CheckboxGroup.vue";
import FormTextArea from "../../widgets/FormTextArea.vue";
import FormInput from "../../widgets/FormInput.vue";
import FormDate from "../../widgets/FormDate.vue";
import FormSelect from "../../widgets/FormSelect.vue";
import FormSwitch from "../../widgets/FormSwitch.vue";
import Instructions from "../../widgets/Instructions.vue";
import FormInputNumber from "../../widgets/FormInputNumber.vue";

export default defineComponent({
  name: 'FormBuilder',
  props: {
    loadFrom: {
      type: String,
      default: null
    },
    data: {
      type: Object,
      default: null
    },
    hasCancelButton: {
      type: Boolean,
      default: false
    },
    hasBorderWithShadow: {
      type: Boolean,
      default: false
    },
    hasBorder: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Number,
      default: 1
    },
    submitButtonText: {
      type: String,
      default: "Submit"
    },
    colSpacing: {
      type: String,
      default: "5px"
    },
    fontFamily: {
      type: String,
      default: "Arial"
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
  },
  emits: ['cancel', 'submit', 'submitted']
})

const form = useFormControlStore()


const formData = {}
let builderData = {}
let btnWidth = "100%"

onMounted(() => {
  if (!props.hasCancelButton) {
    btnWidth = "50%"
  }

  if (props.loadFrom !== null) {
    fetch()
  }

  if (props.data !== null) {
    builderData = props.data
  }
})

function fetch() {
  form.fetchForm(props.loadFrom)
}

function onFormUpdated(variable, value){
  formData[variable] = value
}
function onSubmit() {
  alert(JSON.stringify(formData))
  if (props.loadFrom !== null) {
    let url = form.formData.server.url
    form.submitForm(url, formData)
  } else {
    emit("submit", formData)
  }
}

function cancel() {
  emit("cancel", "canceled")
}

function getEndpoint(server) {
  return server.url + ":" + server.port + server.endpoint;
}

function pickedItem(value, variable) {
  formData[variable] = value
}

function checkedItems(values, variable) {
  formData[variable] = values
}

watch(() => form.formData, () => {
  builderData = form.formData
})

watch(() => form.submit, () => {
  emit("submitted", form.submit)
})

watch(() => form.error, () => {
  alert(JSON.stringify(form.error))
})

</script>

<style scoped>

.container {
  width: 100%;
  padding: 5px 0;
  color: v-bind(textColor);
  font-family: v-bind(fontFamily);
}

.title {
  padding-top: 10px;
}

.form {
  width: 100%;
  border: solid 2px v-bind(themeColor);
  box-shadow: 0 0 3px v-bind(themeColor);
  border-radius: 6px;
  padding: 10px;
}

.form-shadow-borderless {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0 0 3px v-bind(themeColor);
}

.form-borderless {
  width: 100%;
  padding: 10px;
}

.button-holder {
  width: 100%;
  display: flex;
  padding-bottom: 25px;
}

.btn {
  width: v-bind(btnWidth);
  float: right;
  padding-right: 3px;
  padding-top: 5px;
}

.col {
  width: 100%;
  padding-right: v-bind(colSpacing);
}

.col-end {
  width: 100%;
}

.inner-column {
  display: flex;
}

.column{
  width: 100%;
  padding: 0 5px;
}

.link{
  color: v-bind(themeColor);
  text-decoration: underline;
}

.button {
  width: 100%;
  display: block;
  cursor: pointer;
  background: v-bind(themeColor);
  padding: 10px 5px;
  border: solid 2px v-bind(themeColor);
  border-radius: 6px;
  font-size: 16px;
  color: white;
}

.outline-button {
  width: 100%;
  display: block;
  cursor: pointer;
  background: #fff;
  padding: 10px 5px;
  border: solid 2px v-bind(themeColor);
  border-radius: 6px;
  font-size: 16px;
  color: v-bind(themeColor);
}

.button:hover {
  background: v-bind(themeColor);
  font-weight: bold;
  text-decoration: underline;
  filter: brightness(90%);
}

.outline-button:hover {
  font-weight: bold;
  text-decoration: underline;
}

.col-full {
  max-width: 100vh;
}

.button-col-width {
  width: 100%;
}

</style>