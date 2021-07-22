import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import firebase from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";
import { Input } from "src/components/Input";
import { Text } from "src/components/Text";
import { Button } from "src/components/Button";

export function NewTask({ route }) {
  const { idUser } = route.params;

  const navigation = useNavigation();
  const database = firebase.firestore();

  const [description, setDescription] = useState("");

  function addTask() {
    database.collection(idUser).add({
      description,
      status: false,
    });

    navigation.navigate("Task");
  }

  return (
    <Container hasKeyboard>
      <S.Wrapper>
        <Text h4 color="primary" isBold>
          Description
        </Text>
      </S.Wrapper>
      <Input
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <Spacer flex={1} />
      <Button label="Save" onPress={addTask} />
    </Container>
  );
}
