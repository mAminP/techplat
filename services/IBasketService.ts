import { ApiMessage } from '~/models/ApiMessage'
import { Basket } from '~/models/Basket'
import { Product } from '~/models/Product'

export interface IBasketService {
    /**
     * NEED AUTH
     *
     * @param product :Product
     */
    putBasketProductAsync(product: Product): Promise<ApiMessage>
    /**
   * NEED AUTH
   *
   */
    getBasketAsync(): Promise<Basket>
    /**
   * NEED AUTH
   *
   */
     deleteBasketAsync(): Promise<ApiMessage>
    /**
     * NEED AUTH
     *
     * @param productId :Product id As string
     */
    deleteProductFromBasketAsync(productId: string): Promise<ApiMessage>
}
