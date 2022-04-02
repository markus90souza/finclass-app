import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { ThemeProvider, useTheme } from "styled-components/native";
import { theme } from "./theme";

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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Its Works</Text>
        <StatusBar style="light" networkActivityIndicatorVisible />
      </View>
    </ThemeProvider>
  );
}
