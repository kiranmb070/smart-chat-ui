import styled from "styled-components"
import { Flex } from "../../../ui-libary/flex"
import { Button } from "../../../ui-libary/button"

export const LoginContainer = styled(Flex)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

export const ButtonsForm = styled(Flex)`
  justify-content: space-between;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

export const SignButton = styled(Button)`
  flex: 1;
`
