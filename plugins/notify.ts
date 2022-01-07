import { Plugin, Context } from '@nuxt/types'
import { ApiMessage } from '~/models/ApiMessage'
export interface INotify {
  error(error?: string | Error | XMLHttpRequest| unknown): void
  success(msg?: any): void
  info(msg: string): void
  show(msg: string): void
}
class Notify implements INotify {
  private readonly _: Context
  constructor (ctx: Context) { this._ = ctx }

  show (msg: string): void {
    this._.$toast.show(msg)
  }

  info (msg: string): void {
    this._.$toast.info(msg)
  }

  error (error?: string | Error | XMLHttpRequest|unknown): void {
    if (!error) {
      this._.$toast.global.error()
    } else if (typeof error === 'string') {
      this._.$toast.error(error)
    } else if (error instanceof XMLHttpRequest) {
      this._.$toast.error(error.response)
    } else if (error instanceof Error) {
      if ((error as unknown as ApiMessage).status === 'error') {
        this._.$toast.error(error.message)
        // @ts-ignore
      } else if (error.response.data.detail) {
        // @ts-ignore
        this._.$toast.error(error.response.data.detail)
      } else {
        this._.$toast.error(error.message)
      }
    } else {
      this._.$toast.global.error()
    }
  }

  success (msg?: any): void {
    if (msg && msg.status === 'success' && msg.message) {
      this._.$toast.success(msg.message)
    } else {
      this._.$toast.global.success()
    }
  }
}

const NotifyPlugin: Plugin = (_: Context, inject) => {
  inject('notify', new Notify(_))
}
export default NotifyPlugin
