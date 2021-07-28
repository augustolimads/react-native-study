import React from "react";
import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import * as S from "./styles";

export function addNumber(a: number, b: number) {
  return a + b;
}

export function TestExample() {
  return (
    <Container>
      <Text>Template</Text>
    </Container>
  );
}
