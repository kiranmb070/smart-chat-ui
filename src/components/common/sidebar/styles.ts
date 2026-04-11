import styled from "styled-components"
import { Flex } from "../../../ui-libary/flex"

export const SidebarContianer = styled(Flex)`
  min-width: 264px;
  max-width: 280px;
  flex-direction: column;
  justify-content: space-between;
  background: #f5f5f4;
  padding: 16px 16px 0 16px;
  height: 100vh;
  scrollbar-width: none;
  box-shadow: 0px 4px 10px 0px #0000001a;
  overflow-y: auto;
`

export const Header = styled(Flex)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const Footer = styled(Flex)`
  width: 100%;
  padding: 12px;
  border-top: 1px solid #333;
  background: #f5f5f4;
`

export const ProfileData = styled(Flex)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const HistorySection = styled(Flex)`
  flex: 1;
  flex-direction: column;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 14px;
`

export const EmptyText = styled(Flex)`
  color: #aaa;
  font-size: 14px;
  margin-top: 10px;
`

export const HistroyItem = styled(Flex)`
  border-radius: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #2a2b32;
  &:hover {
    background: #ffffff;
  }

  &.active {
    background: #ffffff;
  }
`
