import { Button } from "antd"
import styled from "styled-components"

export const StyledButton = styled(Button)`
  &.ant-btn-default {
    background-color: #fff;
    color: #1a1a1a;
    border-color: #d9d9d9;
  }

  &.ant-btn-default:hover,
  &.ant-btn-default:focus,
  &.ant-btn-default:active {
    background-color: #dcdcdc !important;
    border-color: #9b9b9b !important;
    color: #1a1a1a !important;
  }
`
