<template>
  <div class="index">
    INDEX
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  layout: 'panel',
  middleware: ['auth'],
  transition: 'slide-y',
  head: {
    title: 'داشبورد'
  }
})
export default class Index extends Vue {

}
</script>
