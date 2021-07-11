import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { Main } from "src/screens/Main";
import { Configurations } from "src/screens/Configurations";
import { colors } from "src/theme/colors";
import { BackButton } from "src/components/BackButton";
import { theme } from "src/theme";

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
