import React from "react";
import { useTheme } from "styled-components/native";
import { Container, BackIcon } from "./styles";
import chevronLeft from "./../../assets/icons/chevron-left.png";
import { Props } from "./types";

const BackButton = ({ onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <BackIcon
        style={{
          tintColor: colors.backdrop.onMain,
        }}
        resizeMode={"contain"}
        source={chevronLeft}
      />
    </Container>
  );
};

export { BackButton };
