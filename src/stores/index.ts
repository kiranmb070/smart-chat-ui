import { ConverstionStore } from "./converstion"
import { IConversationStore } from "./converstion/types"
import { UserStore } from "./user"
import { IUserStore } from "./user/types"

export interface IRootStore {
  userStore: IUserStore
  converstionStore: IConversationStore
}

class RootStore implements IRootStore {
  userStore: IUserStore
  converstionStore: IConversationStore
  constructor() {
    this.userStore = new UserStore(this)
    this.converstionStore = new ConverstionStore(this)
  }
}

export const rootStore = new RootStore()
