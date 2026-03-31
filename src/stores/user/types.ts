export interface LoginReponse {
  accessToken: string
  refreshToken: string
}

export interface IUserStore {
  isLoggedIn: boolean
  registerUser: (form: FormType) => Promise<boolean>
  login: (data: TLogin) => Promise<void>
}

export interface FormType {
  email: string
  username: string
  password: string
}

export interface formType2 {
  email: string
  password: string
}

export type TLogin = {
  email: string
  password: string
}
