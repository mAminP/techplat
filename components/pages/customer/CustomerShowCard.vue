<template>
  <div class="text-center">
    <v-tooltip bottom :disabled="sliderItem" transition="slide-y-transition" color="white grey--text text--darken-3">
      <template #activator="{ on, attrs }">
        <v-card
          v-bind="attrs"
          rounded="xl"
          elevation="10"
          v-on="on"
        >
          <v-card-text>
            <v-img aspect-ratio="1" contain :src="customer.image" :alt="customer.title">
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
          </v-card-text>
        </v-card>
      </template>
      <span>{{ customer.title }}</span>
    </v-tooltip>
    <v-card-text v-if="sliderItem" class="d-flex flex-column">
      <span class="grey--text text--darken-3 body-2 text-sm-body-1 text-md-subtitle-1">
        {{ customer.title }}
      </span>
      <small class="grey--text body-1  text-md-caption">
        تاریخ : {{ $moment(customer.updatedAt).format('jYYYY/jMM/jDD') }}
      </small>
    </v-card-text>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class CustomerShowCard extends Vue {
@Prop({ type: Object, required: true }) customer!:any
@Prop({ type: Boolean, required: false, default: false }) sliderItem!:boolean
}
</script>

<style lang="scss">

</style>
