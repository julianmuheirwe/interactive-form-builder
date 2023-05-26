'use strict';

var vue = require('vue');
var pinia = require('pinia');
var axios = require('axios');

const api = axios.create({

});

api.interceptors.request.use(
    (config) => {
    return config
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            alert("Wrong input");
        }

        if (error.response.status === 403) {
            alert("Not authorized to access that page. Access Denied");
        }
        return Promise.reject(error)
    }
);

const useFormControlStore = pinia.defineStore("form-control", ()=>{
    const formData = vue.ref(null);
    const submit = vue.ref(null);
    const error = vue.ref(null);

    async function fetchForm(endpoint) {
        await api.get(endpoint)
            .then((response) => {
                formData.value = response.data;
            })
            .catch((response) => {
                error.value = response;
            });
    }
    async function submitForm(endpoint, data) {
        await api.post(endpoint, data)
            .then((response) => {
                submit.value = response.data;
            })
            .catch((response) => {
                error.value = response;
            });
    }
    return {
        formData, submit, error, fetchForm, submitForm
    }
});

var script$a = {
  name: "ValidationError",
  props:{
    message:String,
    variant:String
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("p", {
      class: vue.normalizeClass(($props.variant === 'Error') ? 'error' : ($props.variant === 'Warning') ? 'warning' : '')
    }, [
      vue.createElementVNode("b", {
        class: vue.normalizeClass(($props.variant === 'Error') ? 'error-header' : ($props.variant === 'Warning') ? 'warning-header' : '')
      }, vue.toDisplayString($props.variant), 3 /* TEXT, CLASS */),
      vue.createTextVNode(" " + vue.toDisplayString($props.message), 1 /* TEXT */)
    ], 2 /* CLASS */)
  ]))
}

script$a.render = render;
script$a.__scopeId = "data-v-9411451c";
script$a.__file = "src/validation/ValidationError.vue";

const _hoisted_1$9 = {
  key: 0,
  style: {"padding-top":"10px","padding-bottom":"10px"}
};
const _hoisted_2$8 = { class: "label" };
const _hoisted_3$8 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_4$8 = { key: 0 };
const _hoisted_5$8 = ["id", "onChange"];
const _hoisted_6$8 = ["for"];
const _hoisted_7$4 = { key: 1 };
const _hoisted_8$3 = ["id", "onChange"];
const _hoisted_9$3 = ["for"];
const _hoisted_10$3 = { key: 2 };
const _hoisted_11$3 = {
  key: 3,
  class: "help"
};


var script$9 = {
  __name: 'RadioGroup',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "70a7e118-highlightColor": (__props.highlightColor),
  "70a7e118-themeColor": (__props.themeColor),
  "70a7e118-textColor": (__props.textColor)
}));




let hasError = vue.ref(false);
let errorMessage = "";

vue.onMounted(() => {
  if(props.required){
    hasError.value = true;
    errorMessage = "Select one of these options";
  }
});

function selection(option) {
  emit("onChange", props.variable, option);
  const radioButtons = document.querySelectorAll('input[name="btn"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      radioButton.value;
      break;
    }
  }
}

