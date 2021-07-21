import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { database } from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import { Spacer } from "src/components/Spacer";
import * as S from "./styles";

export function NewTask() {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");

  function addTask() {
    database.collection("tasks").add({
      description,
      status: false,
    });

    navigation.navigate("Task");
  }

  return (
    <Container>
      <S.Text>Description</S.Text>
      <S.Input
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
