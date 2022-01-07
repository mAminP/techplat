<template>
  <v-app-bar
    app
    flat
    color="white"
    elevate-on-scroll
    elevation="12"
    class=""
  >
    <v-container>
      <v-row align="center" no-gutters class="d-flex flex-row flex-nowrap">
        <v-app-bar-nav-icon class="d-md-none" @click="drawer= !drawer" />
        <v-spacer class="d-md-none" />

        <Logo />
        <v-spacer
          class="d-none d-md-flex"
        />

        <v-btn
          v-for="(item, index) in routes"
          :key="index"
          exact
          :to="item.to"
          text
          active-class="no-active"
          class="d-none d-md-flex"
        >
          <div class="d-flex flex-column align-center justify-center">
            <span> {{ item.name }}</span>
            <v-fade-transition>
              <div
                v-show="$route.name === item.to.name"

                v-anime="{
                  width: 0,
                  height: 0,
                  easing: 'easeOutElastic(1, .8)',
                  keyframes: [
                    {
                      width: 0,
                      height: 5,
                      translateY: 15,
                      scale: 1,
                      opacity: 0,
                    },
                    {
                      width: 25 ,
                      height: 2,
                      translateY: 20,
                      scale: 1.6,
                      opacity: 1,
                    },
                    {
                      width:5 ,
                      height: 5,
                      translateY: 25,
                      scale: 1,
                    },
                  ],
                }"
                class="dot"
              />
            </v-fade-transition>
          </div>
        </v-btn>

        <v-spacer />
        <HeaderUserBasket v-if="$auth.loggedIn" />

        <v-menu v-if="!$auth.loggedIn" :close-on-content-click="false" offset-y transition="slide-y-transition">
          <template #activator="{ on, attrs }">
            <v-btn
              id="accountBtn"
              :class="{'no-btn-padding':!$vuetify.breakpoint.mdAndUp }"
              color="primary"
              v-bind="attrs"
              depressed
              v-on="on"
            >
              <span class="d-none d-md-block">
                ورود/عضویت</span>
              <v-icon class="d-md-none">
                mdi-account-outline
              </v-icon>
            </v-btn>
          </template>
          <v-card outlined class="border-primary mt-1">
            <v-list dense>
              <v-list-item
                :to="{
                  name: 'auth-register',
                  query: { callback: $route.fullPath },
                }"
                color=""
              >
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-account-plus-outline
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  ثبت نام
                </v-list-item-content>
              </v-list-item>
              <v-divider inset />
              <v-list-item
                color=""
                :to="{
                  name: 'auth-login',
                  query: { callback: $route.fullPath },
                }"
              >
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-login-variant
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  ورود به حساب کاربری
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu v-else :close-on-content-click="false" offset-y transition="slide-y-transition">
          <template #activator="{ on, attrs }">
            <v-btn :class="{'no-btn-padding':!$vuetify.breakpoint.mdAndUp }" color="primary" v-bind="attrs" depressed v-on="on">
              <span class="d-none d-md-block">
                حساب کاربری</span>
              <v-icon class="d-md-none">
                mdi-account-outline
              </v-icon>
            </v-btn>
          </template>
          <v-card outlined class="border-primary mt-1">
            <v-list dense>
              <v-list-item :to="{name: 'panel'}" color="">
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-view-dashboard-outline
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    پنل کاربری
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider class="my-1" />
            <v-list dense nav>
              <v-list-item @click.stop="logout">
                <v-list-item-icon>
                  <v-icon color="primary">
                    mdi-logout-variant
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  خروج
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel, getModule } from 'nuxt-property-decorator'
import BasketModule from '~/store/BasketModule'

@Component({})
export default class SiteHeader extends Vue {
 @Prop({ type: Array, required: true }) routes!:Array<Object>
 @VModel({ type: Boolean, required: true }) drawer!:any

 async logout () {
   await this.$auth.logout('local')
   const basketModule = getModule(BasketModule, this.$store)
   basketModule.CLEAR()
 }
}
</script>

 <style scoped>
.border-primary {
  border: 1px solid var(--v-primary-base) !important;
}
.dot {
  position: absolute;
  background: var(--v-primary-base);
  border-radius: 50px;
}
</style>
