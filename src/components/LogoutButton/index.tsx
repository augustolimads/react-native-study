import React from "react";
import { useNavigation } from "@react-navigation/native";
import firebase from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import * as S from "./styles";

export function LogoutButton({ toRoute }) {
  const navigation = useNavigation();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate(toRoute);
      })
      .catch((error) => {});
  }

  return (
    <S.Button onPress={() => logout()}>
      <S.Icon />
    </S.Button>
  );
}
