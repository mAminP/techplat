
import { Vue } from 'nuxt-property-decorator'
export default Vue.extend({
  name: 'SiteMixin',
  scrollToTop: true,
  transition (_to, _from) {
    return {
      name: 'site',
      mode: 'out-in',
      beforeLeave (element:any) {
        // @ts-ignore
        this.prevHeight = getComputedStyle(element).height as unknown as number
      },
      enter (element:any) {
        const { height } = getComputedStyle(element)
        // @ts-ignore
        element.style.height = this.prevHeight

        setTimeout(() => {
          element.style.height = height
        })
      },
      afterEnter (element:any) {
        element.style.height = 'auto'
      }
    }
  },
  data () {
    return {
      prevHeight: 0
    }
  }

})
