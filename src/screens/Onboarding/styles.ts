import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: space-between;
`;

export const Content = styled.View`
  margin: 0 20px;
  justify-content: flex-end;
`;
