import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.backdrop.main};
  justify-content: center;
  align-items: center;
`;

export const BackIcon = styled.Image`
  width: 10px;
  height: 10px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
