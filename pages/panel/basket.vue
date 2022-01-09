<template>
  <v-row dense>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> سبد خرید </span>
      </h1>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="basket.products"
        item-key="name"
        disable-filtering
        disable-pagination
        mobile-breakpoint="960"
        disable-sort
        hide-default-footer
        class="tbl transparent rounded-lg overflow-hidden"
      >
        <template #item.category="{ item }">
          <span>
            {{ item.category.name }}
          </span>
        </template>
        <template #item.price="{ item }">
          <span>
            {{ Number(item.price).toLocaleString("fa") }}
            <small class="ms-1">تومان</small>
          </span>
        </template>
        <template #item.quantity="{ item }">
          <span>
            {{ Number(item.quantity).toLocaleString("fa") }}
          </span>
        </template>
        <template #item.ops="{ item }">
          <BasketItemDeleteMenu :product-id="item.id" />
        </template>
      </v-data-table>
    </v-col>
    <v-col
      v-if="basket.products.length > 0"
      cols="12"
    >
      <v-row justify="space-between" align="center" align-sm="start">
        <v-col cols="auto" order="2" order-sm="1">
          <v-menu
            v-model="deleteDialog"
            transition="scroll-x-reverse-transition"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                :loading="deleteLoading"
                depressed
                color="error"
                v-on="on"
              >
                حذف همه موارد
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
                <v-btn :loading="deleteLoading" small depressed color="error" @click.stop="deleteBasket()">
                  <v-icon left small>
                    mdi-delete-outline
                  </v-icon>
                  حذف
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-col>
        <v-col
          class="ms-auto"
          order-sm="2"
          order="1"
          cols="12"
          xl="3"
          lg="4"
          md="5"
          sm="7"
        >
          <v-card flat rounded="lg">
            <v-card-title
              class="body-2 text-sm-body-1 text-md-h6 grey--text text--darken-1"
            >
              مبلغ کل فاکتور
            </v-card-title>
            <v-list dense class="grey--text">
              <template v-for="(product, index) in basket.products">
                <v-list-item :key="index" class="grey--text text--lighten-1">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ product.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action-text>
                    <span class="body-2 ff-kalameh-bold font-weight-bold grey--text text--lighten-1">
                      {{ Number(product.price).toLocaleString("fa") }}
                      <span class="ms-1">تومان</span>
                    </span>
                  </v-list-item-action-text>
                </v-list-item>
                <v-divider v-if="index+1 !== basket.products.length" :key="index" class="mx-3" />
              </template>
            </v-list>

            <v-list-item class="grey--text">
              <v-list-item-content>
                <v-list-item-title>
                  مبلغ کل:
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action-text>
                <span class="ff-kalameh-bold font-weight-bold grey--text text--darken-1 body-1 text-md-h6">
                  {{ Number(basket.total_price).toLocaleString("fa") }}
                  <span class="ms-1">تومان</span>
                </span>
              </v-list-item-action-text>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col order="3" cols="auto" sm="12" class=" d-flex flex-row align-center justify-end">
          <v-btn depressed color="primary" large>
            پرداخت کل فاکتور
            <v-icon right>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component, getModule } from 'nuxt-property-decorator'
import { Basket } from '~/models/Basket'
import BasketModule from '~/store/BasketModule'

@Component({
  layout: 'panel',
  middleware: ['auth'],
  transition: 'slide-y',
  head: {
    title: 'سبد خرید'
  },
  async asyncData (ctx: Context) {
    try {
      const BasketSTORE = getModule(BasketModule, ctx.store)
      await BasketSTORE.getBasketAsync()
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class BasketPage extends Vue {
  deleteLoading = false
  deleteDialog = false
  public get basket (): Basket {
    const BasketSTORE = getModule(BasketModule, this.$store)
    return BasketSTORE.basket
  }

  async deleteBasket () {
    try {
      this.deleteLoading = true
      this.deleteDialog = false
      const BasketSTORE = getModule(BasketModule, this.$store)
      const res = await BasketSTORE.deleteBasket()
      this.$notify.success(res)
    } catch (error) {
      this.$notify.error(error)
    } finally {
      this.deleteLoading = false
    }
  }

  headers = [
    {
      text: 'نام محصول',
      align: 'center rounded-r-lg line-v',
      class: 'rounded-r-lg',
      sortable: false,
      value: 'name'
    },
    { text: 'کد کالا', align: 'center', value: 'id' },
    { text: 'شرح کالا', align: 'center', value: 'category' },
    { text: 'تعداد', align: 'center', value: 'quantity' },
    // { text: 'تخفیف', align: 'center', value: 'protein' },
    {
      text: 'مبلغ کل ',
      align: 'center ',
      value: 'price'
    },
    {
      text: '',
      align: 'center rounded-l-lg',
      value: 'ops',
      class: 'rounded-l-lg'
    }
  ]
}
</script>

<style lang="scss" >

</style>
