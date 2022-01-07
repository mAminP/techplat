
import { VuexAction, VuexMutation, VuexModule, Module } from 'nuxt-property-decorator'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IBasketService } from '~/services/IBasketService'
import { Basket } from '~/models/Basket'
import { ApiMessage } from '~/models/ApiMessage'

@Module({ name: 'BasketModule', stateFactory: true, namespaced: true })
export default class BasketModule extends VuexModule {
  private _basket: Basket = { products: [], total_price: 0 }
  private _loading = false

  get basket (): Basket {
    return this._basket
  }

  get loading (): boolean {
    return this._loading
  }

  @VuexMutation private SETLOADER (bool: boolean) {
    this._loading = bool
  }

  @VuexMutation SET (basket: Basket) {
    this._basket = basket
  }

  @VuexMutation CLEAR () {
    this._basket = new Basket()
  }

  @VuexAction({ rawError: true })
  async deleteProduct (productId: string): Promise<ApiMessage> {
    try {
      this.SETLOADER(true)
      const _basketService = container.get<IBasketService>(SYMBOLS.IBasketService)
      const res: ApiMessage = await _basketService.deleteProductFromBasketAsync(productId)
      await this.getBasketAsync()
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      this.SETLOADER(false)
    }
  }

  @VuexAction({ rawError: true })
  async getBasketAsync (): Promise<Basket> {
    try {
      this.SETLOADER(true)
      const _basketService = container.get<IBasketService>(SYMBOLS.IBasketService)
      const res: Basket = await _basketService.getBasketAsync()
      this.SET(res)
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      this.SETLOADER(false)
    }
  }

  @VuexAction({ rawError: true })
  async deleteBasket (): Promise<ApiMessage> {
    try {
      this.SETLOADER(true)
      const _basketService = container.get<IBasketService>(SYMBOLS.IBasketService)
      const res = await _basketService.deleteBasketAsync()
      await this.getBasketAsync()
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    } finally {
      this.SETLOADER(false)
    }
  }
}
