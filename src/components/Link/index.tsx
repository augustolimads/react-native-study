import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "src/components/Container";
import * as S from "./styles";

export function Link({ children, route, ...rest }) {
  const navigation = useNavigation();

  function navigate(route) {
    navigation.navigate(route);
  }

  return <S.Text onPress={() => navigate(route)}>{children}</S.Text>;
}
