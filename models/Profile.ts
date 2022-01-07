import { Company } from './Company'

/* eslint-disable camelcase */
export class Profile {
    phone_number!: string
    type!: 'REAL'|'LEGAL'
    company!:Company
}
