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
import { colors } from "./theme/colors";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { Separator } from "./components/Separator";
import { BackButton } from "./components/BackButton";

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

          backgroundColor: colors.neutralDarktest,
        }}
      >
        <Text>Its Works</Text>
        <Separator height={20} />
        <Button typography="bold" title="Press Me" />
        <Separator height={20} />
        <BackButton />
        <StatusBar style="light" networkActivityIndicatorVisible />
      </View>
    </ThemeProvider>
  );
}
