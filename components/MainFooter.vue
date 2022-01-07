<template>
  <v-footer padless color="transparent" class="mt-2 mt-lg-7">
    <v-container class="footer-content">
      <v-row no-gutters class="mb-md-5">
        <v-col cols="12" class="my-4 my-sm-6 my-md-8">
          <FooterCard anime="ring" icon="mdi-phone" color="primary" />
        </v-col>
        <v-col cols="12" class="my-4 my-sm-6 my-md-8">
          <FooterCard anime="move" color="success" icon="mdi-video" />
        </v-col>
        <v-col cols="12" class="mt-10 mb-16 py-16">
          <HeadTitle class="my-3">
            سوالات متداول
          </HeadTitle>
          <v-expansion-panels flat inset>
            <v-row no-gutters>
              <kinesis-container
                v-for="(item, i) in items"
                :key="i"
                event="scroll"
                class="col-12"
              >
                <kinesis-element type="scale" :strength="-1.5">
                  <v-expansion-panel
                    class="grey lighten-5 my-2 rounded-lg py-2 py-xl-4 py-lg-3"
                  >
                    <v-expansion-panel-header class="body-1">
                      لورم ایپسوم
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </kinesis-element>
              </kinesis-container>
            </v-row>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" class="d-none d-md-block my-16 py-10">
          <v-spacer />
        </v-col>
        <v-col cols="12" md="6" class="mb-4 mb-md-0 px-4 px-sm-16 px-md-0">
          <v-row no-gutters>
            <v-col
              v-if="$vuetify.breakpoint.mdAndUp"
              cols="12"
              class="d-flex flex-row align-center justify-center"
            >
              <Logo class="pl-xl-16 ml-xl-16 pl-lg-10 ml-lg-10" width="350" />
            </v-col>
            <v-col cols="6" sm="6" md="6" class=" text-md-right">
              <v-subheader class="white--text text-h6  text-md-h5">
                صفحات مرتبط
              </v-subheader>
              <v-list flat color="transparent" dense nav>
                <v-list-item
                  v-for="(item, index) in relativePages"
                  :key="index"
                  exact
                  exact-active-class="white--text "
                  :to="item.to"
                >
                  <template #default="{active}">
                    <v-list-item-title class=" text-body-2 text-md-body-1 white--text " :class="{'font-weight-bold': active}" v-text="item.name" />
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="6" sm="6" md="6" class=" text-md-right">
              <v-subheader class="white--text text-h6  text-md-h5">
                امور مشتریان
              </v-subheader>
              <v-list flat color="transparent" dense nav>
                <v-list-item
                  v-for="(item, index) in relativePages"
                  :key="index+'5'"
                  exact
                  exact-active-class="ff-kalameh-bold white--text"
                  :to="item.to"
                >
                  <template #default="{active}">
                    <v-list-item-title class="text-body-2 text-md-body-1 white--text" :class="{'font-weight-bold': active}" v-text="item.name" />
                  </template>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="12">
              <v-card
                :color="$vuetify.breakpoint.md ? '':'transparent'"
                flat
                rounded="lg"
                class="text-center"
                :dark="$vuetify.breakpoint.smAndDown"
              >
                <v-card-text class="px-0 px-sm-3">
                  <p class="text-body-2 text-sm-body-1 text-no-wrap">
                    پاسخگوی شما هستیم : شنبه تا چهارشنبه
                    <span :class="$vuetify.breakpoint.smAndDown? 'white--text': 'primary--text'"> ۹-۱۷ </span>پنج شنبه
                    <span :class="$vuetify.breakpoint.smAndDown? 'white--text': 'primary--text'">  ۹-۱۴</span>
                  </p>
                  <v-row no-gutters class="">
                    <v-col>
                      <v-btn block text large href="tel:+982312457896">
                        <v-icon size="25" left :color="$vuetify.breakpoint.smAndDown? '': 'primary'">
                          mdi-phone
                        </v-icon>
                        <span dir="ltr" class="body-1">+982312457896</span>
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn block text large href="mailto:admin@info.com">
                        <v-icon size="25" left :color="$vuetify.breakpoint.smAndDown? '': 'primary'">
                          mdi-email
                        </v-icon>
                        <span dir="ltr" class="body-1 text-lowercase">admin@info.com</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-divider class="my-4 mx-10" />
                  <v-row no-gutters align="center" class="" justify="center">
                    <v-btn v-for="i in 6" :key="i" icon class="mx-3 mx-lg-4">
                      <v-icon small>
                        mdi-instagram
                      </v-icon>
                    </v-btn>
                  </v-row>
                  <v-row align="center" dense class="px-0 px-sm-10 px-md-6 px-lg-10 mt-5" justify="space-around">
                    <v-col v-for="i in 3" :key="i" align-self="stretch">
                      <v-card flat>
                        <v-img aspect-ratio="1" class="d-flex flex-row align-center justify-center">
                          <v-icon x-large>
                            mdi-image
                          </v-icon>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="waves">
      <v-img
        v-anime="{
          loop: true,
          rotate: {
            value: [10, 5, 0],
            duration: 10000,
            easing: 'easeInQuint',
          },
          translateY: {
            value: [10, -10, 5],
            duration: 9000,
            easing: 'easeInOutQuad',
          },
          scale: {
            value: $vuetify.breakpoint.smAndDown? [3.1, 3, 2.95, 3.1, 3] : [1.8, 1.75, 1.65, 1.75, 1.86],
            duration: 15000,
            easing: 'easeInQuint',
          },
          direction: 'alternate',
          easing: 'linear',
        }"
        eager
        src="/images/footer-path-1.svg"
      />
      <v-img
        v-anime="{
          loop: true,
          rotate: {
            value: [-10, 0, -15, -20, -30, 0, -5],
            duration: 10000,
          },
          scale: {
            value: $vuetify.breakpoint.smAndDown? [2.8,2.7, 2.8, 2.65]: [1.55, 1.5, 1.6, 1.45],
            duration: 15000,
          },
          direction: 'alternate',
          easing: 'linear',
        }"
        eager
        src="/images/footer-path-2.svg"
      />
    </div>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class MainFooter extends Vue {
  items = [
    { name: 'x' },
    { name: 'x' },
    { name: 'x' },
    { name: 'x' },
    { name: 'x' },
    { name: 'x' },
    { name: 'x' },
    { name: 'x' }
  ]

  relativePages = [
    {
      name: 'صفحه اصلی',
      to: { name: 'index' }
    },
    {
      name: 'محصولات ',
      to: { name: 'products' }
    },
    {
      name: 'مشتریان ',
      to: { name: 'customers' }
    },
    {
      name: 'بلاگ ',
      to: { name: 'blog' }
    },
    {
      name: 'درباره ما ',
      to: { name: 'about-us' }
    }
  ];
}
</script>

<style scoped>
.v-footer {
  position: relative;
  overflow: hidden;
  min-height: 600px;
}
.footer-content {
  z-index: 1;
}
.waves {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.waves div:first-child {
  position: absolute;
  right: -30px;
  bottom: -70px;
  transform: scale(1.8) rotate(-2deg);
}
.waves div {
  width: 48%;
  right: -40px;
  bottom: -40px;
  transform: scale(1.5);

  /* position: absolute; top: 0; */
}
</style>
