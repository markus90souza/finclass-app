import styled from "styled-components/native";
import { InputStyleProps } from "./types";

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View`
  justify-content: center;
`;

export const CustomInput = styled.TextInput<InputStyleProps>`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  color: ${({ theme }) => theme.colors.backdrop.onMain};
  font-family: ${({ theme }) => theme.typography.semibold.fontFamily};
  letter-spacing: ${({ theme }) => theme.typography.semibold.letterSpacing};
  font-size: 14px;
  border-color: ${({ borderColor }) => borderColor};
  border-width: 1px;
  border-radius: ${({ theme }) => theme.borders.radius.sm}px;
  padding: 0 ${({ hasRightIcon }) => (hasRightIcon ? 40 : 16)}px 0
    ${({ hasLeftIcon }) => (hasLeftIcon ? 40 : 16)}px;
`;

export const Label = styled.Text`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.placeholder.main};
`;

export const Error = styled.Text`
  margin-top: 8px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.error.main};
`;

export const ToggleEye = styled.Pressable`
  right: 20px;
  position: absolute;
`;

export const EyeIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const LeftIconBox = styled.View`
  left: 16px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const RightIconBox = styled.View`
  right: 16px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
