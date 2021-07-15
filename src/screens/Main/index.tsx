import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "src/Redux/counter.store";
import { RootState } from "src/Redux/store";

import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import { Center } from "src/components/Center";
import { Caption } from "src/components/Caption";
import { H1 } from "src/components/H1";
import * as S from "./styles";

export const Main = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <Center>
        <H1>Home Page</H1>
        <Text>Testando o texto...</Text>
        <S.Display>
          <S.Text>{count}</S.Text>
        </S.Display>
        <S.Button onPress={() => dispatch(decrement())}>
          <S.Icon>-</S.Icon>
        </S.Button>
        <S.Button onPress={() => dispatch(increment())}>
          <S.Icon>+</S.Icon>
        </S.Button>
      </Center>
    </Container>
  );
};
