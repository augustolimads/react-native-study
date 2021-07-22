import styled, { css } from "styled-components/native";

export const Text = styled.Text`
  margin-top: 24px;
  margin-left: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;
