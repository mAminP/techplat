<template>
  <v-card :disabled="loading" flat>
    <v-card-title
      class="font-size-1-3rem ff-kalameh-bold grey--text text--darken-2 mb-3"
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

      <span> ثبت نام حقیقی </span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      از اعضای خانواده‌ی تک‌پلت هستید؟
      <nuxt-link :to="{ name: 'auth-login' }">
        وارد شوید!
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
      <!-- STEP 3 -->
      <v-window-item :value="3">
        <ValidationObserver
          ref="form3"
          v-slot="{ invalid }"
          tag="form"
          @submit.prevent="onSubmit"
        >
          <v-card-text>
            <ValidationProvider v-slot="{ errors }" name="نام" rules="required">
              <v-text-field
                v-model.lazy="rgisterInfo.first_name"
                label="نام"
                :error-messages="errors"
                name="firstName"
                outlined
                dense
                color="grey"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="نام خانوادگی"
              rules="required"
            >
              <v-text-field
                v-model.lazy="rgisterInfo.last_name"
                label="نام خانوادگی"
                :error-messages="errors"
                name="lastName"
                outlined
                dense
                color="grey"
              />
            </ValidationProvider>

            <v-row dense>
              <v-col>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="شماره موبایل"
                  rules="required|phoneNumber"
                >
                  <v-text-field
                    v-model="rgisterInfo.phone_details.phone_number"
                    disabled
                    label="شماره موبایل"
                    :error-messages="errors"
                    name="phoneNumber"
                    outlined
                    dense
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
              <v-col cols="auto" xl="3" lg="4" md="4" sm="3">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="کد کشور"
                  rules="required"
                >
                  <v-select
                    v-model="rgisterInfo.phone_details.prefix_id"
                    :items="prefixs"
                    :error-messages="errors"
                    item-text="phone_prefix"
                    name="phone_prefix"
                    item-value="id"
                    disabled
                    placeholder="98+"
                    outlined
                    dense
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>

            <v-row dense>
              <v-col>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="کد ملی"
                  rules="required"
                >
                  <v-text-field
                    v-model="rgisterInfo.username"
                    :error-messages="errors"
                    label="کد ملی"
                    name="username"
                    outlined
                    dense
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
              <v-col cols="auto" xl="3" lg="4" md="4" sm="3">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="کشور"
                  rules="required"
                >
                  <v-select
                    v-model="rgisterInfo.country_id"
                    :items="prefixs"
                    :error-messages="errors"
                    item-text="country_name"
                    name="countryName"
                    item-value="id"
                    placeholder="IR"
                    outlined
                    dense
                    color="grey"
                  />
                </ValidationProvider>
              </v-col>
            </v-row>
            <ValidationProvider
              v-slot="{ errors }"
              name="رمز عبور"
              rules="required|passwordConfirm:@confirm"
            >
              <v-text-field
                v-model="rgisterInfo.password"
                :error-messages="errors"
                outlined
                color="grey"
                name="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                dense
                :type="showPassword ? 'text' : 'password'"
                label="رمز عبور"
                @click:append="showPassword = !showPassword"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="تکرار رمز عبور"
              rules="required"
              vid="confirm"
            >
              <v-text-field
                v-model="passwordConfirm"
                outlined
                color="grey"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :error-messages="errors"
                dense
                label="تکرار رمز عبور"
                @click:append="showPassword = !showPassword"
              />
            </ValidationProvider>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :loading="loading"
              :disabled="invalid"
              large
              block
              color="primary"
              type="submit"
            >
              ثبت نام
            </v-btn>
          </v-card-actions>
        </ValidationObserver>
      </v-window-item>
      <!--END STEP 3 -->
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { Component, Ref } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { ValidationObserver } from 'vee-validate'
import AuthMixin from '@/mixins/AuthMixin'
import { SYMBOLS } from '@/services/Ioc/SYMBOLS'
import { container, lazyInject } from '@/services/Ioc/inversify.config'
import type { IAuthService } from '@/services/IAuthService'
import { Prefix } from '~/models/Prefix'
import { LoginStep1 } from '~/models/LoginStep1'
import type { IUtilsService } from '~/services/IUtilsService'
import { VerifyCode } from '~/models/VerifyCode'
import { RegisterReal } from '~/models/RegisterReal'

@Component({
  head: {
    title: 'ثبت نام'
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
export default class RegisterLegal extends AuthMixin {
  @lazyInject(SYMBOLS.IAuthService)
  private _authSerive!: IAuthService

  @Ref('form1') form1!: InstanceType<typeof ValidationObserver>
  @Ref('form2') form2!: InstanceType<typeof ValidationObserver>
  @Ref('form3') form3!: InstanceType<typeof ValidationObserver>

  passwordConfirm: string = ''
  showPassword = false
  public loginInfo: LoginStep1 = {
    prefix_id: 1,
    phone_number: '',
    status: 'new'
  }

  public verifyInfo: VerifyCode = {
    prefix_id: 1,
    phone_number: '',
    code: ''
  }

  public rgisterInfo: RegisterReal = new RegisterReal()

  public prefixs: Prefix[] = []
  public loading: boolean = false
  public step: 1 | 2 | 3 = 1

  async onSubmit () {
    if (this.step === 1) {
      if (await this.form1.validate()) {
        this.sendstep1()
      }
    } else if (this.step === 2) {
      if (await this.form2.validate()) {
        this.sendstep2()
      }
    } else if (this.step === 3) {
      if (await this.form3.validate()) {
        this.sendstep3()
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
      const res = await this._authSerive.VerifySmsAsync(this.verifyInfo)
      this.$toast.success(res.message)
      this.rgisterInfo.phone_details = this.verifyInfo
      this.step = 3
    } catch (error) {
      // @ts-ignore
      this.$notify.error(error)
    } finally {
      this.loading = false
    }
  }

  async sendstep3 () {
    this.loading = true
    try {
      await this._authSerive.RegisterRealAsync(this.rgisterInfo)
      this.$router.push({ name: 'auth-login' })
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
