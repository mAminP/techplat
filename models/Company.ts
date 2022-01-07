import { CompanyDetails } from './CompanyDetails'

/* eslint-disable camelcase */
export class Company {
    national_id!: string
    company!: string
    zip_code!: string
    address!: string
    details!: CompanyDetails
}
