<template>
  <v-card rounded="lg" flat>
    <v-card-title
      class="ff-kalameh-bold"
      :class="`${color}--text`"
      v-text="item.title"
    />
    <v-card-subtitle class="grey--text" v-text="item.subtitle" />
    <v-card-actions>
      <v-row dense>
        <v-col>
          <v-btn :disabled="item.disable" block color="primary" outlined>
            نتیجه تعاملی
            <v-icon right>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn :disabled="item.disable" block color="primary" depressed>
            گزارش چاپی
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class PanelResultCard extends Vue {
  @Prop({ type: Object, required: true }) item!: any

  public get color (): string {
    return this.item.color || 'primary'
  }
}
</script>

<style lang="scss">
</style>
