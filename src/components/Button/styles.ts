import styled, { css } from "styled-components/native";

export const Button = styled.Pressable`
  ${({ theme, color }) => css`
    background-color: ${color ? color : theme.colors.primary};
  `}
  margin-top: 16px;
  padding: 16px;
  align-items: center;
`;

export const ContrastText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 24px;
`;
