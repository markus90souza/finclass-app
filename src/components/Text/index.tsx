import React from "react";
import { useTheme } from "styled-components";

import { Container } from "./styles";

import { Props } from "./types";

const Text = ({
  children,
  color,
  size = 14,
  type = "regular",
  ...rest
}: Props) => {
  const { colors } = useTheme();
  return (
    <Container
      color={color || colors.background.onMain}
      size={size}
      type={type}
      {...rest}
    >
      {children}
    </Container>
  );
};

export { Text };
