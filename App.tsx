import React from "react";
import "src/config/ReactotronConfig";

import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "src/theme";
import { Routes } from "src/routes";
import {
  Lato_400Regular,
  Lato_700Bold,
  useFonts,
} from "@expo-google-fonts/lato";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import configureStore from "src/Redux/store";

import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={configureStore}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor={theme.colors.heading} />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
