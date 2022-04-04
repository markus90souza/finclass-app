import React from "react";
import styled, { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator, Group } = createBottomTabNavigator();

interface IconProps {
  size: number;
}
export const Icon = styled.Image.attrs<IconProps>({
  resizeMode: "contain",
})<IconProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

import {
  downloadIcon,
  homeIcon,
  boxSearchIcon,
  boxMenuIcon,
} from "@assets/index";
import { Onboarding } from "@screens/Onboarding";
import { Text } from "@components/Text";

const AppRoutes = () => {
  const { colors } = useTheme();

  const handleSizeTo80Percentage = (size: number) => {
    return size * 0.8;
  };

  return (
    <Navigator>
      <Group
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary.main,
          tabBarInactiveTintColor: colors.background.onMain,
          tabBarStyle: {
            backgroundColor: colors.backdrop.main,
            borderTopColor: colors.backdrop.main,
          },
        }}
      >
        <Screen
          name="Home"
          component={Onboarding}
          options={{
            title: "Inicio",
            tabBarIcon: ({ size, color }) => (
              <Icon
                source={homeIcon}
                size={handleSizeTo80Percentage(size)}
                style={{
                  tintColor: color,
                }}
              />
            ),
            tabBarLabel: ({ color }) => (
              <Text color={color} type="bold" size={12}>
                {"Inicio"}
              </Text>
            ),
          }}
        />

        <Screen
          name="Downloads"
          component={Onboarding}
          options={{
            title: "Downloads",
            tabBarIcon: ({ size, color }) => (
              <Icon
                source={downloadIcon}
                size={handleSizeTo80Percentage(size)}
                style={{
                  tintColor: color,
                }}
              />
            ),
            tabBarLabel: ({ color }) => (
              <Text color={color} type="bold" size={12}>
                {"Downloads"}
              </Text>
            ),
          }}
        />

        <Screen
          name="Search"
          component={Onboarding}
          options={{
            title: "Buscar",
            tabBarIcon: ({ size, color }) => (
              <Icon
                source={boxSearchIcon}
                size={handleSizeTo80Percentage(size)}
                style={{
                  tintColor: color,
                }}
              />
            ),
            tabBarLabel: ({ color }) => (
              <Text color={color} type="bold" size={12}>
                {"Buscar"}
              </Text>
            ),
          }}
        />

        <Screen
          name="Menu"
          component={Onboarding}
          options={{
            title: "Menu",
            tabBarIcon: ({ size, color }) => (
              <Icon
                source={boxMenuIcon}
                size={handleSizeTo80Percentage(size)}
                style={{
                  tintColor: color,
                }}
              />
            ),
            tabBarLabel: ({ color }) => (
              <Text color={color} type="bold" size={12}>
                {"Menu"}
              </Text>
            ),
          }}
        />
      </Group>
    </Navigator>
  );
};

export { AppRoutes };
