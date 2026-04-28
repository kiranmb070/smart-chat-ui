import ChatStore from "./chat"
import { IChatStore } from "./chat/types"
import { ConverstionStore } from "./converstion"
import { IConversationStore } from "./converstion/types"
import { UserStore } from "./user"
import { IUserStore } from "./user/types"

export interface IRootStore {
  userStore: IUserStore
  converstionStore: IConversationStore
  chatStore: IChatStore
}

class RootStore implements IRootStore {
  userStore: IUserStore
  converstionStore: IConversationStore
  chatStore: IChatStore
  constructor() {
    this.userStore = new UserStore(this)
    this.converstionStore = new ConverstionStore(this)
    this.chatStore = new ChatStore(this)
  }
}

export const rootStore = new RootStore()
