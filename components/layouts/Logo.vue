<template>
  <div
    v-if="show"
    class="Logo"
  >
    <v-img
      :key="Math.random()"
      :width="width"
      contain
      eager
      src="/images/logo.svg"
    />
    <!-- lazy-src="/images/logo.png" -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({

})
export default class Logo extends Vue {
  @Prop({ type: String, required: false, default: '150' }) width! :string|number
show:boolean = false
mounted () {
  this.show = true
}
}
</script>

<style lang="scss">

</style>
