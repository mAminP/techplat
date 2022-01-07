import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  name: 'AuthMixin',
  layout: 'auth',
  middleware: ['not-auth'],
  transition: {
    name: 'fade',
    mode: 'out-in'
  }

})
export default class AuthMixin extends Vue {

}
