<template>
  <v-menu
    v-model="deleteDialog"
    transition="scroll-x-reverse-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        :loading="loading"
        depressed
        color="error"
        v-on="on"
      >
        حذف
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
        <v-btn :loading="loading" small depressed color="error" @click.stop="deleteProduct()">
          <v-icon left small>
            mdi-delete-outline
          </v-icon>
          حذف
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from 'nuxt-property-decorator'
import BasketModule from '~/store/BasketModule'

@Component({})
export default class BasketItemDeleteMenu extends Vue {
@Prop({ type: String, required: true }) productId!: string
deleteDialog = false
loading = false

async deleteProduct () {
  try {
    this.loading = true
    this.deleteDialog = false
    const BasketSTORE = getModule(BasketModule, this.$store)
    const res = await BasketSTORE.deleteProduct(this.productId)
    this.$notify.success(res)
  } catch (error) {
    this.$notify.error(error)
  } finally {
    this.loading = false
  }
}
}
</script>

<style lang="scss">

</style>
