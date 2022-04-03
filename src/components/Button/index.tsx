import React, { useMemo } from "react";
import { Props } from "./types";

import { Container, IconBox, SpacingIcon, Title } from "./styles";
import { useTheme } from "styled-components/native";

const Button = ({
  title,
  color,
  typography = "regular",
  onPress,
  disabled,
  icon,
  outlined,
  textColor,
}: Props) => {
  const { colors } = useTheme();
  const titleColor = useMemo(() => {
    if (textColor) {
      return textColor;
    }
    if (disabled) {
      return colors.backdrop.main;
    }

    return outlined ? colors.backdrop.main : colors.background.main;
  }, [disabled, outlined, textColor, colors]);
  return (
    <Container
      disabled={disabled}
      outlined={outlined || disabled}
      color={color}
    >
      {!!icon && (
        <>
          <IconBox>{icon}</IconBox>
          <SpacingIcon />
        </>
      )}

      <Title color={titleColor} type={typography}>
        {title}
      </Title>
    </Container>
  );
};

export { Button };