function getId(option) {
  return option.replaceAll(" ", "_").toLowerCase()
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'radio')
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$9, [
          vue.createElementVNode("p", _hoisted_2$8, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_3$8, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          (__props.orientation === 'vertical')
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$8, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.options, (option, optIdx) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    class: "form-radio",
                    key: optIdx
                  }, [
                    vue.createElementVNode("input", {
                      id: getId(option),
                      type: "radio",
                      name: "btn",
                      onChange: $event => (selection(option))
                    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$8),
                    vue.createElementVNode("label", {
                      class: "label-text",
                      for: getId(option)
                    }, vue.toDisplayString(option), 9 /* TEXT, PROPS */, _hoisted_6$8)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : vue.createCommentVNode("v-if", true),
          (__props.orientation === 'horizontal')
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$4, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.options, (option, optIdx) => {
                  return (vue.openBlock(), vue.createElementBlock("span", {
                    class: "form-radio",
                    key: optIdx
                  }, [
                    vue.createElementVNode("input", {
                      id: getId(option),
                      type: "radio",
                      name: "btn",
                      onChange: $event => (selection(option))
                    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_8$3),
                    vue.createElementVNode("label", {
                      class: "label-text",
                      for: getId(option)
                    }, vue.toDisplayString(option), 9 /* TEXT, PROPS */, _hoisted_9$3)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : vue.createCommentVNode("v-if", true),
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_10$3, [
                vue.createVNode(script$a, {
                  style: {"padding-top":"5px"},
                  variant: "Warning",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11$3, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$9.__scopeId = "data-v-70a7e118";
script$9.__file = "src/components/RadioGroup.vue";

const _hoisted_1$8 = {
  key: 0,
  style: {"padding-top":"10px","padding-bottom":"10px"}
};
const _hoisted_2$7 = { key: 0 };
const _hoisted_3$7 = { class: "label" };
const _hoisted_4$7 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_5$7 = { key: 1 };
const _hoisted_6$7 = ["onChange"];
const _hoisted_7$3 = { class: "label-text" };
const _hoisted_8$2 = { key: 2 };
const _hoisted_9$2 = ["onChange"];
const _hoisted_10$2 = { class: "label-text" };
const _hoisted_11$2 = {
  key: 3,
  class: "help"
};


var script$8 = {
  __name: 'CheckboxGroup',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "14fc327c-highlightColor": (__props.highlightColor),
  "14fc327c-themeColor": (__props.themeColor),
  "14fc327c-textColor": (__props.textColor)
}));




let values = [];
let hasError = vue.ref(false);
let errorMessage = "";

vue.onMounted(() => {
  if(props.required){
    hasError.value = true;
    errorMessage = "Select at least one of these options";
  }
});

function entry(option) {
  let check = findInList(option);
  if (check === -1) {
    values.push(option);
    emit("onChange", props.variable, values);
  } else {
    values.splice(check, 1);
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


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'checkbox')
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, [
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$7, [
                vue.createVNode(script$a, {
                  variant: "Warning",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("p", _hoisted_3$7, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_4$7, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          (__props.orientation === 'vertical')
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$7, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.options, (option, optIdx) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    class: "form-checkbox",
                    key: optIdx
                  }, [
                    vue.createElementVNode("input", {
                      onChange: $event => (entry(option)),
                      type: "checkbox"
                    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_6$7),
                    vue.createTextVNode(),
                    vue.createElementVNode("label", _hoisted_7$3, vue.toDisplayString(option), 1 /* TEXT */)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : vue.createCommentVNode("v-if", true),
          (__props.orientation === 'horizontal')
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8$2, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.options, (option, optIdx) => {
                  return (vue.openBlock(), vue.createElementBlock("span", {
                    class: "form-checkbox",
                    key: optIdx
                  }, [
                    vue.createElementVNode("input", {
                      onChange: $event => (entry(option)),
                      type: "checkbox"
                    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_9$2),
                    vue.createTextVNode(),
                    vue.createElementVNode("label", _hoisted_10$2, vue.toDisplayString(option), 1 /* TEXT */)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11$2, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$8.__scopeId = "data-v-14fc327c";
script$8.__file = "src/components/CheckboxGroup.vue";

const _hoisted_1$7 = { key: 0 };
const _hoisted_2$6 = { class: "label" };
const _hoisted_3$6 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_4$6 = ["required"];
const _hoisted_5$6 = { key: 0 };
const _hoisted_6$6 = {
  key: 1,
  class: "help"
};


var script$7 = {
  __name: 'FormTextArea',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "32044524-highlightColor": (__props.highlightColor),
  "32044524-textColor": (__props.textColor),
  "32044524-themeColor": (__props.themeColor)
}));




let formData = {};
let hasError = vue.ref(false);
let errorMessage = null;

function validate(){
  if(props.validations.maxLength){
    if(formData[props.variable].length > props.validations.maxLength){
      hasError.value = true;
      errorMessage = "This is longer than "+ props.validations.maxLength + " characters";
      return true;
    }else {
      hasError.value = false;
      errorMessage = null;
    }
  }

  if (props.validations.regex) {
    let regex = new RegExp(props.validations.regex);
    let str = formData[props.variable];
    if (str != null && str !== "") {
      if (regex.test(str)) {
        hasError.value = false;
        errorMessage = null;
      } else {
        hasError.value = true;
        errorMessage = "Invalid " + props.label;
        return true;
      }
    } else {
      hasError.value = false;
      errorMessage = null;
    }
  }

  return false
}

vue.onMounted(() => {
  Reflect.set(formData, props.variable, null);
});

function capture() {
  validate();
  emit("onChange", props.variable, formData[props.variable]);
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'text-lg')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$7, [
          vue.createElementVNode("p", _hoisted_2$6, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_3$6, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("textarea", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: "input form-input",
            rows: "4",
            onInput: capture,
            required: props.required
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_4$6), [
            [vue.vModelText, vue.unref(formData)[props.variable]]
          ]),
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$6, [
                vue.createVNode(script$a, {
                  variant: "Error",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$6, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$7.__scopeId = "data-v-32044524";
script$7.__file = "src/components/FormTextArea.vue";

function  useStringValidation(){
    let hasError = vue.ref(false);
    let errorMessage = vue.ref("");

    function validate(validations, value, label){

        if (validations.maxLength) {
            if (value.length > validations.maxLength) {
                hasError.value = true;
                errorMessage.value = "This is longer than " + validations.maxLength + " characters";
            } else {
                hasError.value = false;
                errorMessage.value = "";
            }
        }

        if (validations.regex) {
            let regex = new RegExp(validations.regex);
            let str = value;
            if (str != null && str !== "") {
                if (regex.test(str)) {
                    hasError.value = false;
                    errorMessage.value = null;
                } else {
                    hasError.value = true;
                    errorMessage.value = "Invalid " + label;
                }
            } else {
                hasError.value = false;
                errorMessage.value = null;
            }
        }
    }

    return {hasError, errorMessage, validate}
}

function useNumberValidation(){
    let hasError = vue.ref(false);
    let errorMessage = vue.ref("");

    function validate(validations, value, label){
        if(value){
            if (validations.max) {
                if (value > validations.max) {
                    hasError.value = true;
                    errorMessage.value = "It is more than the maximum " + label;
                    return
                }else {
                    hasError.value = false;
                    errorMessage.value = null;
                }
            }else {
                hasError.value = false;
                errorMessage.value = null;
            }

            if (validations.min) {
                if (value < validations.min) {
                    hasError.value = true;
                    errorMessage.value = "It is less than the minimum " + label;
                    return;
                }else {
                    hasError.value = false;
                    errorMessage.value = null;
                }
            }else {
                hasError.value = false;
                errorMessage.value = null;
            }
        }else {
            hasError.value = false;
            errorMessage.value = null;
        }
    }

    return {hasError, errorMessage, validate}
}

const _hoisted_1$6 = { key: 0 };
const _hoisted_2$5 = { class: "label" };
const _hoisted_3$5 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_4$5 = ["required"];
const _hoisted_5$5 = { key: 0 };
const _hoisted_6$5 = {
  key: 1,
  class: "help"
};
const _hoisted_7$2 = { key: 1 };
const _hoisted_8$1 = { class: "label" };
const _hoisted_9$1 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_10$1 = ["required"];
const _hoisted_11$1 = { key: 0 };
const _hoisted_12$1 = {
  key: 1,
  class: "help"
};


var script$6 = {
  __name: 'FormInput',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "60c38a66-highlightColor": (__props.highlightColor),
  "60c38a66-textColor": (__props.textColor),
  "60c38a66-themeColor": (__props.themeColor)
}));




const stringValidator = useStringValidation();
let formData = {};

vue.onMounted(() => {
  Reflect.set(formData, props.variable, null);
});

function capture() {
  stringValidator.validate(props.validations, formData[props.variable], props.label);
  emit("onChange", props.variable, formData[props.variable]);
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'text')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$6, [
          vue.createElementVNode("p", _hoisted_2$5, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_3$5, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: vue.normalizeClass(vue.unref(stringValidator).hasError.value ? 'err-input' : 'input form-input'),
            type: "text",
            onInput: capture,
            required: props.required
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_4$5), [
            [vue.vModelText, vue.unref(formData)[props.variable]]
          ]),
          (vue.unref(stringValidator).hasError.value)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$5, [
                vue.createVNode(script$a, {
                  variant: "Error",
                  message: vue.unref(stringValidator).errorMessage.value
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$5, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true),
    (props.type === 'text-masked')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$2, [
          vue.createElementVNode("p", _hoisted_8$1, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_9$1, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: vue.normalizeClass(vue.unref(stringValidator).hasError.value ? 'err-input' : 'input form-input'),
            type: "password",
            onInput: capture,
            required: props.required
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_10$1), [
            [vue.vModelText, vue.unref(formData)[props.variable]]
          ]),
          (vue.unref(stringValidator).hasError.value)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11$1, [
                vue.createVNode(script$a, {
                  variant: "Error",
                  message: vue.unref(stringValidator).errorMessage.value
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_12$1, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$6.__scopeId = "data-v-60c38a66";
script$6.__file = "src/components/FormInput.vue";

const _hoisted_1$5 = { key: 0 };
const _hoisted_2$4 = { key: 0 };
const _hoisted_3$4 = { class: "label" };
const _hoisted_4$4 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_5$4 = ["placeholder", "required"];
const _hoisted_6$4 = {
  key: 1,
  class: "help"
};


var script$5 = {
  __name: 'FormDate',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "204ef5c2-highlightColor": (__props.highlightColor),
  "204ef5c2-textColor": (__props.textColor),
  "204ef5c2-themeColor": (__props.themeColor)
}));




let formData = {};
let hasError = false;
let errorMessage = "";

vue.onMounted(() => {
  Reflect.set(formData, props.variable, null);
});

function capture() {
  emit("onChange", props.variable, formData[props.variable]);
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'date')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$5, [
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$4, [
                vue.createVNode(script$a, {
                  variant: "Warning",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("p", _hoisted_3$4, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_4$4, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: "input form-input",
            type: "date",
            onInput: capture,
            placeholder: 'Enter your ' + props.label,
            required: props.required
          }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_5$4), [
            [vue.vModelText, vue.unref(formData)[props.variable]]
          ]),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$4, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$5.__scopeId = "data-v-204ef5c2";
script$5.__file = "src/components/FormDate.vue";

const _hoisted_1$4 = { key: 0 };
const _hoisted_2$3 = { key: 0 };
const _hoisted_3$3 = { class: "label" };
const _hoisted_4$3 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_5$3 = ["value"];
const _hoisted_6$3 = {
  key: 1,
  class: "help"
};


var script$4 = {
  __name: 'FormSelect',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "04f33510-highlightColor": (__props.highlightColor),
  "04f33510-textColor": (__props.textColor),
  "04f33510-themeColor": (__props.themeColor)
}));




let formData = {};
let hasError = false;
let errorMessage = "";

vue.onMounted(() => {
  Reflect.set(formData, props.variable, null);
});

function capture() {
  emit("onChange", props.variable, formData[props.variable]);
}

return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'select')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$4, [
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$3, [
                vue.createVNode(script$a, {
                  variant: "Warning",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("p", _hoisted_3$3, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_4$3, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: "select form-select",
            onChange: capture
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(props.options, (option, optIdx) => {
              return (vue.openBlock(), vue.createElementBlock("option", {
                class: "option",
                key: optIdx,
                value: option
              }, vue.toDisplayString(option), 9 /* TEXT, PROPS */, _hoisted_5$3))
            }), 128 /* KEYED_FRAGMENT */))
          ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue.vModelSelect, vue.unref(formData)[props.variable]]
          ]),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$3, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$4.__scopeId = "data-v-04f33510";
script$4.__file = "src/components/FormSelect.vue";

const _withScopeId$1 = n => (vue.pushScopeId("data-v-52f3db48"),n=n(),vue.popScopeId(),n);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$2 = { style: {"padding-top":"15px","padding-bottom":"7px"} };
const _hoisted_4$2 = { class: "label" };
const _hoisted_5$2 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_6$2 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/vue.createElementVNode("span", { class: "slider round" }, null, -1 /* HOISTED */));
const _hoisted_7$1 = {
  key: 1,
  class: "help"
};

var script$3 = {
  __name: 'FormSwitch',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "52f3db48-highlightColor": (__props.highlightColor),
  "52f3db48-themeColor": (__props.themeColor),
  "52f3db48-textColor": (__props.textColor)
}));




let formData = {};
let hasError = false;
let errorMessage = "";

vue.onMounted(() => {
  Reflect.set(formData, props.variable, false);
});

function check(id, variable){
  formData[variable] = !formData[variable];
  document.getElementById(id).checked = formData[variable];
  emit("onChange", props.variable, formData[props.variable]);
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'switch')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$3, [
          (vue.unref(hasError))
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_2$2, [
                vue.createVNode(script$a, {
                  variant: "Warning",
                  message: vue.unref(errorMessage)
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_3$2, [
            vue.createElementVNode("span", _hoisted_4$2, [
              vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
              (props.required)
                ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_5$2, "*"))
                : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("div", {
              class: "switch",
              onClick: _cache[1] || (_cache[1] = $event => (check('switch', props.variable)))
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
                class: "form-switch",
                id: "switch",
                type: "checkbox"
              }, null, 512 /* NEED_PATCH */), [
                [vue.vModelCheckbox, vue.unref(formData)[props.variable]]
              ]),
              _hoisted_6$2
            ])
          ]),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$1, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$3.__scopeId = "data-v-52f3db48";
script$3.__file = "src/components/FormSwitch.vue";

const _hoisted_1$2 = { class: "instructions" };


var script$2 = {
  __name: 'Instructions',
  props: {
  text: {
    type: String,
    default: ""
  },
  backgroundColor: {
    type: String,
    default: "#d50303"
  },
  textColor: {
    type: String,
    default: "#fff"
  },
},
  setup(__props) {

const props = __props;

vue.useCssVars(_ctx => ({
  "7136df55-backgroundColor": (__props.backgroundColor),
  "7136df55-textColor": (__props.textColor)
}));




return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, vue.toDisplayString(props.text), 1 /* TEXT */))
}
}

};

script$2.__scopeId = "data-v-7136df55";
script$2.__file = "src/components/Instructions.vue";

const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { class: "label" };
const _hoisted_3$1 = {
  key: 0,
  class: "mandatory-indicator"
};
const _hoisted_4$1 = ["required"];
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = {
  key: 1,
  class: "help"
};


var script$1 = {
  __name: 'FormInputNumber',
  props: {
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
},
  emits: ['onChange'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "7c13e2cf-highlightColor": (__props.highlightColor),
  "7c13e2cf-textColor": (__props.textColor),
  "7c13e2cf-themeColor": (__props.themeColor)
}));




let numberValidator = useNumberValidation();
let formData = {};

vue.onMounted(() => {
  Reflect.set(formData, props.variable, null);
});

function capture() {
  numberValidator.validate(props.validations, formData[props.variable], props.label);
  emit("onChange", props.variable, formData[props.variable]);
}


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    (props.type === 'number')
      ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1$1, [
          vue.createElementVNode("p", _hoisted_2$1, [
            vue.createTextVNode(vue.toDisplayString(props.label) + " ", 1 /* TEXT */),
            (props.required)
              ? (vue.openBlock(), vue.createElementBlock("label", _hoisted_3$1, "*"))
              : vue.createCommentVNode("v-if", true)
          ]),
          vue.withDirectives(vue.createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((vue.unref(formData)[props.variable]) = $event)),
            class: vue.normalizeClass(vue.unref(numberValidator).hasError.value ? 'err-input' : 'input form-input'),
            type: "number",
            onInput: capture,
            placeholder: "0",
            required: props.required
          }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_4$1), [
            [vue.vModelText, vue.unref(formData)[props.variable]]
          ]),
          (vue.unref(numberValidator).hasError.value)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5$1, [
                vue.createVNode(script$a, {
                  variant: "Error",
                  message: vue.unref(numberValidator).errorMessage.value
                }, null, 8 /* PROPS */, ["message"])
              ]))
            : vue.createCommentVNode("v-if", true),
          (props.help)
            ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$1, vue.toDisplayString(props.help), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ]))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script$1.__scopeId = "data-v-7c13e2cf";
script$1.__file = "src/components/FormInputNumber.vue";

const _withScopeId = n => (vue.pushScopeId("data-v-69df934e"),n=n(),vue.popScopeId(),n);
const _hoisted_1 = { class: "container" };
const _hoisted_2 = ["onSubmit"];
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { style: {"display":"flex"} };
const _hoisted_6 = {
  key: 0,
  class: "inner-column"
};
const _hoisted_7 = { key: 1 };
const _hoisted_8 = {
  key: 1,
  style: {"padding":"15px 0"}
};
const _hoisted_9 = ["href"];
const _hoisted_10 = { class: "button-holder" };
const _hoisted_11 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "btn" }, null, -1 /* HOISTED */));
const _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "btn" }, null, -1 /* HOISTED */));
const _hoisted_13 = { class: "btn" };
const _hoisted_14 = { class: "btn" };
const _hoisted_15 = {
  class: "button-col-width button",
  type: "submit"
};


var script = {
  __name: 'FormBuilder',
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
  emits: ['onCancel', 'onSubmit', 'onSubmitted'],
  setup(__props, { emit }) {

const props = __props;

vue.useCssVars(_ctx => ({
  "69df934e-textColor": (__props.textColor),
  "69df934e-fontFamily": (__props.fontFamily),
  "69df934e-themeColor": (__props.themeColor),
  "69df934e-btnWidth": (vue.unref(btnWidth)),
  "69df934e-colSpacing": (__props.colSpacing)
}));




const form = useFormControlStore();


const formData = {};
let builderData = {};
let btnWidth = "100%";

vue.onMounted(() => {
  if (!props.hasCancelButton) {
    btnWidth = "50%";
  }

  if (props.loadFrom !== null) {
    fetch();
  }

  if (props.data !== null) {
    builderData = props.data;
  }
});

function fetch() {
  form.fetchForm(props.loadFrom);
}

function onFormUpdated(variable, value){
  formData[variable] = value;
}
function onSubmit() {
  alert(JSON.stringify(formData));
  if (props.loadFrom !== null) {
    let url = getEndpoint(form.formData.server);
    form.submitForm(url, formData);
  } else {
    emit("onSubmit", formData);
  }
}

function cancel() {
  emit("onCancel", "canceled");
}

function getEndpoint(server) {
  return server.url + ":" + server.port + server.endpoint;
}

function pickedItem(value, variable) {
  formData[variable] = value;
}

function checkedItems(values, variable) {
  formData[variable] = values;
}

vue.watch(() => form.formData, () => {
  builderData = form.formData;
});

vue.watch(() => form.submit, () => {
  emit("onSubmitted", form.submit);
});

vue.watch(() => form.error, () => {
  alert(JSON.stringify(form.error));
});


return (_ctx, _cache) => {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    (vue.unref(form).formData)
      ? (vue.openBlock(), vue.createElementBlock("form", {
          key: 0,
          class: vue.normalizeClass((__props.hasBorder) ? 'form' : (__props.hasBorderWithShadow) ? 'form-shadow-borderless' : 'form-borderless'),
          id: "form",
          onSubmit: vue.withModifiers(onSubmit, ["prevent"])
        }, [
          vue.createElementVNode("h2", _hoisted_3, vue.toDisplayString(vue.unref(builderData).title), 1 /* TEXT */),
          (vue.unref(builderData).instructions)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
                vue.createVNode(script$2, {
                  text: vue.unref(builderData).instructions.information,
                  "background-color": vue.unref(builderData).instructions.backgroundColor
                }, null, 8 /* PROPS */, ["text", "background-color"])
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_5, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(builderData).form.columns, (column, cidx) => {
              return (vue.openBlock(), vue.createElementBlock("div", {
                key: cidx,
                class: "column"
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(column.fields, (element, idx) => {
                  return (vue.openBlock(), vue.createElementBlock("div", { key: idx }, [
                    (element.type === 'column')
                      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
                          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(element.columns, (col, col_idx) => {
                            return (vue.openBlock(), vue.createElementBlock("span", {
                              key: col_idx,
                              class: vue.normalizeClass((col_idx === element.columns.length - 1) ? 'col-end' : 'col')
                            }, [
                              vue.createVNode(script$6, {
                                type: col.type,
                                label: col.label,
                                variable: col.variable,
                                required: col.required,
                                help: col.help,
                                validations: col.validations,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$1, {
                                type: col.type,
                                label: col.label,
                                variable: col.variable,
                                required: col.required,
                                help: col.help,
                                validations: col.validations,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$5, {
                                type: col.type,
                                label: col.label,
                                variable: col.variable,
                                required: col.required,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$7, {
                                type: col.type,
                                label: col.label,
                                variable: col.variable,
                                required: col.required,
                                validations: col.validations,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$3, {
                                type: col.type,
                                label: col.label,
                                variable: col.variable,
                                required: col.required,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$4, {
                                type: col.type,
                                label: col.label,
                                options: col.options,
                                variable: col.variable,
                                required: col.required,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$9, {
                                type: col.type,
                                onPickedItem: pickedItem,
                                label: col.label,
                                variable: col.variable,
                                options: col.options,
                                orientation: col.orientation,
                                required: col.required,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                              vue.createVNode(script$8, {
                                type: col.type,
                                onCheckedItems: checkedItems,
                                label: col.label,
                                variable: col.variable,
                                options: col.options,
                                orientation: col.orientation,
                                required: col.required,
                                help: col.help,
                                "theme-color": __props.themeColor,
                                "highlight-color": __props.highlightColor,
                                "text-color": __props.textColor,
                                onOnChange: onFormUpdated
                              }, null, 8 /* PROPS */, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
                            ], 2 /* CLASS */))
                          }), 128 /* KEYED_FRAGMENT */))
                        ]))
                      : (vue.openBlock(), vue.createElementBlock("div", _hoisted_7, [
                          vue.createVNode(script$6, {
                            type: element.type,
                            label: element.label,
                            variable: element.variable,
                            required: element.required,
                            help: element.help,
                            validations: element.validations,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$1, {
                            type: element.type,
                            label: element.label,
                            variable: element.variable,
                            required: element.required,
                            help: element.help,
                            validations: element.validations,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "validations", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$5, {
                            type: element.type,
                            label: element.label,
                            variable: element.variable,
                            required: element.required,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$7, {
                            type: element.type,
                            label: element.label,
                            variable: element.variable,
                            required: element.required,
                            validations: element.validations,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "validations", "help", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$3, {
                            type: element.type,
                            label: element.label,
                            variable: element.variable,
                            required: element.required,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$4, {
                            type: element.type,
                            label: element.label,
                            options: element.options,
                            variable: element.variable,
                            required: element.required,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "options", "variable", "required", "help", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$9, {
                            type: element.type,
                            onPickedItem: pickedItem,
                            label: element.label,
                            variable: element.variable,
                            options: element.options,
                            orientation: element.orientation,
                            required: element.required,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"]),
                          vue.createVNode(script$8, {
                            type: element.type,
                            onCheckedItems: checkedItems,
                            label: element.label,
                            variable: element.variable,
                            options: element.options,
                            orientation: element.orientation,
                            required: element.required,
                            help: element.help,
                            "theme-color": __props.themeColor,
                            "highlight-color": __props.highlightColor,
                            "text-color": __props.textColor,
                            onOnChange: onFormUpdated
                          }, null, 8 /* PROPS */, ["type", "label", "variable", "options", "orientation", "required", "help", "theme-color", "highlight-color", "text-color"])
                        ]))
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          (vue.unref(builderData).informationLinks)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_8, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(builderData).informationLinks, (link, lidx) => {
                  return (vue.openBlock(), vue.createElementBlock("p", { key: lidx }, [
                    vue.createTextVNode(vue.toDisplayString(link.label) + " ", 1 /* TEXT */),
                    vue.createElementVNode("a", {
                      class: "link",
                      target: "_blank",
                      href: link.url
                    }, "here", 8 /* PROPS */, _hoisted_9)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ]))
            : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("div", _hoisted_10, [
            _hoisted_11,
            _hoisted_12,
            vue.createElementVNode("div", _hoisted_13, [
              (__props.hasCancelButton)
                ? (vue.openBlock(), vue.createElementBlock("button", {
                    key: 0,
                    class: "button-col-width outline-button",
                    type: "button",
                    onClick: cancel
                  }, "Cancel"))
                : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("div", _hoisted_14, [
              vue.createElementVNode("button", _hoisted_15, vue.toDisplayString(props.submitButtonText), 1 /* TEXT */)
            ])
          ])
        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_2))
      : vue.createCommentVNode("v-if", true)
  ]))
}
}

};

script.__scopeId = "data-v-69df934e";
script.__file = "src/FormBuilder.vue";

var components = {FormBuilder: script};

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;
