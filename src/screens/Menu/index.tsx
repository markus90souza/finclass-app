import { ReactNode } from "react";

import { ScrollView } from "react-native";

import {
  Container,
  Avatar,
  ContainerEarnedItem,
  Divider,
  EarnedItemLogo,
  IconTile,
  ProfileContainer,
} from "./styles";

import { Button } from "@components/Button";
import { Separator } from "@components/Separator";
import { Text } from "@components/Text";

import {
  badgeUlrichIcon,
  subscriptionIcon,
  termsIcon,
  progressIcon,
  helpIcon,
  editIcon,
} from "@assets/index";
import { useTheme } from "styled-components/native";
import { ListTile } from "./ListTile";

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  const { colors } = useTheme();
  return (
    <Container>
      <ScrollView>
        <Separator height={20} />
        <ProfileContainer>
          <Avatar
            source={{
              uri: "https://github.com/markus90souza.png",
            }}
          />

          <Separator height={20} />

          <Text type="bold" size={22}>
            Marcos de Souza
          </Text>

          <Separator height={40} />

          <Text type="bold" size={12} color={colors.placeholder.main}>
            Minhas conquistas:
          </Text>
        </ProfileContainer>

        <Separator height={20} />

        <ContainerEarnedItem>
          <EarnedItemLogo source={badgeUlrichIcon} />
          <Separator height={12} />
          <Text
            color={colors.placeholder.main}
            size={10}
            type="bold"
            numberOfLines={1}
          >
            Investidor do futuro
          </Text>
        </ContainerEarnedItem>

        <Separator height={20} />
        <Divider />
        <Separator height={30} />

        <Text type="bold" size={12} color={colors.placeholder.main}>
          Conta
        </Text>

        <ListTile
          title={"Editar conta"}
          icon={<IconTile source={editIcon} />}
          onPress={() => {}}
        />

        <ListTile
          title={"Meu progresso"}
          icon={<IconTile source={progressIcon} />}
          onPress={() => {}}
        />

        <ListTile
          title={"Plano de assinatura"}
          icon={<IconTile source={subscriptionIcon} />}
          onPress={() => {}}
        />

        <Separator height={30} />
        <Text size={12} type={"bold"} color={colors.placeholder.main}>
          Ajustes
        </Text>
        <Separator height={20} />

        <ListTile
          title={"Configurações do aplicativo"}
          icon={<IconTile source={editIcon} />}
          onPress={() => {}}
        />

        <Separator height={30} />
        <Text size={12} type={"bold"} color={colors.placeholder.main}>
          Mais
        </Text>
        <Separator height={20} />

        <ListTile
          title={"Central do ajuda"}
          icon={<IconTile source={helpIcon} />}
          onPress={() => {}}
        />

        <ListTile
          title={"Politicas de privacidade"}
          icon={<IconTile source={termsIcon} />}
          onPress={() => {}}
        />

        <Separator height={30} />
        <Button title="Sair" typography="bold" outlined onPress={() => {}} />
        <Separator height={30} />

        <Text size={10} type={"bold"} color={colors.placeholder.main}>
          Finclass 1.3.0
        </Text>

        <Separator height={10} />
      </ScrollView>
    </Container>
  );
};

export { Menu };
