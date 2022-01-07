import { injectable } from 'inversify'
import { IBasketService } from '../IBasketService'
import Logger from '~/utils/Logger'
import { $axios } from '~/utils/api'
import { Product } from '~/models/Product'
import { ApiMessage } from '~/models/ApiMessage'
import { Basket } from '~/models/Basket'

@injectable()
export class BasketService implements IBasketService {
  constructor () {
    Logger.info(`[CONSTRUCTOR] ${this.constructor.name}`)
  }

  async deleteBasketAsync (): Promise<ApiMessage> {
    try {
      const res = await $axios.$delete<ApiMessage>('/basket/')
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.deleteBasketAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async deleteProductFromBasketAsync (productId: string): Promise<ApiMessage> {
    try {
      const res = await $axios.$delete<ApiMessage>('/basket/products/{product_id}'.replace('{product_id}', productId))
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.deleteProductFromBasketAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async getBasketAsync (): Promise<Basket> {
    try {
      const res = await $axios.$get<Basket>('/basket/')
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.getBasketAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async putBasketProductAsync (product: Product): Promise<ApiMessage> {
    try {
      const res = await $axios.$put<ApiMessage>('/basket/products/', {
        id: product.id,
        quantity: 1
      })
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.putBasketProductAsync.name}->`, error)
      return Promise.reject(error)
    }
  }
}
