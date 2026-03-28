import { UserStore } from "./user"
import { IUserStore } from "./user/types"

export interface IRootStore {
  userStore: IUserStore
}

class RootStore implements IRootStore {
  userStore: IUserStore
  constructor() {
    this.userStore = new UserStore(this)
  }
}

export const rootStore = new RootStore()
