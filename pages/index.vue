<template>
  <v-container>
    <SVGPath />
    <v-row class="mt-4">
      <v-col v-for="(item,index) in list" :key="index" cols="12">
        <InfoCard :right="index %2 ===0" :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import SiteMixin from '~/mixins/SiteMixin'
@Component({

})
export default class HomePage extends SiteMixin {
  list = [
    {
      image: '/images/Career progress-pana.png',
      title: 'عنوان عنوان 5 ',
      text: 'شرکت های کوچک بطور روز انه در گیر مسایل و مشکلات بسیاری از قبیل مدیریت منابع انسانی ، مدیریت مالی و نقدینگی، مسایل و چالش های فنی، مسایل محیطی و ارتباط با مراجع قانونی مانند بیمه، مالیات، اداره جات دولتی ... می باشند که به دلیل کوچک بودن ساختار سازمانی شرکت و تعداد کم کارکنان شرکت، رسیدگی و حل اغلب آنها بر عهده مدیران ارشد سازمان قرار می گیرد و در این شرکت ها مدیران ارشد همزمان مسؤل حل مسایل کوچک و روز مره و هم مسایل مهم و راهبردی سازمان هستند و عملا نقش چندین مدیر و کار شناس را باهم در شرکت بازی می کنند'
    }

  ]
}
</script>

<style lang="scss">

</style>
