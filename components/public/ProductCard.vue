<template>
  <v-card elevation="12" rounded="lg" class="fill-height d-flex flex-column">
    <v-img
      class="mt-6 mx-6 mx-md-3 mt-md-3 mx-2 mt-2 rounded-lg"
      :src="product.image"
      aspect-ratio="1"
    >
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-skeleton-loader
            width="100%"
            height="100%"
            class="mx-auto"
            type="image"
          />
        </v-row>
      </template>
    </v-img>
    <v-card-text
      class="grey--text text--darken-2 ff-kalameh-bold font-size-1-3rem"
      v-text="product.name"
    />
    <v-card-subtitle class="grey--text mb-auto" v-text="desc" />
    <v-card-actions class="mt-auto">
      <v-row>
        <v-col cols="6">
          <v-tooltip
            v-if="
              ($auth.loggedIn && $auth.user.profile.type === product.type) ||
                !$auth.loggedIn"
            top
          >
            <template #activator="{ on, attrs }">
              <v-btn v-bind="attrs" block disabled depressed v-on="on">
                <span v-if="product.type === 'LEGAL'">
                  برای کاربران حقوقی
                </span>
                <span v-else-if="product.type === 'REAL'">
                  برای کاربران حقیقی
                </span>
              </v-btn>
            </template>
            <span>برای خرید لطفا وارد حساب کاربری خود شوید</span>
          </v-tooltip>
          <v-badge
            v-else
            :color="product.color"
            :value="isInBasket"
            overlap
            bordered
            icon="mdi-cart-check"
          >
            <v-btn
              v-if="!isInBasket"
              block
              :disabled="!$auth.loggedIn"
              :color="product.color"
              depressed
              :loading="loading"
              @click.stop="addToCart"
            >
              خرید محصول
            </v-btn>
            <v-btn
              v-else
              depressed
              :color="product.color"
              :to="{name: 'panel-basket'}"
            >
              مشاهده در سبد خرید
            </v-btn>
          </v-badge>
        </v-col>
        <v-col cols="6" class="d-flex flex-row justify-end">
          <v-btn plain>
            توضیحات
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from 'nuxt-property-decorator'
import _ from 'lodash'
import { Product } from '~/models/Product'
import { lazyInject } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IBasketService } from '~/services/IBasketService'
import BasketModule from '~/store/BasketModule'
@Component({})
export default class ProductCard extends Vue {
  @Prop({ type: Object, required: true }) product!: Product;
  @lazyInject(SYMBOLS.IBasketService)
  private _basketService!: IBasketService;

  loading = false;

  async getBasket () {
    try {
      const BasketSTORE = getModule(BasketModule, this.$store)
      const res = await BasketSTORE.getBasketAsync()
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  public get isInBasket () : boolean {
    const basketModule = getModule(BasketModule, this.$store)
    return basketModule.basket.products.some(a => a.id === this.product.id)
  }

  async addToCart () {
    if (!this.$auth.loggedIn) { return }
    try {
      this.loading = true
      const res = await this._basketService.putBasketProductAsync(
        this.product
      )
      await this.getBasket()
      this.$notify.success(res)
    } catch (error) {
      this.$notify.error(error as any)
    } finally {
      this.loading = false
    }
  }

  public get desc (): string {
    return _.truncate(this.product.description, {
      length: 150,
      separator: '...'
    })
  }
}
</script>

<style lang="scss">
</style>
