import React from "react";
import { Children } from "src/@types/children";
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
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  caption?: boolean;
  center?: boolean;
};

export function Text({
  children,
  isBold,
  color,
  h1,
  h2,
  h3,
  h4,
  caption,
  center,
  ...rest
}: TextProps) {
  return (
    <S.Text
      color={color}
      isBold={isBold}
      h1={h1}
      h2={h2}
      h3={h3}
      h4={h4}
      caption={caption}
      center={center}
      {...rest}
    >
      {children}
    </S.Text>
  );
}
