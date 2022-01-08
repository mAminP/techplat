<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> نتایج خودارزیابی </span>
      </h1>
    </v-col>
    <template v-if="results.length > 0">
      <v-col
        v-for="(item,index) in results"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <PanelResultCard :item="item" />
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
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'panel',
  middleware: ['auth'],
  transition: 'slide-y',
  head: {
    title: 'نتایج'
  },
  async asyncData (ctx: Context) {
    try {
      const results = await ctx.$content('panel-results').fetch()
      return {
        results
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class Resluts extends Vue {
  results:any[] = []
}
</script>

<style lang="scss">
</style>
