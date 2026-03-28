export interface LoginReponse {
  accessToken: string
  refreshToken: string
}

export interface IUserStore {
  registerUser: (form: FormType) => Promise<boolean>
  login: (data: TLogin) => Promise<void>
}

export interface FormType {
  email: string
  userName: string
  password: string
}

export type TLogin = {
  email: string
  password: string
}
