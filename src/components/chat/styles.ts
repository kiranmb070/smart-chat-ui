// styles.ts
import styled from "styled-components"

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #343541;
  height: 100vh;
`

export const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

export const MessageRow = styled.div<{ role: string }>`
  display: flex;
  justify-content: ${(p) => (p.role === "USER" ? "flex-end" : "flex-start")};
`

export const Bubble = styled.div<{ role: string }>`
  max-width: 60%;
  padding: 12px;
  border-radius: 10px;
  margin: 6px 0;

  background: ${(p) => (p.role === "USER" ? "#10a37f" : "#444654")};
  color: white;
`

export const InputContainer = styled.div`
  padding: 12px;
  border-top: 1px solid #555;
  background: #343541;
`

export const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
`
