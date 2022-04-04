import React, { useMemo } from "react";
import { useTheme } from "styled-components/native";
import { Container, IconBox, SpacingIcon, Title } from "./styles";
import { Props } from "./types";

const Button = ({
  title,
  color,
  typography = "regular",
  onPress,
  disabled,
  icon,
  outlined,
  textColor,
  ...rest
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
      onPress={onPress}
      disabled={disabled}
      outlined={outlined || disabled}
      color={color}
      {...rest}
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
