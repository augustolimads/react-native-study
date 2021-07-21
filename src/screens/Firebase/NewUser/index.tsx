import React, { useState, useEffect } from "react";
import firebase from "src/config/firebaseconfig";

import { Button } from "src/components/Button";
import { Caption } from "src/components/Caption";
import { Container } from "src/components/Container";
import { Input } from "src/components/Input";
import { Link } from "src/components/Link";
import { Spacer } from "src/components/Spacer";
import { Text } from "src/components/Text";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { H2 } from "src/components/H2";

export function NewUser() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  function registerFirebase() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        //Signed in
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user?.uid });
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      })
      .finally(() => {});
  }

  useEffect(() => {}, []);

  return (
    <Container hasKeyboard>
      <Spacer size={24} />
      <S.Center>
        <H2 color="primary" isBold>
          Create a Task Account
        </H2>
      </S.Center>
      <Input
        placeholder="enter your email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />
      <Input
        placeholder="enter a password"
        secureTextEntry
        value={password}
        onChangeText={(text: string) => setPassword(text)}
      />
      {errorLogin ? (
        <S.Wrapper>
          <Caption color="primary">Invalid e-mail or password</Caption>
        </S.Wrapper>
      ) : (
        <S.Container />
      )}
      <S.Wrapper>
        <S.RegistrationWrapper>
          <Text>Alredy register? </Text>
          <Link route="Login">Login</Link>
        </S.RegistrationWrapper>
      </S.Wrapper>
      <Spacer flex={1} />
      {email === "" || password === "" ? (
        <Button label="Register" disable={true} />
      ) : (
        <Button label="Register" onPress={registerFirebase} />
      )}
    </Container>
  );
}
