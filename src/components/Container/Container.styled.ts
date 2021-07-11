import styled, { css } from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const SafeArea = styled.SafeAreaView`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    background: ${theme.colors.background};
  `}
`;

export const InvisibleButton = styled(TouchableWithoutFeedback)`
  height: 100%;
  width: 100%;
`;

export const Keyboard = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;
