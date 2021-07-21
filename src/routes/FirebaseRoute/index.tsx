import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Task } from "src/screens/Firebase/Task";
import { Details } from "src/screens/Firebase/Details";
import { NewTask } from "src/screens/Firebase/NewTask";

const { Navigator, Screen } = createStackNavigator();

export function FirebaseRoute() {
  return (
    <Navigator>
      <Screen name="Task" component={Task} />
      <Screen name="Details" component={Details} />
      <Screen name="NewTask" component={NewTask} />
    </Navigator>
  );
}
