import styled, { css } from "styled-components/native";

export const Button = styled.Pressable`
  ${({ theme, color, expand }) => css`
    background-color: ${color ? color : theme.colors.primary};
    margin-top: 16px;
    padding: 16px;
    align-items: center;
    width: ${expand ? "100%" : "auto"};
  `}
`;

export const ContrastText = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 24px;
`;
