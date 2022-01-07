<template>
  <v-list-item @click.stop>
    <v-list-item-content>
      <v-list-item-title>
        {{ product.name }}
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action-text class="mx-3">
      <span>
        {{ Number(product.price).toLocaleString('fa') }}
      </span>
      <small>تومان</small>
    </v-list-item-action-text>
    <v-list-item-action>
      <v-menu
        v-model="deleteDialog"
      >
        <template #activator="{ on:don, attrs }">
          <v-btn
            v-bind="attrs"
            :loading="deleteLoading"
            small
            icon
            color="grey"
            v-on="don"
          >
            <v-icon small>
              mdi-delete-outline
            </v-icon>
          </v-btn>
        </template>
        <v-card elevation="15">
          <v-card-title class="body-2 error white--text py-2">
            آیا مطمعن هستید؟
          </v-card-title>
          <v-card-actions>
            <v-spacer />
            <v-btn small plain @click.stop="deleteDialog = false">
              لغو
            </v-btn>
            <v-btn :loading="deleteLoading" small depressed color="error" @click.stop="deleteProduct(product.id)">
              <v-icon left small>
                mdi-delete-outline
              </v-icon>
              حذف
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from 'nuxt-property-decorator'
import { Product } from '~/models/Product'
import BasketModule from '~/store/BasketModule'

@Component({})
export default class HeaderBasketItem extends Vue {
    @Prop({ type: Object, required: true }) product!:Product
deleteLoading = false
deleteDialog = false
async deleteProduct (productId:string) {
  try {
    this.deleteLoading = true
    const BasketSTORE = getModule(BasketModule, this.$store)
    const res = await BasketSTORE.deleteProduct(productId)
    this.$notify.success(res)
    this.deleteDialog = false
  } catch (error) {
    this.$notify.error(error)
  } finally {
    this.deleteLoading = false
  }
}
}
</script>

<style lang="scss">

</style>
