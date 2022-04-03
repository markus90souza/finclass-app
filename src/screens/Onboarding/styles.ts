import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { Text } from "./../../components/Text";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
  justify-content: space-between;
`;

export const Content = styled.View`
  margin: 0 20px;
  justify-content: flex-end;
`;

export const EmailIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ImpactPhrase = styled(Text)`
  font-size: 22px;
  text-align: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 400px;
  margin-top: -24px;
`;
