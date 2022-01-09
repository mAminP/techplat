<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> اطلاعات تکمیلی </span>
      </h1>
    </v-col>
    <template v-if="information.length > 0">
      <v-col
        v-for="(item,index) in information"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card flat rounded="lg" class="d-flex flex-column align-center">
          <v-card-title
            class=""
            v-text="item.title"
          />
          <v-card-text>
            <v-btn block color="primary" depressed>
              ثبت
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </template>
    <template v-else>
      <v-col>
        <v-alert text type="info" border="left" prominent>
          موردی یافت نشد
        </v-alert>
      </v-col>
    </template>
  </v-row>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'panel',
  middleware: ['auth'],
  transition: 'slide-y',
  head: {
    title: 'اصلاعات تکمیلی'
  },
  async asyncData (ctx: Context) {
    try {
      const information = await ctx.$content('panel-information').fetch()
      return {
        information
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class Information extends Vue {
  information :any[] = []
}
</script>

<style lang="scss">

</style>
