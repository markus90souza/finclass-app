import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled(Pressable)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0px;
`;

export const Group = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightIconArrow = styled.Image`
  transform: rotate(180deg);
  width: 12px;
  height: 12px;
`;
