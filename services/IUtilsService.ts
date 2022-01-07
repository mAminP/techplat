import { Prefix } from '~/models/Prefix'

export interface IUtilsService{
    getPrefixsAsync():Promise<Prefix[]>
}
