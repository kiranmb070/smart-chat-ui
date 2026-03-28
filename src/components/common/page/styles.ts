import { styled } from "styled-components"
import { Flex } from "../../../ui-libary/flex"

export const PageContainer = styled(Flex)<{ centered?: boolean }>`
  min-height: 100vh;
  width: 100%;
  background: #f5f5f4;
  ${({ centered }) =>
    centered &&
    `
    justify-content: center;
    align-items: center;
  `}
`
