<template>
  <v-card :color="color" class="overflow-hidden" flat rounded="lg">
    <v-row dense align="center">
      <v-col :cols="dense? 4:3">
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
      <v-col :cols="dense? 8:9" class="d-flex flex-column " align-self="stretch">
        <v-card-text :class="`${dense? 'text-subtitle-2':''}`" class=" grey--text text--darken-2 ps-3">
          <component :is="dense? 'h5':'h4'" class="ff-kalameh-bold">
            {{ item.title }}
          </component>
        </v-card-text>
        <v-card-text :class="{'text-truncate caption': dense}" class=" grey--text" v-text="item.subtitle" />
        <v-card-actions class="mt-auto">
          <v-btn :small="dense" plain>
            ادامه مطلب
            <v-icon :small="!dense" :x-small="dense" right>
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
@Prop({ type: Boolean, required: false, default: false }) dense!:boolean
@Prop({ type: String, required: false, default: 'grey lighten-4' }) color!:any
}
</script>

<style lang="scss">

</style>
