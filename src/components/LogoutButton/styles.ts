import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Button = styled.TouchableOpacity`
  margin-right: 10px;
  padding: 8px;
  border-radius: 20px;
`;

export const Icon = styled(MaterialIcons).attrs({
  name: "logout",
})`
  ${({ theme }) => css`
      color: ${theme.colors.primary}
      font-size: 24px;
    `}
`;
