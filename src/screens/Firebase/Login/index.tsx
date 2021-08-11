import React, { useState, useEffect } from "react";
import { firebase } from "src/config/firebaseconfig";

import { Button } from "src/components/Button";
import { Container } from "src/components/Container";
import { Input } from "src/components/Input";
import { Link } from "src/components/Link";
import { Spacer } from "src/components/Spacer";
import { Text } from "src/components/Text";
import * as S from "./styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { theme } from "src/theme";

export function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  async function loginFirebase() {
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Task", { idUser: user.uid });
      }
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setErrorLogin(false);
      setEmail("");
      setPassword("");
    }, [])
  );

  return (
    <Container hasKeyboard>
      <Spacer size={24} />
      <S.Center>
        <Text h1 color="primary" isBold>
          Tasks
        </Text>
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
          <Text caption color="primary">
            Invalid e-mail or password!!!
          </Text>
        </S.Wrapper>
      ) : (
        <S.Container />
      )}
      <Spacer size={12} />
      <S.Wrapper>
        <S.RegistrationWrapper>
          <Text>Don't have a registration? </Text>
          <Link route="NewUser">Subscribe Now</Link>
        </S.RegistrationWrapper>
      </S.Wrapper>
      <Spacer flex={1} />
      {email === "" || password === "" ? (
        <Button
          label="Login"
          isLoading={loading}
          disabled={true || loading === true}
          color={theme.colors.highlight}
        />
      ) : (
        <Button
          label="Login"
          onPress={loginFirebase}
          isLoading={loading}
          color={loading ? theme.colors.highlight : theme.colors.primary}
        />
      )}
    </Container>
  );
}
