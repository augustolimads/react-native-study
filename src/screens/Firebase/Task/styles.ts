import styled, { css } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Text = styled.Text`
  font-size: 16px;
`;
export const TextContrast = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.highlight};
    font-size: 24px;
  `}
`;

export const List = styled.FlatList``;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 24px;
    align-items: center;
  `}
`;

export const Card = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 8px 20px;
`;

export const DeleteButton = styled.TouchableOpacity`
  ${({ theme }) => css`
    padding: 16px;
    align-items: center;
  `}
`;

export const Icon = styled(FontAwesome).attrs({
  name: "star",
})`
  ${({ theme }) => css`
    color: ${theme.colors.primary}
    font-size: 24px;
  `}
`;
