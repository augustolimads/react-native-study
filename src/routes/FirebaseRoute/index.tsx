import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Task } from "src/screens/Firebase/Task";
import { Details } from "src/screens/Firebase/Details";
import { NewTask } from "src/screens/Firebase/NewTask";
import { Login } from "src/screens/Firebase/Login";
import { NewUser } from "src/screens/Firebase/NewUser";
import { LogoutButton } from "src/components/LogoutButton";

const { Navigator, Screen } = createStackNavigator();

export function FirebaseRoute() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerRight: () => <LogoutButton toRoute="Login" />,
      }}
    >
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="NewUser"
        component={NewUser}
        options={{ headerShown: false }}
      />
      <Screen
        name="Task"
        component={Task}
        options={{
          headerLeft: () => null,
        }}
      />
      <Screen name="Details" component={Details} />
      <Screen name="NewTask" component={NewTask} />
    </Navigator>
  );
}
