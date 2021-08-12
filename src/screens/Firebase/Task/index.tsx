import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "src/config/firebaseconfig";
import { Container } from "src/components/Container";
import { Text } from "src/components/Text";
import * as S from "./styles";
import { Button } from "src/components/Button";

export function Task({ route }) {
  const { idUser } = route.params;
  const navigation = useNavigation();
  const database = firebase.firestore();
  const [task, setTask] = useState([]);

  function navigateNewTask() {
    navigation.navigate("NewTask", { idUser });
  }

  function deleteTask(id: string) {
    database.collection(idUser).doc(id).delete();
  }

  function navigateDetails(item) {
    navigation.navigate("Details", {
      idUser,
      id: item.id,
      description: item.description,
    });
  }

  useEffect(() => {
    database.collection(idUser).onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });

    () => {};
  }, []);

  return (
    <Container>
      <S.List
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <S.Card>
              <S.DeleteButton onPress={() => deleteTask(item.id)}>
                <S.Icon />
              </S.DeleteButton>
              <S.CardButton onPress={() => navigateDetails(item)}>
                <Text>{item.description}</Text>
              </S.CardButton>
            </S.Card>
          );
        }}
      />
      <Button onPress={navigateNewTask} label="+" />
    </Container>
  );
}
