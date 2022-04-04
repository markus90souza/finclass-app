import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  return (
    <Container>
      <Text>Menu</Text>
    </Container>
  );
};

export { Menu };
