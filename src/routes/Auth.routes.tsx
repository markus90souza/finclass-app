import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@screens/Onboarding";
import { Login } from "@screens/Login";

const { Navigator, Group, Screen } = createNativeStackNavigator();
const AuthRoute = () => {
  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Onboarding" component={Onboarding} />
        <Screen name="Login" component={Login} />
      </Group>
    </Navigator>
  );
};

export { AuthRoute };
