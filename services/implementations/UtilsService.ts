import { injectable } from 'inversify'
import { IUtilsService } from '../IUtilsService'
import Logger from '~/utils/Logger'
import { Prefix } from '~/models/Prefix'
import { $axios } from '~/utils/api'

@injectable()
export class UtilsService implements IUtilsService {
  constructor () {
    Logger.info(`[CONSTRUCTOR] ${this.constructor.name}`)
  }

  async getPrefixsAsync (): Promise<Prefix[]> {
    try {
      const res = await $axios.$get<Prefix[]>('prefix/')
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.getPrefixsAsync.name}->`, error)
      return Promise.reject(error)
    }
  }
}
