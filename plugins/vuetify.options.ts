// @ts-ignore
import fa from 'vuetify/es5/locale/fa'
import { Context } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'

// icons
// @ts-ignore
import IArrowLeft from '@/components/icons/IArrowLeft.vue'
// @ts-ignore
import IHome from '@/components/icons/IHome.vue'
// @ts-ignore
import IExit from '@/components/icons/IExit.vue'
// @ts-ignore
import IChart from '@/components/icons/IChart.vue'
// @ts-ignore
import IChartSquare from '@/components/icons/IChartSquare.vue'
// @ts-ignore
import IBag from '@/components/icons/IBag.vue'
// @ts-ignore
import ILable from '@/components/icons/ILable.vue'
// @ts-ignore
import ISettings from '@/components/icons/ISettings.vue'
// @ts-ignore
import IBell from '@/components/icons/IBell.vue'
// @ts-ignore
import ICalendar from '@/components/icons/ICalendar.vue'
// @ts-ignore
import IMessage from '@/components/icons/IMessage.vue'
// @ts-ignore
import IQuoteLeft from '@/components/icons/IQuoteLeft.vue'
// @ts-ignore
import IEdit from '@/components/icons/IEdit.vue'
export default function (_ctx: Context) {
  return {
    rtl: true,
    lang: {
      locales: { fa },
      current: 'fa'
    },
    icons: {
      values: {
        'arrow-left': {
          component: IArrowLeft
        },
        'quote-left': {
          component: IQuoteLeft
        },
        edit: {
          component: IEdit
        },
        message: {
          component: IMessage
        },
        calendar: {
          component: ICalendar
        },
        bell: {
          component: IBell
        },
        settings: {
          component: ISettings
        },
        lable: {
          component: ILable
        },
        bag: {
          component: IBag
        },
        chart: {
          component: IChart
        },
        chartSquare: {
          component: IChartSquare
        },
        home: {
          component: IHome
        },
        exit: {
          component: IExit
        }
      }
    },
    theme: {
      options: { customProperties: true },
      dark: false,
      themes: {
        light: {
          primary: '#3E7BF1',
          primary2: '#204489',
          success: '#8AC251',
          error: '#DE3C1F',
          warning: '#FFB93D',
          info: colors.blue.lighten1,
          white: colors.shades.white,
          grey: colors.grey.base
        }
      }
    }
  }
}
