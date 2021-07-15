import React from "react";
import { Center } from "src/components/Center";
import { Container } from "src/components/Container";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "src/Redux/counter.store";
import * as S from "./styles";
import { RootState } from "src/Redux/store";

export function ReduxScreen() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <Center>
        <S.Content>
          <S.Button onPress={() => dispatch(decrement())}>
            <S.Icon>-</S.Icon>
          </S.Button>
          <S.Display>
            <S.Text>{count}</S.Text>
          </S.Display>
          <S.Button onPress={() => dispatch(increment())}>
            <S.Icon>+</S.Icon>
          </S.Button>
        </S.Content>
      </Center>
    </Container>
  );
}
