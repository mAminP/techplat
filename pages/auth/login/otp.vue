<template>
  <v-card :disabled="loading" flat>
    <v-card-title
      class="font-size-1-3rem ff-kalameh-bold grey--text text--darken-2 mb-3 text-truncate"
    >
      <v-tooltip v-if="$route.query.callback" top>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            icon
            class="ml-3"
            :to="{ path: $route.query.callback }"
            v-on="on"
          >
            <v-icon> mdi-arrow-right </v-icon>
          </v-btn>
        </template>
        <span>بازگشت</span>
      </v-tooltip>

      <span> ورود با رمز یک بار مصرف </span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      تا الان عضو خانواده تک‌پلت نشده‌اید؟
      <nuxt-link :to="{ name: 'auth-register' }">
        ثبت نام کنید!
      </nuxt-link>
    </v-card-subtitle>
    <v-window v-model="step" touchless>
      <!-- STEP 1 -->
      <v-window-item :value="1">
        <ValidationObserver
          ref="form1"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="onSubmit"
        >
          <v-card-text>
            <v-row dense>
              <v-col>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="شماره موبایل"
                  rules="required|phoneNumber"
                >
                  <v-text-field
                    v-model.lazy="loginInfo.phone_number"
                    :error-messages="errors"
                    label="شماره موبایل"
                    type="number"
                    name="phoneNumber"
                    autofocus
                    placeholder="__ ___ __ __9"
                    outlined
                    dense
                    hint="لطفا شماره موبایل خود را بدون 0 وارد کنید"
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
              <v-col cols="4" xl="3" lg="4" md="4" sm="3">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="کد کشور"
                  rules="required"
                >
                  <v-select
                    v-model="loginInfo.prefix_id"
                    :items="prefixs"
                    :error-messages="errors"
                    item-text="phone_prefix"
                    name="phone_prefix"
                    item-value="id"
                    placeholder="98+"
                    outlined
                    dense
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="invalid"
              :loading="loading"
              large
              block
              color="primary"
              type="submit"
            >
              ارسال کد فعال سازی
            </v-btn>
          </v-card-actions>
        </ValidationObserver>
      </v-window-item>
      <!--END STEP 1 -->
      <!-- STEP 2 -->
      <v-window-item :value="2">
        <ValidationObserver
          ref="form2"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="onSubmit"
        >
          <v-card-text>
            <v-row class="d-flex flex-row justify-center">
              <v-col cols="8" sm="10" dir="ltr">
                <div class="text-right grey--text">
                  کد تایید را وارد کنید
                </div>
                <!-- v-slot="{ errors }" -->
                <ValidationProvider name="کد تایید" rules="required|length:5">
                  <v-otp-input
                    v-model="verifyInfo.code"
                    length="5"
                    color="grey"
                    type="number"
                    @finish="onSubmit"
                  />
                  <!-- <span>{{ errors }}</span> -->
                </ValidationProvider>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :disabled="invalid"
              :loading="loading"
              large
              block
              color="primary"
              type="submit"
            >
              تایید کد فعال سازی
            </v-btn>
          </v-card-actions>
        </ValidationObserver>
      </v-window-item>
      <!--END STEP 2 -->
    </v-window>
    <v-card-text class="d-flex flex-row align-center ">
      <v-divider />
      <span class="mx-3 grey--text"> یا </span>
      <v-divider />
    </v-card-text>
    <v-card-actions>
      <v-btn
        :to="{name:'auth-login'}"
        small
        exact
        text
        outlined
        block
        rounded
      >
        ورود با رمز عبور
        <!-- <v-icon right color="primary">
          mdi-key-outline
        </v-icon> -->
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, getModule, Ref } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import { Context } from '@nuxt/types'
import AuthMixin from '@/mixins/AuthMixin'
import { container, lazyInject } from '~/services/Ioc/inversify.config'
import { IUtilsService } from '~/services/IUtilsService'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IAuthService } from '~/services/IAuthService'
import { LoginStep1 } from '~/models/LoginStep1'
import { VerifyCode } from '~/models/VerifyCode'
import { Prefix } from '~/models/Prefix'
import BasketModule from '~/store/BasketModule'
@Component({
  head: {
    title: 'ورود با رمز یک بار مصرف'
  },
  async asyncData (ctx: Context) {
    try {
      const _utilsService = container.get<IUtilsService>(SYMBOLS.IUtilsService)
      const prefixs = await _utilsService.getPrefixsAsync()
      return {
        prefixs
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class LoginOtp extends AuthMixin {
  public prefixs: Prefix[] = []

  step: 1 | 2 = 1
  loading = false
  @lazyInject(SYMBOLS.IAuthService)
  private _authSerive!: IAuthService

  @Ref('form1') form1!: InstanceType<typeof ValidationObserver>
  @Ref('form2') form2!: InstanceType<typeof ValidationObserver>

  public loginInfo: LoginStep1 = {
    prefix_id: 1,
    phone_number: '',
    status: 'exist'
  }

  public verifyInfo: VerifyCode = {
    prefix_id: 1,
    phone_number: '',
    code: ''
  }

  async onSubmit () {
    if (this.step === 1) {
      if (await this.form1.validate()) {
        this.sendstep1()
      }
    } else if (this.step === 2) {
      if (await this.form2.validate()) {
        this.sendstep2()
      }
    }
  }

  async sendstep1 () {
    this.loading = true
    try {
      const res = await this._authSerive.SendSmsAsync(this.loginInfo)
      this.$toast.success(res.message)
      this.verifyInfo = { ...this.loginInfo, code: '' }
      this.step = 2
    } catch (error) {
      // @ts-ignore
      this.$notify.error(error)
    } finally {
      this.loading = false
    }
  }

  async sendstep2 () {
    this.loading = true
    try {
      const res = await this._authSerive.OtpLoginAsync(this.verifyInfo)
      this.$auth.setUserToken(res.access)
      await this.$auth.fetchUser()
      const basketModule = getModule(BasketModule, this.$store)
      await basketModule.getBasketAsync()

      if (this.$route.query.callback) {
        this.$router.push({ path: this.$route.query.callback as string })
        return
      }
      this.$router.push({ name: 'index' })
    } catch (error) {
      // @ts-ignore
      this.$notify.error(error)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
