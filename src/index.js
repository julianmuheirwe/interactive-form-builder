
import FormBuilder from "./lib/FormBuilder.vue";

export default {
    install: (app) =>{
      app.component("FormBuilder", FormBuilder)
    },
};

export {default as FormBuilder} from "./lib/FormBuilder.vue";
