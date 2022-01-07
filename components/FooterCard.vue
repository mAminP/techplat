<template>
  <v-card
    flat
    link
    :color="color"
    rounded="lg"
    dark
    class="pa-6 pa-sm-8 pa-md-12 text-h6 text-sm-h5 text-md-h4"
  >
    <v-row no-gutters class="d-flex flex-row align-center  justify-space-between">
      <v-icon
        v-if="icon"
        v-anime="anime === 'move'? {
          loop:true,
          rotate: ['-10deg','0deg','5deg','0deg','-10deg'],
          translateX: ['-40px','40px'],
          easing: 'easeInOutSine',
          direction: 'alternate',
          duration: 15000
        }:{
          loop:true,
          rotate: ['-20deg','0deg','10deg','0deg','-25deg'],
          direction: 'alternate',
          duration: 8000
        }"
        class="footer-card-icon"
      >
        {{ icon }}
      </v-icon>
      <v-col cols="12" sm="auto">
        <v-icon v-if="icon" x-large class="me-4">
          {{ icon }}
        </v-icon>

        <span class="mt-n1">
          دریافت مشاوره تلفنی رایگان
        </span>
      </v-col>
      <v-col cols="12" sm="auto" class="text-left">
        <span class="mt-n1 ff-kalameh" dir="ltr">
          021-655 77 430
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class FooterCard extends Vue {
    @Prop({ type: String, required: false, default: 'primary' }) color!:String
    @Prop({ type: String, required: false, default: 'ring' }) anime!:String // ring,move
    @Prop({ type: String, required: false, default: 'mdi-image' }) icon!:String
}
</script>

 <style scoped>
.footer-card-icon{
    position: absolute;
    font-size: 150px;
    left: 5%;
    pointer-events: none;
    opacity: 0.2;
}
</style>
