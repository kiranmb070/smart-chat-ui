import type { ReactElement } from "react"
import { PageContainer } from "./styles"

export const Page = ({ children }: { children: ReactElement }) => {
  return (
    <PageContainer flexDirection="column">
      {children}
          </PageContainer>
  )
}