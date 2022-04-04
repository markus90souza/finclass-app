import React from "react";
import styled, { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

import { Text } from "@components/Text";

import { Home } from "@screens/Home";
import { Downloads } from "@screens/Downloads";
import { Search } from "@screens/Search";
import { Menu } from "@screens/Menu";

const { Screen, Navigator, Group } = createBottomTabNavigator();

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
          component={Home}
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
          component={Downloads}
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
          component={Search}
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
          component={Menu}
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
