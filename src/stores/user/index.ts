import { makeAutoObservable } from "mobx"
import { IRootStore } from ".."
import { FormType, IUserStore, LoginReponse, TLogin, UserData } from "./types"
import LocalStorage from "../../utils/localStorage"
import { jwtDecode } from "jwt-decode"
import axios from "axios"

export class UserStore implements IUserStore {
  public rootStore: IRootStore

  public data: FormType | undefined

  public userData: UserData = {}

  public accessToken = ""

  public refreshToken = ""

  public isLoggedIn = false

  registrationError = ""

  isLoading = false

  public async registerUser(formData: FormType) {
    this.data = formData
    const body = { ...formData }
    console.log(body)
    const respone = await axios.post<LoginReponse>(
      `http://localhost:3000/api/auth/register`,
      body,
    )
    this.accessToken = respone.data.accessToken
    LocalStorage.set("accessToken", this.accessToken)
    this.isLoggedIn = true
    this.refreshToken = respone.data.refreshToken
    return true
  }
  catch(error: any) {
    if (error.response && error.response.status === 409) {
      console.log("coming into register user method")
      this.registrationError =
        "Username already exists. Please choose another phonenumber."
    } else {
      this.registrationError = "An unexpected error occurred. Please try again."
    }
    return false
  }

  public async login(data: TLogin) {
    console.log("data", data)
    try {
      console.log("data", data)
      const respone = await axios.post<LoginReponse>(
        `http://localhost:3000/api/auth/login`,
        data,
      )
      console.log("respones", respone)
      this.accessToken = respone.data.accessToken
      LocalStorage.set("accessToken", this.accessToken)
      this.isLoggedIn = true
      this.refreshToken = respone.data.refreshToken
    } catch (error) {
      console.error("Login error:", error)
    } finally {
      this.isLoading = false
    }
  }

  public async getUserInfo() {
    const authToken = LocalStorage.get("accessToken")
    try {
      const respone = await axios.get(
        `http://localhost:3000/api/auth/profile`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      this.userData = respone.data
      console.log("userData", this.userData)
    } catch (error) {
      console.error("Get user info error:", error)
    }
  }

  public load() {
    const authToken = LocalStorage.get("accessToken")
    if (authToken) {
      this.accessToken = authToken
      this.isLoggedIn = true
      this.data = jwtDecode(this.accessToken)
    }
  }

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this, {}, { autoBind: true })
    this.load()
  }
}
