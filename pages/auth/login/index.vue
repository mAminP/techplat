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

      <span> ورود به حساب کاربری </span>
    </v-card-title>
    <v-card-subtitle class="grey--text">
      تا الان عضو خانواده تک‌پلت نشده‌اید؟
      <nuxt-link :to="{ name: 'auth-register' }">
        ثبت نام کنید!
      </nuxt-link>
    </v-card-subtitle>
    <ValidationObserver
      ref="form"
      v-slot="{ invalid }"
      tag="form"
      @submit.prevent="onSubmit"
    >
      <v-card-text>
        <ValidationProvider v-slot="{ errors }" name="کد ملی" rules="required">
          <v-text-field
            v-model.lazy="loginInfo.username"
            :error-messages="errors"
            label="کد ملی"
            type="number"
            name="username"
            autofocus
            outlined
            dense
            color="grey"
          />
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="رمز عبور"
          rules="required"
        >
          <v-text-field
            v-model="loginInfo.password"
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
          ورود
        </v-btn>
      </v-card-actions>
    </ValidationObserver>
    <v-card-text class="d-flex flex-row align-center ">
      <v-divider />
      <span class="mx-3 grey--text"> یا </span>
      <v-divider />
    </v-card-text>
    <v-card-actions>
      <v-btn
        rounded
        :to="{name:'auth-login-otp'}"
        small
        outlined
        text
        block
      >
        ورود از طریق رمز یک‌بار مصرف
        <v-icon right color="primary">
          $message
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, getModule, Ref } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
import AuthMixin from '@/mixins/AuthMixin'
// import { lazyInject } from '~/services/Ioc/inversify.config'
// import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
// import { IAuthService } from '~/services/IAuthService'
import { Login } from '~/models/Login'
import BasketModule from '~/store/BasketModule'
@Component({
  head: {
    title: 'ورود به حساب کاربری'
  }
})
export default class LoginUser extends AuthMixin {
  // @lazyInject(SYMBOLS.IAuthService)
  // private _authSerive!: IAuthService;

  @Ref('form') formLogin!: InstanceType<typeof ValidationObserver>

  public loginInfo: Login = new Login()

  public loading: boolean = false
  public showPassword: boolean = false

  async onSubmit () {
    try {
      this.loading = false
      const isValid = await this.formLogin.validate()
      if (!isValid) {
        return
      }
      await this.$auth.loginWith('local', {
        data: this.loginInfo
      })
      this.$toast.success('با موفقیت وارد حساب کاربری خود شدید.')

      const basketModule = getModule(BasketModule, this.$store)
      await basketModule.getBasketAsync()

      if (this.$route.query.callback) {
        this.$router.push({ path: this.$route.query.callback as string })
        return
      }
      this.$router.push({ name: 'index' })
    } catch (error) {
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
