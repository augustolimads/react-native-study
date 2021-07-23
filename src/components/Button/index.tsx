import React from "react";
import { PressableProps } from "react-native";
import { ActivityIndicator } from "react-native";
import { theme } from "src/theme";
import * as S from "./styles";

type ButtonProps = PressableProps & {
  label: string;
  isLoading?: boolean;
  color?: string;
};

export function Button({ label, color, isLoading, ...rest }: ButtonProps) {
  return (
    <S.Button disabled={isLoading} color={color} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.background} size={32} />
      ) : (
        <S.ContrastText>{label}</S.ContrastText>
      )}
    </S.Button>
  );
}
