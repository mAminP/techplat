<template>
  <v-card
    flat
    rounded="lg"
    class="text-center fill-height d-flex flex-column align-center"
  >
    <v-badge
      class="me-auto"
      :value="item.badge"
      dot
      overlap
      left
      offset-x="8"
      color="error"
      bordered
    />
    <v-card-text>
      <v-progress-circular
        :rotate="270"
        :size="120"
        :width="4"
        :value="item.bought ? item.score : 0"
        :color="item.bought ? color : 'grey'"
        class="body-1"
      >
        <template v-if="item.score">
          <span class="ff-kalameh-bold">
            % {{ item.score.toLocaleString("fa") }}
          </span>
        </template>
        <template v-else-if="!item.bought">
          <span class="text-pre-line"> مشاهده <br>محصول </span>
        </template>
        <template v-else-if="item.bought && !item.done">
          <span class=""> شروع کنید </span>
        </template>
      </v-progress-circular>
    </v-card-text>
    <v-card-title
      class="ff-kalameh-bold"
      :class="`${item.bought ? color : 'grey'}--text`"
      v-text="item.title"
    />
    <v-card-subtitle class="grey--text" v-text="item.subtitle" />
    <v-card-actions class="mt-auto d-flex flex-column">
      <v-btn :color="color" :outlined="item.bought" depressed>
        <template v-if="item.score === 100">
          مشاهده نتیجه
        </template>
        <template v-else-if="!item.bought">
          مشاهده محصول
        </template>
        <template v-else-if="(item.bought && !item.done) || item.score < 100">
          ادامه خودارزیابی
        </template>

        <v-icon right>
          mdi-chevron-left
        </v-icon>
      </v-btn>
      <v-btn v-if="item.score" class="mt-3" plain>
        جزئیات
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class SelfAssessmentCard extends Vue {
  @Prop({ type: Object, required: true }) item!: any
  public get color (): string {
    return this.item.color || 'primary'
  }
}
</script>

<style lang="scss">
</style>
