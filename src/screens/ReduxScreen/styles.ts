import styled, { css } from "styled-components/native";

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 64px;
    height: 64px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Icon = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    color: ${theme.colors.secondary90};
  `}
`;

export const Display = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary100};
    height: 64px;
    width: 72px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    color: ${theme.colors.primary};
    text-align: center;
  `}
`;
