import type { ReactElement } from "react"
import { PageContainer } from "./styles"

export const Page = ({
  children,
  centered = false,
}: {
  children: ReactElement;
  centered?: boolean;
}) => {
  return <PageContainer centered={centered}>{children}</PageContainer>;
};