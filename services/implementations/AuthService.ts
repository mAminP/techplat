import { injectable } from 'inversify'
import { IAuthService } from '../IAuthService'
import { $axios } from '@/utils/api'
import Logger from '~/utils/Logger'
import { LoginStep1 } from '~/models/LoginStep1'
import { VerifyCode } from '~/models/VerifyCode'
import { RegisterReal } from '~/models/RegisterReal'
import { ApiMessage } from '~/models/ApiMessage'
import { Token } from '~/models/Token'
@injectable()
export class AuthService implements IAuthService {
  constructor () {
    Logger.info(`[CONSTRUCTOR] ${this.constructor.name}`)
  }

  async OtpLoginAsync (data: VerifyCode): Promise<Token> {
    try {
      const res = await $axios.$post<Token>('/auth/code-login/', data)

      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.OtpLoginAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async RegisterRealAsync (data: RegisterReal): Promise<any> {
    try {
      const res = await $axios.$post<any>('/auth/register-real/', data)

      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.RegisterRealAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async SendSmsAsync (data:LoginStep1): Promise<ApiMessage> {
    try {
      const res = await $axios.$post<ApiMessage>('auth/send-sms/', data)
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.SendSmsAsync.name}->`, error)
      return Promise.reject(error)
    }
  }

  async VerifySmsAsync (data:VerifyCode): Promise<ApiMessage> {
    try {
      const res = await $axios.$post<ApiMessage>('auth/verify-code/', data)
      return Promise.resolve(res)
    } catch (error) {
      Logger.error(`${this.constructor.name}->${this.VerifySmsAsync.name}->`, error)
      return Promise.reject(error)
    }
  }
}
