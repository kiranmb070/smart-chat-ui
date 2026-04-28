export interface IChatStore {
  message: Messages[]
  sendMessage: (conversationId: string, content: string) => Promise<void>
  getHistory: () => Promise<void>
}

export interface Messages {
  id: string
  conversationId: string
  content: string
}
