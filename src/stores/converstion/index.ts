import { makeAutoObservable } from "mobx"
import { IRootStore } from ".."
import { Conversation, IConversation, IConversationStore } from "./types"
import LocalStorage from "../../utils/localStorage"
import axios from "axios"

export class ConverstionStore implements IConversationStore {
  public rootStore: IRootStore
  public converstions: Conversation[] = []

  public async getConversations() {
    const authToken = LocalStorage.get("accessToken")
    try {
      const response = await axios.get(
        `http://localhost:3000/api/conversations`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      )
      const data: IConversation[] = response.data
      this.converstions = data.map((conversation) => ({
        ...conversation,
        createdAt: new Date(conversation.createdAt).toISOString(),
        updatedAt: new Date(conversation.updatedAt).toISOString(),
      }))
    } catch (error) {
      console.error("Get conversations error:", error)
    }
  }

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore
    makeAutoObservable(this, {}, { autoBind: true })
    // this.load()
  }
}
