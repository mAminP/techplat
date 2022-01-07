import { getModule } from 'nuxt-property-decorator'
import Vuex, { Store } from 'vuex'
import BasketModule from './BasketModule'
import Logger from '~/utils/Logger'

export const actions = {
  async nuxtServerInit (store: Store<any>) {
    if (store.state.auth.loggedIn) {
      Logger.info('Getting User Basket')
      const basketModule = getModule(BasketModule, store)
      await basketModule.getBasketAsync()
    }
  }
}

export function createStore () {
  return new Vuex.Store({
    modules: {
      BasketModule
    }
  })
}
