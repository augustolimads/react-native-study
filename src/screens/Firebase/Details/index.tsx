import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import firebase from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import { Spacer } from "src/components/Spacer";
import { Input } from "src/components/Input";
import * as S from "./styles";
import { Button } from "src/components/Button";

export function Details({ route }) {
  const { idUser } = route.params;

  const navigation = useNavigation();
  const database = firebase.firestore();
  const idTask = route.params.id;
  const [description, setDescription] = useState(route.params.description);

  function editTask(description, id) {
    database.collection(idUser).doc(id).update({
      description,
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
      <Button label="Save" onPress={() => editTask(description, idTask)} />
    </Container>
  );
}
