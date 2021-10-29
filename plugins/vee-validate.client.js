import Vue from "vue";
import {extend, setInteractionMode, ValidationObserver, ValidationProvider} from "vee-validate";
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
// import {ValidationProvider} from "vee-validate/dist/vee-validate.full.esm";

// DEFINED ERROR MESSAGES
import {required, numeric, between} from "vee-validate/dist/rules";
setInteractionMode("eager")
extend('required', {
  ...required,
  message: '{_field_} là bắt buộc',
})

extend('numeric', {
  ...numeric,
  message: '{_field_} phải là số',
})

extend('between', {
  ...between,
  params: ['min', 'max'],
  message: '{_field_} phải ở giữa {min} và {max}',
})
// DEFAULT ERROR MESSAGES
import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
