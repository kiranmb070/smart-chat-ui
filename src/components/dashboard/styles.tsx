import { Layout } from "antd"
import styled from "styled-components"

const { Content } = Layout

export const PageContainer = styled(Layout)`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
   display: flex;            /* ✅ IMPORTANT */
  flex-direction: row; 
`

export const ContentContainer = styled(Content)`
 flex: 1;
  background: #ffffff;
`
