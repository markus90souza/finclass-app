import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@screens/Onboarding";

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
      </Group>
    </Navigator>
  );
};

export { AuthRoute };
