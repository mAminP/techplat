<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img contain src="/images/vid-lines.svg">
          <v-row no-gutters class="fill-height d-flex flex-row align-center justify-center">
            <v-col cols="12" sm="10" md="9" lg="8" xl="7">
              <v-img src="/images/vid.png">
                <v-row no-gutters class="pb-10 ps-11 white--text fill-height d-flex flex-row align-end justify-start">
                  <v-col cols="12">
                    <h1>مشتریان</h1>
                    <p class="subtitle-2">
                      میتوانید در این ویدئو بیان مختصری از تاثیرات آزمون شما بر سازمان‌ها باشد
                    </p>
                  </v-col>
                </v-row>
              </v-img>
            </v-col>
          </v-row>
        </v-img>
        <v-row no-gutters class=" d-flex flex-row align-center justify-center">
          <v-col cols="12" sm="10" md="9" lg="8" xl="7">
            <p class="grey--text subtitle-2 text-md-body-2 text-lg-body-1 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="my-10">
        <HeadTitle>آخرین شرکت‌هایی که از تک‌پلت استفاده کرده‌اند</HeadTitle>
      </v-col>
      <v-col cols="12">
        <v-slide-group show-arrows>
          <v-slide-item v-for="(customer, index) in customers" :key="index+ '4194861479865'">
            <v-card width="200" tile flat color="transparent">
              <v-card-text>
                <CustomerShowCard slider-item :customer="customer" />
              </v-card-text>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
      <v-col cols="12" class="my-10">
        <HeadTitle>چه کسانی از تک‌پلت استفاده کرده‌اند؟</HeadTitle>
      </v-col>
      <v-col cols="12">
        <v-tabs
          v-model="activeCat"
          mandatory
          show-arrows
          active-class="primary--text"
        >
          <v-tab
            v-for="(tag,index) in customersCategories"
            :key="tag.id"
            color="white"
            class="transition-ease-in-out"
            :class="`body-2 ${activeCat !== index? 'rounded-lg': 'rounded-t-lg'}  overflow-hidden`"
            large
          >
            {{ tag.title }}
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col
        v-for="(customer, index) in customersList"
        :key="index"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        xl="2"
      >
        <CustomerShowCard :customer="customer" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component } from 'vue-property-decorator'
import SiteMixin from '~/mixins/SiteMixin'

@Component({
  head: {
    title: 'مشتریان'
  },
  async asyncData (ctx: Context) {
    try {
      const customersCategories = await ctx
        .$content('customercategories')
        .fetch()
      const customers = await ctx.$content('customers').fetch()
      customersCategories.unshift({ id: 0, title: 'همه' })
      return {
        customers,
        customersCategories
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class CustomersPage extends SiteMixin {
  customersCategories = []
  customers = []
  activeCat = 0
  model = null
  public get customersList (): any[] {
    if (this.activeCat) {
    // @ts-ignore
      return this.customers.filter(a => a.category_id === this.activeCat)
    }
    return this.customers
  }
}
</script>

<style lang="scss">
</style>
