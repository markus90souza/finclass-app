import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { Text } from "@components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  padding: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 10px;
  height: 10px;
  align-self: center;
`;

export const SearchIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 10px;
  height: 10px;
  align-self: center;
  margin: 6px;
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenterText = styled(Text)`
  text-align: center;
`;

export const EmptyIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 120px;
  height: 120px;
`;
