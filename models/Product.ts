import { ProductCategory } from './ProductCategory'

/* eslint-disable camelcase */
export class Product {
    id!: string
    name!: string
    description!: string
    price!:number
    price_text!:string
    image!:string
    slug!:string
    color!:string
    category!:ProductCategory
    type!:'LEGAL'|'REAL'
}
