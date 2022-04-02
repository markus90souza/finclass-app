import styled from "styled-components/native";
import { ContainerProps } from "./types";

export const Container = styled.View<ContainerProps>`
  width: ${({ w }) => w || 0}px;
  height: ${({ h }) => h || 0}px;
`;
