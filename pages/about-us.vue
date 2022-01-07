<template>
  <section>
    <v-container>
      <v-row class="mt-4">
        <v-col cols="12">
          <InfoCard
            :right="true"
            large-image
            align-v
            :item="{
              image: '/images/about-us/a-1.svg',
              title: 'ما از کجا آمدیم؟',
              text: 'تِکچی یک شرکت دانش بنیان ارائه دهنده خدمات ارزیابی و رتبه‌بندی است که بر اساس شاخص‌ها و استانداردهای بومی و بین‌المللی توانمندی‌های سازمانی، رتبه اعتباری، توانمندی مالی و ارزش دارایی‌های نامشهود شرکت‌ها و سازمان‌ها را ارزیابی می‌کند',
            }"
          />
        </v-col>
        <v-col cols="12">
          <InfoCard
            :right="false"
            large-image
            align-v
            :item="{
              image: '/images/about-us/a-2.svg',
              title: 'تک‌پلت چه کار می‌کند؟',
              text: `تِکچی با ترکیبی از مدیران و کارشناسان مجرب باسابقه طولانی در حوزه تأسیس و مدیریت سازمان‌های فناور، حقوقدانان باسابقه و محققین و مهندسین حوزه‌های مختلف فنی از دانشگاه‌های معتبر هستند که پس از کسب گواهینامه‌های لازم و کسب تجربه در حداقل ۱۰۰ پروژه ارزیابی سازمانی به عضویت در تیم ارزیابان تکچی انتخاب شده‌اند.

            این شرکت جهت سهولت انجام ارزیابی‌ها و جلوگیری از بروز خطاهای انسانی و عملیاتی کلیه فرآیند ارزیابی را به‌صورت کاملاً مکانیزه و تحت‌وب انجام می‌دهد و نتایج به‌صورت مکرر مورد بازبینی و تجدیدنظر قرار می‌گیرند. کلیه چک‌لیست‌های ارزیابی، بانک اطلاعاتی، نرم‌افزارهای محاسباتی و واسط‌های گرافیکی با امنیت لازم بصورت تحت‌وب در اختیار مشتریان و ارزیابان شرکت قرار می‌گیرد.`,
            }"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <HeadTitle both-side>
          تیم تک‌پلت
        </HeadTitle>
        <p class="grey--text subtitle-2">
          کسانی که با رویاهای بزرگ، در کنار یکدیگر تک‌پلت را ساختند
        </p>
      </v-col>
      <v-col cols="12">
        <v-img eager src="/images/about-us/a-3.jpg">
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-skeleton-loader
                width="100%"
                height="100%"
                class="mx-auto"
                type="image"
              />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <v-container>
      <v-row dense>
        <v-col cols="12" class="my-3">
          <InfoCard
            :right="true"
            align-v
            width="280"
            :item="{
              image: '/images/about-us/a-4.jpg',
              title: 'چرا تک پلت؟',
              text: 'توجه به اقتصاد دانش بنیان و نیاز روز افزون شرکت‌های ایرانی به توسعه ابزارهای مدیریتی مدرن، گروهی از فارغ‌التحصیلان دانشگاه صنعتی شریف، دانشگاه تهران و مدیران باتجربه وحقوقدانان مجرب را گرد هم آورد تا با توسعه فناوری های نوین مدیریتی و تولید ابزارهای مدرن تصمیم سازی مدیران، یاری‌رسان حضور قدرتمند آنان در عرصه جهانی شوند.' }"
          >
            <template #footer>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>
                    $quote-left
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    جواد حسینی
                  </v-list-item-title>
                  <v-list-item-subtitle class="subtitle-2">
                    مدیرعامل تکچی
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </InfoCard>
        </v-col>
        <v-col
          v-for="(item,index) in about.items"
          :key="index"
          cols="6"
          sm="4"
          md="3"
          lg="3"
          xl="2"
          class="d-flex flex-row align-center justify-center"
        >
          <v-card flat>
            <v-card-text class="text-center">
              <v-img :width="130" aspect-ratio="1" class="rounded-lg overflow-hidden" :src="item.image">
                <template #placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-skeleton-loader
                      width="100%"
                      height="100%"
                      class="mx-auto"
                      type="image"
                    />
                  </v-row>
                </template>
              </v-img>
              <v-card-subtitle class="text-truncate">
                {{ item.name }}
              </v-card-subtitle>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex flex-column align-center justify-center">
          <HeadTitle both-side>
            مدل ما
          </HeadTitle>
        </v-col>
        <v-col cols="12">
          <v-img contain src="/images/vid-lines.svg">
            <v-row no-gutters class="fill-height d-flex flex-row align-center justify-center">
              <v-col cols="12" sm="10" md="9" lg="8" xl="7">
                <v-img src="/images/vid.png">
                  <v-row no-gutters class="pb-10 ps-11 white--text fill-height d-flex flex-row align-end justify-start">
                    <v-col cols="12">
                      <h1>مدل ما</h1>
                      <p class="subtitle-2">
                        توضیحات مختصری درمورد محصول مورد بررسی
                      </p>
                    </v-col>
                  </v-row>
                </v-img>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
        <v-col cols="12">
          <InfoCard
            :right="false"
            large-image
            align-v
            :item="{
              image: '/images/about-us/a-8.svg',
              title: 'مدل ما',
              text:`
شرکت ها برای حرکت صحیح در مسیر رشد نیاز مند نقشه ای دقیق و قابل سنجش برای حرکت هستند که در طول مسیر حرکت با مراجعه به آن موقعیت خود را تشخیص داده و مسیر بعدی خود را مشخص کنند. در ادبیات مدیریت به این نقشه ها مدل های تعالی سازمانی گفته می شود. شاید نام مدل های تعالی مانند  ،TEM ، EFQMمالکوم بادریج یا مدل دمینگ را شنیده باشید، این مدل ها همگی نقشه هایی هستند که مسیر رشد را به سازمانها نشان می دهند.

مهمترین تفاوت این مدل ها با هم محیطی است که سازمان در آن قرار دارد. هر کدام از این مدل ها برای یک محیط خاص طراحی شده اند مثلا مدل  EFQMبرای شرکت هایی مناسب است که در محیطی شبیه به کشور های اروپایی قراردارند و مدل مالکوم بادریج برای شرکت هایی که در محیط شبیه امریکا هستند و مدل دمینگ هم برای شررکتهایی بامحیط مشابه ژاپن مناسب است. مدل  TEMکه در نمایشگاه  INOTEX98رونمایی شد، برای رشد شرکت ها در محیط هایی شبیه ایران طراحی شده است و مناسب ترین مدل برای شرکت های ایرانی بشمار می رود. تکپلت در طراحی کلیه محصولات ارزیابی خود از مدل  TEMنسخه شرکت های کوچک استفاده می نماید.

بر اساس مدل  TEMشرکت ها در حرکت به سمت تعالی از سه مرحله اصلی باید عبور کنند مرحله اول تشکیل یک سازمان حد اقلی و کوچک برای توزیع مناسب کارها بین بخش های مختلف شرکت است. در این مرحله میزان توانمندی فرایند های ضروری در یک سازمان کوچک در  10بعد شامل حدود  100فرایند مورد ارزیابی قرار گرفته و شکاف موجود با وضعیت مطلوب و همچنین مقایسه با میانگین دیگر شرکت های مشابه صورت می گیرد. در مرحله دوم نتایج خروجی شرکت شامل نتایج کارکنان، نتایج مالی، نتایج مشتریان، نتایج بهره وری مورد ارزیابی قرارمی گیرد و نقاط قوت و ضعف شرکت در این حوزه ها تعیین می شود.
در مرحله نهایی پس از استحکام سازمان و اخذ نتایج مناسب از شرکت، تاب اوری شرکت در برابر شوک های معمول در محیط ایران شامل شوک های اقتصادی، تکنولوژیک، اجتماعی و انسانی اندازه گیری و توانمندی مکانیزم های تاب آوری شرکت مشخص می شود

              `
            }"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'درباره ما'
  },
  async asyncData (ctx: Context) {
    try {
      const about = await ctx.$content('about-us').fetch()
      return {
        about
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class AboutUsPage extends Vue {
  about:any = {}
}
</script>

<style lang="scss">
</style>
