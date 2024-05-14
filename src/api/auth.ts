import useAddMutation from "./helper/useAddMutation"

const API = {
    login:"api/login",
    register:"api/register",
    verify:`api/verify-code`,
    sendCode:`api/resend-verification-code`,
    
}

const KEY = "AUTH"

export const useLogin = ()=>useAddMutation(KEY , API.login)
export const useRegister= ()=>useAddMutation(KEY , API.register)

export const useVerify= ()=>useAddMutation(KEY , API.verify)
export const useSendCode= ()=>useAddMutation(KEY , API.sendCode)

