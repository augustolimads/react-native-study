import React from "react";
import { Container } from "src/components/Container";
import * as S from "./styles";

export function Button({ label, ...rest }) {
  return (
    <S.Button {...rest}>
      <S.ContrastText>{label}</S.ContrastText>
    </S.Button>
  );
}
