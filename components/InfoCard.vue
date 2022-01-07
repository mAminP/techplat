<template>
  <v-card color="transparent" flat class="fill-height">
    <v-card-text tag="p" class="my-auto">
      <kinesis-container
        event="scroll"
        :class="` float-sm-${right ? 'right' : 'left'}`"
      >
        <kinesis-element
          type="translate"
          axis="x"
          :strength="right ? -60 : 60"
        >
          <v-img
            min-width="270"
            max-width="700"
            class="mx-auto"
            :width="
              width
                ? width
                : $vuetify.breakpoint.xl
                  ? 500
                  : $vuetify.breakpoint.lg
                    ? 450
                    : $vuetify.breakpoint.md
                      ? 410
                      : $vuetify.breakpoint.sm
                        ? 300
                        : 200
            "
            aspect-ratio="1"
            contain
            :src="item.image"
          />
        </kinesis-element>
      </kinesis-container>
      <div class="">
        <HeadTitle>
          {{ item.title }}
        </HeadTitle>
        <span class="body-1 text-pre-line">
          {{ item.text }}
        </span>
      </div>
    </v-card-text>

    <v-card-actions>
      <slot name="footer" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class InfoCard extends Vue {
  @Prop({ type: Object, required: true }) item!: Object
  @Prop({ type: String, required: false }) width!: string
  @Prop({ type: Boolean, required: false, default: false }) right!: boolean
  @Prop({ type: Boolean, required: false, default: false })
    largeImage!: boolean

  @Prop({ type: Boolean, required: false, default: false }) alignV!: boolean
}
</script>

<style lang="scss">
</style>
