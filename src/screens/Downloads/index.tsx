import React from "react";
import { Dots } from "@components/Dots";
import { Separator } from "@components/Separator";

import { downloadRoundedIcon } from "@assets/index";
import { Container, Title, Icon } from "./styles";
import { useTheme } from "styled-components/native";

interface DownloadsProps {}

const Downloads = ({}: DownloadsProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <Icon
        source={downloadRoundedIcon}
        style={{
          tintColor: colors.primary.main,
        }}
      />
      <Separator height={40} />
      <Title size={22} type={"bold"}>
        {"Você não tem downloads"}
      </Title>
      <Separator height={20} />
      <Title size={22} type={"bold"}>
        {`Os videos e aulas que baixa \n Vão aparecer aqui`}
      </Title>
      <Separator height={20} />
      <Dots amount={10} />
    </Container>
  );
};

export { Downloads };
