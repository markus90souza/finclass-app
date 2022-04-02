import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export interface Props extends TextInputProps {
  name?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export interface InputStyleProps {
  borderColor: string;
  hasLeftIcon: boolean;
  hasRightIcon: boolean;
}
