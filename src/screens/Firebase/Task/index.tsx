import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { database } from "src/config/firebaseconfig";
import { Container } from "src/components/Container";

import * as S from "./styles";

export function Task() {
  const navigation = useNavigation();
  const [task, setTask] = useState([]);

  function navigateNewTask() {
    navigation.navigate("NewTask");
  }

  function deleteTask(id) {
    database.collection("tasks").doc(id).delete();
  }

  function navigateDetails(item) {
    navigation.navigate("Details", {
      id: item.id,
      description: item.description,
    });
  }

  useEffect(() => {
    database.collection("tasks").onSnapshot((query) => {
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
              <S.Text onPress={() => navigateDetails(item)}>
                {item.description}
              </S.Text>
            </S.Card>
          );
        }}
      />
      <S.Button onPress={navigateNewTask}>
        <S.TextContrast>+</S.TextContrast>
      </S.Button>
    </Container>
  );
}