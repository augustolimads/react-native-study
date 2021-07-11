import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainDrawerRoute } from "./MainDrawerRoute";
import { theme } from "src/theme";
import { BackButton } from "src/components/BackButton";

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="MainDrawerRoute"
        headerMode="none"
        // screenOptions={{
        //   headerTintColor: theme.colors.primary,
        //   headerStyle: { backgroundColor: theme.colors.secondary100 },
        //   headerLeft: () => <BackButton />,
        // }}
      >
        <Screen name="MainDrawerRoute" component={MainDrawerRoute} />
      </Navigator>
    </NavigationContainer>
  );
}
