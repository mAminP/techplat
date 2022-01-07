<template>
  <v-bottom-sheet v-model="active" fullscreen attach="main" persistent scrollable>
    <v-card class="overflow-hidden">
      <v-card-title class="d-flex flex-row align-center justify-center">
        <Logo />
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" class="row no-gutters d-flex flex-row align-center">
              <!-- Row 1 -->
              <v-col cols="12" sm="12" md="6" class="mb-2 mb-md-6">
                <kinesis-container event="scroll">
                  <kinesis-element type="translate" axis="x" :strength="70">
                    <v-img contain aspect-ratio="1" src="/images/index/index-1.svg" />
                  </kinesis-element>
                </kinesis-container>
              </v-col>
              <v-col cols="12" sm="12" md="6" class="mb-2 mb-md-6">
                <v-card flat color="transparent">
                  <v-icon
                    v-anime="{
                      loop:true,
                      rotate: ['30deg','40deg','5deg','15deg'],
                      translateX: ['50px','40px','90px','50px'],
                      easing: 'easeInOutSine',
                      direction: 'alternate',
                      duration: 15000
                    }"
                    size="400"
                    class="primary--text float-icon"
                  >
                    mdi-help
                  </v-icon>
                  <v-list color="transparent">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon x-large class="primary--text font-weight-bold">
                          mdi-help
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <p class="body-1 text-sm-headline  text-md-h6 text-lg-h4">
                          اگر یک
                          <span class="primary--text ff-kalameh-bold">
                            شرکت کوچک
                          </span>
                          هستید و به
                          <span class="primary--text ff-kalameh-bold">
                            پایداری
                          </span>
                          کسب وکار خود علاقه مندید
                        </p>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon x-large class="warning--text font-weight-bold">
                          mdi-help
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <p class="body-1 text-sm-headline  text-md-h6 text-lg-h4">
                          اگر میخواهید ریسک های
                          <span class="warning--text ff-kalameh-bold">
                            کسب و کار
                          </span>
                          خود را به حداقل برسانید
                        </p>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon x-large class="success--text font-weight-bold">
                          mdi-help
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <p class="body-1 text-sm-headline  text-md-h6 text-lg-h4">
                          اگر خواهان
                          <span class="success--text ff-kalameh-bold">
                            رشد مستمر
                          </span>
                          ،
                          <span class="success--text ff-kalameh-bold">

                            کم هزینه                </span>
                          و
                          <span class="success--text ff-kalameh-bold">
                            اثر بخش
                          </span>
                          برای شرکت خود هستید
                        </p>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
              <!-- End Row 1 -->
              <!-- Row 2 -->
              <v-col
                order="1"
                order-md="2"
                cols="12"
                sm="12"
                md="6"
                class="mb-2 mb-md-6"
              >
                <kinesis-container event="scroll">
                  <kinesis-element type="translate" axis="x" :strength="-70">
                    <v-img contain aspect-ratio="1" src="/images/index/index-2.svg" />
                  </kinesis-element>
                </kinesis-container>
              </v-col>
              <v-col
                order="2"
                order-md="1"
                cols="12"
                sm="12"
                md="6"
                class="mb-2 mb-md-6 d-flex flex-row align-center justify-center pa-10"
              >
                <v-card tile flat color="transparent">
                  <div class="lines fill-height" style="width: 100%">
                    <v-sheet
                      color="primary"
                      class="line-1"
                    />
                    <v-sheet
                      color="primary"
                      class="line-2"
                    />
                    <v-sheet
                      color="primary"
                      class="line-3"
                    />
                    <v-sheet
                      color="primary"
                      class="line-4"
                    />
                  </div>
                  <v-img src="/images/index/index-3.svg" contain width="100%" class="float-image">
                    <v-row class="d-flex flex-row align-center justify-center fill-height pa-2">
                      <v-card-text class="body-1 text-sm-headline  text-md-h6 text-lg-h4 ">
                        ما براساس
                        <span class="ff-kalameh-bold primary--text">
                          آخرین دستاورد های جهانی
                        </span>
                        مدیریت و تجربه ارزیابی بیش از 1000 شرکت ایرانی یک
                        <span class="ff-kalameh-bold success--text">نقشه دقیق</span>
                        برای رشد شرکت شما تهیه کرده این که
                        <span class="ff-kalameh-bold warning--text">
                          قدم به قدم
                        </span>
                        به شما نشان می‌دهد
                      </v-card-text>
                    </v-row>
                  </v-img>
                </v-card>
              </v-col>
              <!-- End Row 2 -->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'vue-property-decorator'

@Component({})
export default class BottomSheet extends Vue {
    @VModel({ type: Boolean, required: false, default: false }) active!:boolean
}
</script>

<style scoped>
.float-icon{
    position: absolute;
    left: 20%;
    bottom:  2%;
    opacity: 0.1;
}
.lines{
    position: absolute;
}
.line-1{
    position: absolute;
    top: 0;
    width: 70px;
    height: 1px;
    right: 0;
}
.line-2{
    position: absolute;
    top: 0;
    height:  70px;
    width: 1px;
    right: 0;
}
.line-3{
    position: absolute;
    bottom:  0;
    width: 70px;
    height: 1px;
    left: 0;
}
.line-4{
    position: absolute;
    bottom:  0;
    height:  70px;
    width: 1px;
    left: 0;
}

</style>
