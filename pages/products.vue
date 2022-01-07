<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <HeadTitle>محصولات تک‌پلت</HeadTitle>
      </v-col>
      <v-col cols="12" class="d-flex flex-row align-center justify-center">
        <v-chip-group
          active-class="primary--text"
          column
        >
          <v-chip
            v-for="(category,index) in categories"
            :key="index"
            color="grey lighten-4"

            :class="{'v-chip--active primary--text':+$route.query.category === +category.id}"
            :to="+$route.query.category === +category.id ? {query:{category: ''}}: {query:{category: category.id}}"
            label
            exact
          >
            {{ category.name }}
          </v-chip>
        </v-chip-group>
      </v-col>
      <template v-if="products.length > 0">
        <v-col
          v-for="(product, index) in products"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          align-self="stretch"
        >
          <ProductCard :product="product" />
        </v-col>
      </template>
      <template v-else>
        <v-col cols="12">
          <v-alert border="left" prominent type="warning">
            هیچ محصولی تا کنون ثبت نشده است
          </v-alert>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component } from 'nuxt-property-decorator'
import SiteMixin from '~/mixins/SiteMixin'
import { Product } from '~/models/Product'
import { ProductCategory } from '~/models/ProductCategory'
import { ProductFilter } from '~/models/ProductFilter'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IProductService } from '~/services/IProductService'

@Component({
  watchQuery: true,
  head: {
    title: 'محصولات'
  },
  async asyncData (ctx: Context) {
    try {
      const _productService = container.get<IProductService>(SYMBOLS.IProductService)
      const categories = await _productService.getProductsCategoriesAsync()
      const productFilter = new ProductFilter()
      if (ctx.query.category) {
        productFilter.category = ctx.query.category as string
      }
      const products = await _productService.getProductsAsync(productFilter)

      return {
        products,
        categories
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class Products extends SiteMixin {
  public categories: ProductCategory[] = []
  public products: Product[] = []
}
</script>

<style lang="scss">
</style>
