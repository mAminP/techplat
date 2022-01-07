import { Product } from '~/models/Product'
import { ProductCategory } from '~/models/ProductCategory'
import { ProductFilter } from '~/models/ProductFilter'

export interface IProductService {
    getProductsAsync (filter? : ProductFilter): Promise<Product[]>
    getProductsCategoriesAsync() :Promise<ProductCategory[]>

}
