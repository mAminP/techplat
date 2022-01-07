import qs from 'querystring'
import { injectable } from 'inversify'
import { IProductService } from '../IProductService'
import Logger from '~/utils/Logger'
import { $axios } from '~/utils/api'
import { Product } from '~/models/Product'
import { ProductCategory } from '~/models/ProductCategory'
import { ProductFilter } from '~/models/ProductFilter'
@injectable()
export class ProductService implements IProductService {
  constructor () {
    Logger.info(`[CONSTRUCTOR] ${this.constructor.name}`)
  }

  async getProductsCategoriesAsync (): Promise<ProductCategory[]> {
    try {
      const res = await $axios.$get<ProductCategory[]>('/product-categories/')
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.getProductsCategoriesAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async getProductsAsync (filter?:ProductFilter): Promise<Product[]> {
    try {
      const query = qs.stringify({ ...filter })
      const res = await $axios.$get<Product[]>(`products/?${query}`)
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.getProductsAsync.name}->`, error)
      return Promise.reject(error)
    }
  }
}
