import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import * as S from "./styles";

export function LogoutButton({ toRoute }) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  function logout() {
    setLoading(true);
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate(toRoute);
      })
      .catch((error) => {})
      .finally(() => setLoading(false));
  }

  return (
    <S.Button onPress={() => logout()} disabled={loading}>
      <S.Icon />
    </S.Button>
  );
}
