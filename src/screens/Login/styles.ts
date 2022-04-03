import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.main};
`;

export const Content = styled.View`
  flex: 1;
  margin: 0 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsRightHeader = styled.View`
  flex-direction: row;
`;

export const LockIcon = styled.Image`
  width: 16px;
  height: 16px;
`;
