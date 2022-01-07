import {
  Module,
  VuexModule
} from 'nuxt-property-decorator'
import IThemeColors from './../models/UI/IThemeColors'

@Module({ name: 'Utils', stateFactory: true, namespaced: true })
export default class Utils extends VuexModule {
    private readonly _c: IThemeColors = {
      error: 'error',
      success: 'success',
      secondary: 'secondary',
      c1: 'c1',
      greydark: 'greydark',
      white: 'white',
      red1: 'red1',
      green1: 'green1',
      oringe1: 'oringe1',
      info1: 'info1'
    }

    get colors (): IThemeColors {
      return this._c
    }
}
