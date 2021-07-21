import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import firebase from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";
import { Input } from "src/components/Input";

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
      <S.Text>Description</S.Text>
      <Input
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <Spacer flex={1} />
      <S.Button>
        <S.ContrastText onPress={addTask}>Save</S.ContrastText>
      </S.Button>
    </Container>
  );
}
