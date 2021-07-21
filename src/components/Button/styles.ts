import styled, { css } from "styled-components/native";

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
