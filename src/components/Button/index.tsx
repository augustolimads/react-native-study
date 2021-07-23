import React from "react";
import { PressableProps } from "react-native";
import { ActivityIndicator } from "react-native";
import { theme } from "src/theme";
import * as S from "./styles";

type ButtonProps = PressableProps & {
  label: string;
  isLoading?: boolean;
};

export function Button({ label, isLoading, ...rest }: ButtonProps) {
  return (
    <S.Button disabled={isLoading} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.highlight} />
      ) : (
        <S.ContrastText>{label}</S.ContrastText>
      )}
    </S.Button>
  );
}
