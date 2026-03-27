/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import { theme } from '../../assets/css/theme'

export const H1 = styled.h1<{ fontWeight?:number }>`
  display: inline-block;
  font-family: ${theme.font.family}
  font-weight: 500;
  font-size: 24px;
  color: ${theme.colors.textPrimary};
  margin: 0;
`;

export const H2=styled.h2<{ fontWeight?:number }>`
    display: inline-block;
    font-family: ${theme.font.family}
    font-weight: 500;
    font-size: 20px;
    color: ${theme.colors.textPrimary};
    margin: 0;
};
`

export const H3=styled.h3<{ fontWeight?:number }>`
    display: inline-block;
    font-family: ${theme.font.family}   
    font-weight: 400;
    font-size: 13px;
    color: ${theme.colors.textSecondary};
    `
export const Body = styled.p<{ fontWeight?: number }>`
  font-family: ${theme.font.family};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
  font-size: 14px;
  line-height: 1.6;
  color: ${theme.colors.textPrimary};
  margin: 0;
`;
    export const Caption = styled.span`
  font-family: ${theme.font.family};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${theme.colors.textSecondary};
`;

export const Label = styled.label`
  font-family: ${theme.font.family};
  font-weight: 500;
  font-size: 13px;
  line-height: 1.4;
  color: ${theme.colors.textPrimary};
  margin: 0;`

  export const Subtext = styled.div<{
  error?: boolean;
  secondary?: boolean;
  color?: string;
  strong?: boolean;
  fontWeight?: 400 | 500 | 600;
}>`
  font-weight: ${({ strong, fontWeight }) => fontWeight || (strong ? 500 : 400)};
  font-family: Poppins;
  font-size: 0.875rem;
  line-height: 1.375rem;
  ${theme.colors.textSecondary && `color: ${theme.colors.textSecondary};`}
`;