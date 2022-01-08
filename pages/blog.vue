<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <HeadTitle>مقالات</HeadTitle>
      </v-col>
      <v-col cols="9">
        <v-row>
          <v-col v-for="(item,index) in blog.items" :key="index" cols="12">
            <BlogCard :item="item" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <v-sheet color="red" height="1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component } from 'nuxt-property-decorator'
import SiteMixin from '~/mixins/SiteMixin'

@Component({
  head: {
    title: 'بلاگ'

  },
  async asyncData (ctx: Context) {
    try {
      const blog = await ctx.$content('blog').fetch()
      return {
        blog
      }
    } catch (error) {
      ctx.error({ statusCode: 404 })
    }
  }
})
export default class Blog extends SiteMixin {
  blog = {}
}
</script>

<style lang="scss">

</style>
