import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export { Home };
