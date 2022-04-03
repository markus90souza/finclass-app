import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { TypographyType } from "styled-components";

export interface Props extends PressableProps {
  title: string;
  disabled?: boolean;
  outlined?: boolean;
  color?: string;
  textColor?: string;
  typography?: TypographyType;
  icon?: ReactNode;
  onPress: () => void;
}

export type ButtonProps = Pick<Props, "outlined" | "color" | "disabled">;

export interface TitleProps {
  type: TypographyType;
  color: string;
}
