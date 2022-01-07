<template>
  <svg
    id="Layer_1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="1200px"
    height="600px"
    viewBox="0 0 1200 600"
    enable-background="new 0 0 1200 600"
    xml:space="preserve"
  >
    <path
      id="st-path"
      class="path black"
      fill="none"
      stroke-width="6px"
      d="M571,93.7c102.5,14,69.3,172-117.1,42.7
	C245.8-7.9-23.9,218.6,95.7,440c58.4,108.1,184.8,108.1,267.7,26.4c86.3-85,107.1-217.6,202.7-294.8
	C673.6,84.8,840.5,83.2,959,148.4c97.9,53.9,171.6,181.9,122.6,293.5c-41.4,94.2-156.8,97.4-231.6,43.9
	c-79.7-57-129.7-151.4-180.9-232.5C612.7,164,560.9,87.1,453.7,55.8C343.9,23.8,175,22.2,99.7,124.7
	C37,209.9,58.6,357.4,119.9,438.5c72,95.2,255.4,78.9,354.7,41.1c185.2-70.3,335.1-580.3,589.1-377.1
	c176.4,141.1,47.9,549.4-201.2,455.3c-80.3-30.3-132-105.7-207.7-144.3c-67.8-34.6-143.5-42.3-215.8-62.7
	c-126-35.7-261-19.3-261.4-167.1c-0.2-74,39.3-158,148-116.7S381,243,381,243"
    />
    <path
      class="path2"
      fill="none"
      stroke-width="7px"
      d="M571,93.7c102.5,14,69.3,172-117.1,42.7
	C245.8-7.9-23.9,218.6,95.7,440c58.4,108.1,184.8,108.1,267.7,26.4c86.3-85,107.1-217.6,202.7-294.8
	C673.6,84.8,840.5,83.2,959,148.4c97.9,53.9,171.6,181.9,122.6,293.5c-41.4,94.2-156.8,97.4-231.6,43.9
	c-79.7-57-129.7-151.4-180.9-232.5C612.7,164,560.9,87.1,453.7,55.8C343.9,23.8,175,22.2,99.7,124.7
	C37,209.9,58.6,357.4,119.9,438.5c72,95.2,255.4,78.9,354.7,41.1c185.2-70.3,335.1-580.3,589.1-377.1
	c176.4,141.1,47.9,549.4-201.2,455.3c-80.3-30.3-132-105.7-207.7-144.3c-67.8-34.6-143.5-42.3-215.8-62.7
	c-126-35.7-261-19.3-261.4-167.1c-0.2-74,39.3-158,148-116.7S381,243,381,243"
    />
  </svg>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  beforeDestroy () {
    window.removeEventListener('scroll', () => {})
  },
  mounted () {
    const path = document.getElementById('st-path')
    // @ts-ignore
    const length = path?.getTotalLength()

    window.addEventListener('scroll', () => {
      const bodyHeight = document.body.offsetHeight
      // calculate how far down the page the user is
      const $percentageComplete = ((window.scrollY / (bodyHeight - window.innerHeight)) * 100)

      // get the value to be subtracted from the 'stroke-dashoffset'
      const $offsetUnit = ($percentageComplete * (length / 100))

      // set the new value of the dashoffset to create the drawing effect
      // @ts-ignore
      path?.style.strokeDashoffset = `${$offsetUnit}px`
    })
  }
})
export default class SVGPath extends Vue {

}
</script>

<style>
#Layer_1 {
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  pointer-events: none;
}

.path {
  stroke-dashoffset: 7258px;
  stroke-dasharray: 550, 6900;
  /* transition: stroke-dashoffset 500ms ease-in-out */
}
.path.black {
  stroke: rgba(250, 202, 45, 0.5);
}

.path2 {
  stroke: #fff;
  stroke-dasharray: 10, 10;
}
</style>
