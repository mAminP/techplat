<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> خودارزیابی‌های شما </span>
      </h1>
    </v-col>
    <v-col cols="12" sm="12" md="8">
      <v-row>
        <v-col
          v-for="(item,index) in results.items"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
        >
          <SelfAssessmentCard :item="item" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="4">
      <v-row>
        <v-col cols="12">
          <v-card flat rounded="lg">
            <v-badge
              :value="true"
              dot
              overlap
              left
              color="error"
              bordered
            >
              <v-subheader class="body-2 text-md-body-1 ">
                <span class="ff-kalameh-bold">
                  آخرین اخبار
                </span>
              </v-subheader>
            </v-badge>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    جهت استفاده از خودارزیابی پروفایل خود را آپدیت کنید.
                  </v-list-item-title>
                  <v-list-item-subtitle class="grey--text">
                    امروز
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card flat rounded="lg">
            <v-subheader class="body-2 text-md-body-1 ">
              <span class="ff-kalameh-bold">
                آخرین مطالب وبلاگ
              </span>
            </v-subheader>

            <v-card-text>
              <v-row dense>
                <v-col v-for="(item,index2) in results.news" :key="index2" cols="12">
                  <BlogCard :item="item" color="white" dense />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
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
    title: 'خودارزیابی'
  },
  async asyncData (ctx: Context) {
    try {
      const results = await ctx.$content('panel-self-assessment').fetch()
      return {
        results
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class SelfAssessment extends Vue {
  results:any
}
</script>

<style lang="scss">

</style>
