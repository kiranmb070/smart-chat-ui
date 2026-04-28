// stores/chatStore.ts
import { makeAutoObservable, runInAction } from "mobx"
import axios from "axios"
import { IRootStore } from ".."
import { Messages } from "./types"

class ChatStore implements IChatStore {
  public rootStore: IRootStore
  messages: Messages[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  // ✅ GET FULL HISTORY
  async getHistory(conversationId: string) {
    const token = localStorage.getItem("accessToken")

    try {
      const res = await axios.get(
        `http://localhost:3000/api/conversations/${conversationId}/messages`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      runInAction(() => {
        this.messages = res.data // assuming array
      })
    } catch (err) {
      console.error("History error:", err)
    }
  }

  // ✅ SEND MESSAGE
  async sendMessage(conversationId: string, content: string) {
    const token = localStorage.getItem("accessToken")

    this.loading = true

    try {
      const res = await axios.post(
        `http://localhost:3000/api/conversations/${conversationId}/messages`,
        { content },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      const { userMessage, aiMessage } = res.data

      runInAction(() => {
        // 🔥 push both messages
        this.messages.push(userMessage)
        this.messages.push(aiMessage)
        this.loading = false
      })
    } catch (err) {
      console.error("Send error:", err)
      runInAction(() => (this.loading = false))
    }
  }
}

export default ChatStore
