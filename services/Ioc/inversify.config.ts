import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { AuthService } from '../implementations/AuthService'
import { IAuthService } from '../IAuthService'
import { IUtilsService } from '../IUtilsService'
import { UtilsService } from '../implementations/UtilsService'
import { ProductService } from '../implementations/ProductService'
import { IBasketService } from '../IBasketService'
import { BasketService } from '../implementations/BasketService'
import { SYMBOLS } from './SYMBOLS'
import { IProductService } from './../IProductService'
export const container = new Container()

// // logics
container.bind<IAuthService>(SYMBOLS.IAuthService).to(AuthService).inTransientScope()
container.bind<IUtilsService>(SYMBOLS.IUtilsService).to(UtilsService).inTransientScope()
container.bind<IProductService>(SYMBOLS.IProductService).to(ProductService).inTransientScope()
container.bind<IBasketService>(SYMBOLS.IBasketService).to(BasketService).inTransientScope()

export const { lazyInject } = getDecorators(container)
