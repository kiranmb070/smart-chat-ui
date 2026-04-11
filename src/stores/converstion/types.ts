export interface IConversationStore {
  converstions: Conversation[]
  getConversations: () => Promise<void>
}

export interface IConversation {
  id: string
  userId: string
  title: string
  model: string
  totalTokensUsed: number
  createdAt: Date
  updatedAt: Date
}

export interface Conversation {
  id: string
  userId: string
  title: string
  model: string
  totalTokensUsed: number
  createdAt: string
  updatedAt: string
}
