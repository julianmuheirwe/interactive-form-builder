import FormBuilder from "./lib/FormBuilder.vue";

export default {
    install: (app, options) =>{
      app.component("FormBuilder", FormBuilder)
    },
};