import https from 'https'
import { Plugin } from '@nuxt/types'
const agent = new https.Agent({
  rejectUnauthorized: false
})
const plugin : Plugin = function ({ $axios }) {
  $axios.onRequest((config) => {
    config.httpsAgent = agent
    config.headers = {
      // 'Access-Control-Allow-Origin': '*'
    }
    // config.proxy = {
    // host: '104.236.174.88',
    // port: 3128
    // }
  })
  // $axios.onRequest((config) => {
  //   console.log('Making request to ' + config.url)
  // })
  // $axios.onResponse((res) => {
  //   console.log('res :>> ', res.headers)
  // })
  $axios.onError((e) => {
    // console.log('e :>> ', e)
  })
}
export default plugin
