<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> تیکت ها </span>
      </h1>
    </v-col>
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="tikets"
        item-key="name"
        disable-filtering
        disable-pagination
        mobile-breakpoint="960"
        disable-sort
        hide-default-footer
        class="tbl transparent rounded-lg overflow-hidden"
      >
        <template #item.status="{ item }">
          <span :class="`${item.status.id === 1? 'warning':item.status.id === 2? 'primary': 'error'}--text`">
            {{ item.status.title }}
          </span>
        </template>
        <template #item.createdAt="{ item }">
          <span>
            {{ $moment(item.createdAt).format('jYYYY-jMM-jDD') }}
          </span>
        </template>
        <template #item.ops="{ item }">
          <v-btn color="primary" depressed>
            مشاهده تیکت
            <v-icon right>
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-col>
    <v-col cols="12" class="d-flex flex-row justify-center">
      <v-btn color="primary" depressed large>
        ارسال تیکت
      </v-btn>
    </v-col>
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
    title: 'تیکت ها'
  },
  async asyncData (ctx: Context) {
    try {
      const tikets = await ctx.$content('panel-tikets').fetch()
      return {
        tikets
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class Tikets extends Vue {
  tikets:any[] = []
  headers = [
    {
      text: 'موضوع',
      align: 'center rounded-r-lg line-v',
      class: 'rounded-r-lg',
      sortable: false,
      value: 'title'
    },
    { text: 'شماره پیگیری', align: 'center', value: 'code' },
    { text: 'سوال', align: 'center', value: 'question' },
    { text: 'تاریخ', align: 'center', value: 'createdAt' },
    { text: 'وضعیت', align: 'center', value: 'status' },
    {
      text: '',
      align: 'center rounded-l-lg',
      value: 'ops',
      class: 'rounded-l-lg'
    }
  ]
}
</script>

<style lang="scss">

</style>
