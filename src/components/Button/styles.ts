import styled from "styled-components/native";
import { ButtonProps, TitleProps } from "./types";

export const Container = styled.Pressable<ButtonProps>`
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.backdrop.main : theme.colors.placeholder.main};
  border-width: ${({ outlined }) => (outlined ? 1.5 : 0)}px;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  background-color: ${({ theme, outlined, color }) => {
    if (outlined) {
      return "transparent";
    }
    return color || theme.colors.primary.main;
  }};
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme, type }) => theme.typography[type].fontFamily};
  letter-spacing: ${({ theme, type }) =>
    theme.typography[type].letterSpacing}px;
  font-size: 14px;
  color: ${({ color }) => color};
`;

export const SpacingIcon = styled.View`
  width: 16px;
`;

export const IconBox = styled.View``;
