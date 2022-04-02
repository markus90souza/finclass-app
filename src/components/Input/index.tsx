import React, { useMemo, useState } from "react";
import { useTheme } from "styled-components/native";

import {
  Container,
  CustomInput,
  Error,
  Content,
  EyeIcon,
  Label,
  LeftIconBox,
  ToggleEye,
  RightIconBox,
} from "./styles";
import { Props } from "./types";

import openEye from "../../assets/icons/openEye.png";
import closeEye from "../../assets/icons/closeEye.png";

const Input = ({
  name,
  error,
  secureTextEntry,
  placeholder,
  leftIcon,
  rightIcon,
  onBlur,
  onFocus,
  ...rest
}: Props) => {
  const { colors } = useTheme();

  const [hasFocus, setHasFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const borderColor = useMemo(() => {
    if (error) return colors.error.main;
    if (hasFocus) return colors.primary.main;
    return colors.background.main;
  }, [error, hasFocus, colors]);

  return (
    <Container>
      {!!name && <Label>{name}</Label>}
      <Content>
        {!!leftIcon && <LeftIconBox>{leftIcon}</LeftIconBox>}
        <CustomInput
          borderColor={borderColor}
          hasLeftIcon={!!leftIcon}
          hasRightIcon={!!rightIcon}
          onFocus={(e) => {
            setHasFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasFocus(false);
            onBlur?.(e);
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder.main}
          selectionColor={colors.placeholder.onMain}
          secureTextEntry={secureTextEntry && !showPassword}
          {...rest}
        />
        {!!rightIcon && <RightIconBox>{rightIcon}</RightIconBox>}

        {secureTextEntry && (
          <ToggleEye onPress={() => setShowPassword(!showPassword)}>
            <EyeIcon
              style={{
                tintColor: colors.placeholder.main,
              }}
              source={showPassword ? openEye : closeEye}
            />
          </ToggleEye>
        )}
      </Content>
      {!!error && <Error>{error}</Error>}
    </Container>
  );
};

export { Input };
