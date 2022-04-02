import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

import { Onboarding } from "@screens/Onboarding";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Onboarding />
    </ThemeProvider>
  );
}
