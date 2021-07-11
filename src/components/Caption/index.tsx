import React from "react";
import { Children } from "src/@types/children";
import { ThemeProps } from "src/theme";
import * as S from "./styles";

type TextProps = {
  children: Children;
  isBold?: boolean;
  color?:
    | "primary"
    | "secondary100"
    | "highlight"
    | "heading"
    | "line"
    | "on"
    | "overlay";
};

export function Caption({ children, isBold, color }: TextProps) {
  return (
    <S.Text color={color} isBold={isBold}>
      {children}
    </S.Text>
  );
}
