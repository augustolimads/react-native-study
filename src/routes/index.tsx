import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Main } from "src/screens/Main";
import { colors } from "src/theme/colors";
import { SettingsRoute } from "./SettingsRoute/SettingsRoute.route";
import { theme } from "src/theme";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: colors.primary,
          inactiveTintColor: colors.highlight,
          style: { backgroundColor: theme.colors.secondary100 },
        }}
      >
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Configurations"
          component={SettingsRoute}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
