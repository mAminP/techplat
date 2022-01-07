<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" disable-route-watcher temporary app right>
      <v-list>
        <v-list-item v-for="(route,index) in routes" :key="index" :to="route.to" exact>
          <v-list-item-title v-text="route.name" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <SiteHeader v-model="drawer" :routes="routes" />
    <v-main>
      <Nuxt />
    </v-main>
    <MainFooter />
    <!-- <BottomSheet v-model="bottomSheet" /> -->
  </v-app>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import PureMixin from '~/mixins/PureMixin'
@Component({})
export default class Default extends PureMixin {
  head () {
    return {
      htmlAttrs: {
        class: 'overflow-hidden'
      }
    }
  }

  drawer = false
  splash = true
  bottomSheet = false
  public get routes (): { name: string; to: { name: string } }[] {
    return [
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
    ]
  }

  mounted () {
    this.splash = false
  }
}
</script>
<style scoped>
</style>
