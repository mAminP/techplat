<template>
  <v-card color="grey lighten-4" class="overflow-hidden" flat rounded="lg">
    <v-row dense align="center">
      <v-col cols="3">
        <v-img aspect-ratio="1.2" :src="item.image" class="rounded-lg overflow-hidden ma-2">
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
      </v-col>
      <v-col cols="9" class="d-flex flex-column " align-self="stretch">
        <v-card-title class="ff-kalameh-bold grey--text text--darken-2" v-text="item.title" />
        <v-card-text class="grey--text" v-text="item.subtitle" />
        <v-card-actions class="mt-auto">
          <v-btn plain>
            ادامه مطلب
            <v-icon small right>
              $arrow-left
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class BlogCard extends Vue {
@Prop({ type: Object, required: true }) item!:any
}
</script>

<style lang="scss">

</style>
