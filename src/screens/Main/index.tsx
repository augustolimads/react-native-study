import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "src/Redux/counter.store";
import { RootState } from "src/Redux/store";

import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import { Center } from "src/components/Center";
import * as S from "./styles";

export const Main = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <Center>
        <Text h1>Home Page</Text>
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
