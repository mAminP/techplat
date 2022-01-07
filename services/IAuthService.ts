import { LoginStep1 } from '~/models/LoginStep1'
import { RegisterReal } from '~/models/RegisterReal'
import { ApiMessage } from '~/models/ApiMessage'
import { VerifyCode } from '~/models/VerifyCode'
import { Token } from '~/models/Token'

export interface IAuthService {
    SendSmsAsync (data:LoginStep1): Promise<ApiMessage>
    OtpLoginAsync (data:VerifyCode): Promise<Token>
    VerifySmsAsync (data:VerifyCode): Promise<ApiMessage>
    RegisterRealAsync (data:RegisterReal): Promise<any>
}
