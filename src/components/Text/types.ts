import { ReactNode } from "react";
import { TextProps } from "react-native";
import { PaletteType, TypographyType } from "styled-components";

export interface Props extends TextProps {
  children: ReactNode;
  type?: TypographyType;
  size?: number;
  color?: string;
}

export interface TextStylesProps {
  type: TypographyType;
  size: number;
  color: string;
}
