import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const TextInput = styled.TextInput`
  margin: 12px;
  border-bottom-width: 2px;
  padding: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`;
