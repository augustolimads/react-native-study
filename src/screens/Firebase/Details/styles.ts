import styled, { css } from "styled-components/native";

export const Text = styled.Text`
  margin-top: 24px;
  margin-left: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.TextInput`
  margin: 12px;
  border-bottom-width: 2px;
  padding: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
`;
export const Button = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  align-items: center;
`;

export const ContrastText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 24px;
`;
