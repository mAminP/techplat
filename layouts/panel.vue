<template>
  <v-app>
    <v-app-bar
      app
      :class="$vuetify.breakpoint.mdAndDown? '': 'mr-6'"
      class="ma-3 rounded-lg"
      color="transparent"
      flat
      absolute
    >
      <v-avatar rounded="xl" color="grey lighten-4">
        <v-icon>mdi-account-outline</v-icon>
      </v-avatar>
      <v-subheader class="grey--text text--darken-3 text-truncate">
        {{ $auth.user.first_name }}   {{ $auth.user.last_name }}
      </v-subheader>
      <v-subheader class="grey--text text--lighten-1 text-truncate">
        {{ $auth.user.profile.type === 'LEGAL'? 'کاربر حقوقی':'کاربر حقیقی' }}
      </v-subheader>
      <v-badge
        bordered
        color="success"
        dot
        left
        overlap
      >
        <v-btn
          class="primary--text no-btn-padding"
          color="white"
          depressed
        >
          <v-icon>$bell</v-icon>
        </v-btn>
      </v-badge>
      <v-spacer />
      <nuxt-link :to="{name: 'index'}">
        <Logo :width="$vuetify.breakpoint.smAndDown? '120':$vuetify.breakpoint.mdAndDown?'130': '160'" />
      </nuxt-link>
    </v-app-bar>

    <v-navigation-drawer
      ref="drawer"
      v-model="drawer"
      :mini-variant="!$vuetify.breakpoint.mdAndDown"
      :expand-on-hover="!$vuetify.breakpoint.mdAndDown"
      color="primary"
      :height="!$vuetify.breakpoint.mdAndDown ? '96.5%': '100vh'"
      floating
      right
      dark
      app
      :class="$vuetify.breakpoint.mdAndDown? '': 'mt-3 mr-3  rounded-lg'"
    >
      <v-sheet color="transparent" dark class="fill-height d-flex flex-column justify-center">
        <v-list

          nav
        >
          <v-list-item
            v-for="(route,index) in routes"
            :key="index"
            v-anime="{
              height: isMiniVariant? '48px': '56px',
              margin: isMiniVariant? '12px 0': '4px 0px',

            }"
            exact
            exact-active-class="primary2--text  text--darken-4"
            dark
            :to="route.to"
            class="d-flex flex-row align-center align-content-center"
          >
            <v-list-item-icon class="grey--text text--lighten-2 my-auto">
              <v-icon>
                {{ route.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text body-1 my-auto">
              {{ route.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-sheet>
      <template v-if="!$vuetify.breakpoint.mdAndDown" #prepend>
        <v-list class="" color="">
          <v-list-item link @click="mini =!mini">
            <v-list-item-icon>
              <v-icon>
                mdi-menu
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              دسته بندی
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
      <template #append>
        <v-list class="py-0 rounded-t-lg overflow-hidden" color="primary2">
          <v-dialog v-model="exitDialog" max-width="300">
            <template #activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-icon>
                  <v-icon>
                    $exit
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                  خروج
                </v-list-item-title>
              </v-list-item>
            </template>

            <v-card>
              <v-card-title>خروج از حساب کاربری</v-card-title>
              <v-card-actions class="d-flex flex-row justify-end">
                <v-btn @click="exitDialog = false">
                  لغو
                </v-btn>
                <v-btn class="primary" @click.stop="logout">
                  خروج
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main class="">
      <v-toolbar
        :class="$vuetify.breakpoint.mdAndDown? 'rounded-0 my-3': 'ma-3 mr-6 rounded-lg'"
        class="overflow-hidden"
        color="white"
        flat
      >
        <v-row no-gutters class="d-flex flex-row flex-nowrap align-center justify-sm-space-between">
          <v-col v-if="$vuetify.breakpoint.mdAndDown" cols="auto">
            <v-app-bar-nav-icon @click="drawer =!drawer" />
          </v-col>

          <v-col cols="7" sm="6" md="4" class="d-flex flex-row align-center justify-lg-space-between">
            <span v-if="$vuetify.breakpoint.mdAndUp">جستجو</span>

            <v-text-field
              dense
              solo
              flat
              placeholder="نام خودارزیابی خود را جستجو کنید"
              hide-details

              class="mx-1 mx-md-2 text-subtitle-2 text-sm-subtitle-1 text-md-body-1"
            />
          </v-col>
          <v-divider vertical />

          <v-col cols="auto">
            <template
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <v-btn

                v-for="(item,index) in routes"
                :key="index"
                large
                :class="`${$route.name === item.to.name ? 'primary--text':'grey--text text--lighten-1'} mx-1 no-active`"
                plain
                :to="item.to"
              >
                <v-row class="d-flex flex-column align-center justify-center text-center">
                  <v-icon tag="div" size="16">
                    {{ item.icon }}
                  </v-icon>
                  </div>
                  <div class="mt-1 mb-n2">
                    {{ item.name }}
                  </div>
                </v-row>
              </v-btn>
            </template>
          </v-col>
          <v-divider v-if="$vuetify.breakpoint.mdAndUp" vertical />
          <v-col cols="" md="auto" class="text-center">
            <span class="grey--text text--lighten-2 mx-auto d-flex flex-row align-center justify-center text-truncate text-subtitle-2 text-sm-subtitle-1 text-md-body-1">
              <v-icon v-if="$vuetify.breakpoint.smAndUp" small class="me-2 grey--text text--lighten-2">$calendar</v-icon>
              <span v-if="$vuetify.breakpoint.smAndUp">
                امروز :

              </span>
              <span dir="ltr">{{ now }}</span>
            </span>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-container
        fluid
        :class="$vuetify.breakpoint.mdAndDown? '': 'pr-6'"
        class="mt-5"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, getModule, Vue } from 'nuxt-property-decorator'
import BasketModule from '~/store/BasketModule'
@Component({
  middleware: ['auth']
})
export default class Default extends Vue {
  exitDialog = false
  drawer = null
  mini = true
  routes = [
    {
      name: 'خانه',
      icon: '$home',
      to: { name: 'panel' }
    },
    {
      name: 'خود ارزیابی',
      icon: '$chart',
      to: { name: 'panel-self-assessment' }
    },
    {
      name: 'نتایج',
      icon: '$chartSquare',
      to: { name: 'panel-resluts' }
    },
    {
      name: 'سبد خرید',
      icon: '$bag',
      to: { name: 'panel-basket' }
    }
    // {
    //   name: 'تیکت',
    //   icon: '$lable',
    //   to: { name: 'index' }
    // },
    // {
    //   name: 'تنظیمات',
    //   icon: '$settings',
    //   to: { name: 'index' }
    // }
  ]

  drawerRef: any = null

  public get now (): string {
    return this.$moment(new Date()).format('jYYYY / jMM / jDD ')
  }

  mounted () {
    this.drawerRef = this.$refs.drawer
  }

  async logout () {
    await this.$auth.logout('local')
    const basketModule = getModule(BasketModule, this.$store)
    basketModule.CLEAR()
  }

  public get isMiniVariant (): boolean {
    return this.drawerRef?.isMiniVariant
  }
}
</script>
<style scoped>
main {
  background: #f5f6fb;
}
</style>
