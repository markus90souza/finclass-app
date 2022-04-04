import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface SearchProps {}

function Search({}: SearchProps) {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
}

export { Search };
