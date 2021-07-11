import React from "react";
import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import { Center } from "src/components/Center";
import { Caption } from "src/components/Caption";
import { H1 } from "src/components/H1";
// import * as S from './styles';

export const Main = () => {
  return (
    <Container>
      <Center>
        <H1>Home Page</H1>
        <Text>Testando o texto...</Text>
      </Center>
    </Container>
  );
};
