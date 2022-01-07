<template>
  <div class="parallax">
    <div class="parallax__container ">
      <div class="section d-flex flex-row align-center">
        <kinesis-container event="scroll">
          <kinesis-element :strength="-15" axis="x">
            <div :class="`${color} line me-2`" />
          </kinesis-element>
        </kinesis-container>
        <span class="body-1 text-md-h6 ms-1"> <slot>enter header</slot></span>

        <kinesis-container v-if="bothSide" event="scroll">
          <kinesis-element :strength="15" axis="x">
            <div :class="`${color} line ms-2`" />
          </kinesis-element>
        </kinesis-container>
      </div>
      <kinesis-container event="scroll">
        <div class="parallax__content ">
          <kinesis-element
            tag="div"
            :strength="400"
            :style="bothSide? 'max-width: auto': 'max-width: 100px'"
            class="parallax__background"
          />
        </div>
      </kinesis-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class HeadTitle extends Vue {
  @Prop({ type: String, required: false, default: 'primary' }) color!: string
  @Prop({ type: Boolean, required: false, default: false }) bothSide!: boolean
}
</script>

<style scoped >
.parallax {
  width: auto;
  position: relative;
  padding: 3px 0;
}
.parallax__container {
  height: 45px;
  position: relative;
  overflow: hidden;
}
.parallax__container:before,
.parallax__container:after {
  content: "";
  width: 100%;
  height: 10px;
  position: absolute;
  left: 0;
  z-index: 1;
}
.parallax__container:before {
 background: linear-gradient(to bottom, #fff , rgba(255, 255, 255, 0));
  top: 0;
}
.parallax__container:after {
  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
  bottom: 0;
}
.parallax__container > div {
  width: 100%;
  height: 100%;
}
.parallax__content {
  width: 100%;
  height: 100ex;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.parallax__background {
  height: 100%;
  /* max-width: 100px; */

  background:
    radial-gradient( rgba(115,115,115,0.1) 3.5px, transparent 1%) center;
  background-size: 15px 15px;
}
.parallax .section::after {
   -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  height: 5px;
  content: '';
}
.parallax .section {

  position: relative;
  z-index: 1;
  pointer-events: none;
}

/* .pattern{
    position: relative;
    z-index: 0;
}
.pattern::before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url('/images/pattern.png');
   background-position: center;  background-repeat: no-repeat;
  background-size: contain;
} */
.line {
  width: 50px;
  height: 3px;
  border-radius: 100px;
}
</style>
