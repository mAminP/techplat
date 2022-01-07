import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize
} from 'vee-validate'
import {
  required,
  min,
  email,
  integer,
  numeric,
  confirmed,
  is
} from 'vee-validate/dist/rules'
import fa from 'vee-validate/dist/locale/fa.json'
localize('fa', fa)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('is', is)
extend('required', required)
extend('confirmed', confirmed)
extend('min', min)
extend('email', email)
extend('numeric', numeric)
extend('integer', integer)

extend('minPirce', {
  params: ['len'],
  validate: (val, args) => {
    // eslint-disable-next-line eqeqeq
    return val >= args.len
  },
  message: '{_field_}  باید حداقل {len} تومان باشد'
})
extend('maxPrice', {
  params: ['len'],
  validate: (val, args) => {
    // eslint-disable-next-line eqeqeq
    return val <= args.len
  },
  message: '{_field_}  باید حداکثر {len} تومان باشد'
})
extend('length', {
  params: ['len'],
  validate: (val, args) => {
    // eslint-disable-next-line eqeqeq
    return val.length == args.len
  },
  message: '{_field_} باید {len} کارکتر باشد'
})
extend('phoneNumber', {
  validate: (val) => {
    return /^9\d{9}$/g.test(val)
  },
  message: 'فرمت شماره موبایل معتبر نیست'
})
extend('password', {
  validate: (val) => {
    return true
    // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})$/g.test(val)
  },
  message: 'فرمت {_field_} معتبر نیست'
})
extend('passwordConfirm', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'تکرار {_field_} یکسان نیست'

})
