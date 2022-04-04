import { Text } from "@components/Text";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled(Text)`
  text-align: center;
`;

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100px;
  height: 100px;
`;
