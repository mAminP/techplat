<template>
  <v-badge left :content="basket.products.length.toLocaleString('fa')" :value="basket.products.length" bordered overlap>
    <v-menu
      eager
      :close-on-content-click="false"
      offset-y
      transition="slide-y-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          outlined
          v-bind="attrs"
          depressed
          class="no-btn-padding me-1"
          :loading="basketLoading"
          v-on="on"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </template>
      <v-card v-if="basket.products.length > 0" outlined class="border-primary mt-1">
        <v-list dense>
          <template v-for="(product,index) in basket.products">
            <HeaderBasketItem :key="index" :product="product" />
          </template>
        </v-list>
        <v-divider />
        <v-list dense nav dark color="primary">
          <v-list-item :to="{name: 'panel-basket'}">
            <v-list-item-title>مشاهده سبد خرید</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card v-else outlined class="border-primary mt-1">
        <v-card-text class="pa-3">
          سبد خرید شما خالی است.
        </v-card-text>
      </v-card>
    </v-menu>
  </v-badge>
</template>

<script lang="ts">
import { Vue, Component, getModule } from 'nuxt-property-decorator'
import { Basket } from '~/models/Basket'
import BasketModule from '~/store/BasketModule'

@Component({})
export default class HeaderUserBasket extends Vue {
  public get basket () : Basket {
    const BasketSTORE = getModule(BasketModule, this.$store)
    return BasketSTORE.basket
  }

  public get basketLoading () : boolean {
    const BasketSTORE = getModule(BasketModule, this.$store)
    return BasketSTORE.loading
  }
}
</script>

<style lang="scss">

</style>
