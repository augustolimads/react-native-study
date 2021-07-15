import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Main } from "src/screens/Main";
import { SettingsRoute } from "../SettingsRoute/SettingsRoute.route";
import { theme } from "src/theme";
import { ReduxScreen } from "src/screens/ReduxScreen";

const { Navigator, Screen } = createDrawerNavigator();

export function MainDrawerRoute() {
  return (
    <Navigator
      drawerContentOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.highlight,
      }}
      drawerStyle={{
        backgroundColor: theme.colors.secondary100,
      }}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.secondary100 },
        headerTintColor: theme.colors.primary,
      }}
    >
      <Screen name="Main" component={Main} />
      <Screen name="Redux" component={ReduxScreen} />
      <Screen name="Firebase" component={Main} />
      <Screen name="Maps" component={Main} />
      <Screen name="Tests" component={Main} />
      <Screen name="Configurations" component={SettingsRoute} />
    </Navigator>
  );
}
