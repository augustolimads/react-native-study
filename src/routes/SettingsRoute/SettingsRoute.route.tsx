import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Configurations } from "src/screens/Configurations";

const Stack = createStackNavigator();

export function SettingsRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Configurations"
        component={Configurations}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}
