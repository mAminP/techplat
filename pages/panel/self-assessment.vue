<template>
  <v-row>
    <v-col cols="12">
      <h1 class="text-h6 text-md-h5">
        <span class="ff-kalameh-bold"> خودارزیابی‌های شما </span>
      </h1>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="8">
      <v-row>
        <v-col
          v-for="(item, index) in results.items"
          :key="index"
          cols="12"
          sm="6"
          md="6"
          lg="4"
          xl="3"
        >
          <SelfAssessmentCard :item="item" />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4">
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
              <v-subheader class="body-2 text-md-body-1">
                <span class="ff-kalameh-bold"> آخرین اخبار </span>
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
            <v-subheader class="body-2 text-md-body-1">
              <span class="ff-kalameh-bold"> آخرین مطالب وبلاگ </span>
            </v-subheader>

            <v-card-text>
              <v-list three-line :dense="$vuetify.breakpoint.mdAndDown">
                <v-list-item
                  v-for="(item, index2) in results.news"
                  :key="index2"
                >
                  <v-list-item-avatar
                    rounded="lg"
                    :size="$vuetify.breakpoint.mdAndDown ? 80 : 100"
                  >
                    <v-avatar
                      :size="$vuetify.breakpoint.mdAndDown ? 80 : 100"
                      rounded="lg"
                    >
                      <v-img aspect-ratio="1" :src="item.image">
                        <template #placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <v-skeleton-loader
                              type="image"
                              class="rounded-xl"
                              width="100%"
                              height="100%"
                            />
                          </v-row>
                        </template>
                      </v-img>
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      <v-icon color="grey lighten-1" size="15">
                        mdi-clock-time-eight-outline
                      </v-icon>
                      <span class="caption">{{
                        $moment(item.createdAt).from()
                      }}</span>
                    </v-list-item-subtitle>
                    <v-list-item-title>
                      <span class="ff-kalameh-bold">{{ item.title }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle class="grey--text">
                      <span>{{ item.subtitle }}</span>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="mt-2">
                      <v-btn small plain>
                        ادامه مطلب
                      </v-btn>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-subheader class="body-2 text-md-body-1">
            <span class="ff-kalameh-bold">
              ویدیو آموزشی استفاده از خود ارزیابی
            </span>
          </v-subheader>
          <v-card rounded="lg" flat class="overflow-hidden">
            <v-img src="/images/vid.png">
              <v-row
                no-gutters
                class="
                  pb-3
                  ps-5
                  white--text
                  fill-height
                  d-flex
                  flex-row
                  align-end
                  justify-start
                "
              >
                <v-col cols="12">
                  <h2>آموزش استفاده از خودارزیابی</h2>
                  <p class="subtitle-2">
                    موشن‌گرافی یا ویدئو اسکرین رکورد از فرایند خودارزیابی
                  </p>
                </v-col>
              </v-row>
            </v-img>
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
  results: any
}
</script>

<style lang="scss">
</style>
