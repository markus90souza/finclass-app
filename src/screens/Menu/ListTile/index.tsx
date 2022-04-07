import React, { ReactNode } from "react";

import { Text } from "@components/Text";
import { Separator } from "@components/Separator";

import { Container, Group, RightIconArrow } from "./styles";

import { chevronLeftIcon } from "@assets/index";
import { useTheme } from "styled-components/native";

type ListTileProps = {
  icon: ReactNode;
  title: string;
  onPress?: () => void;
};

const ListTile = ({ icon, title, onPress }: ListTileProps) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <Group>
        {icon}
        <Separator width={8} />
        <Text>{title}</Text>
      </Group>
      <RightIconArrow
        source={chevronLeftIcon}
        style={{
          tintColor: colors.placeholder.main,
        }}
      />
    </Container>
  );
};

export { ListTile };
