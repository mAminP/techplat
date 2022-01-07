import { VerifyCode } from './VerifyCode'

/* eslint-disable camelcase */
export class RegisterReal {
    first_name!: string
    last_name!: string
    phone_details!:VerifyCode
    username!:string
    password!:string
    country_id!:number
}
