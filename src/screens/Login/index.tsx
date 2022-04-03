import { ReactNode } from "react";

import lock from "@assets/icons/lock/icon.png";

import {
  Container,
  Content,
  Header,
  OptionsRightHeader,
  LockIcon,
} from "./styles";
import { Text } from "@components/Text";
import { BackButton } from "@components/BackButton";
import { Separator } from "@components/Separator";
import { LoginForm } from "@components/Forms/LoginForm";
import { useNavigation } from "@react-navigation/native";

interface LoginProps {
  children: ReactNode;
}

const Login = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <Container>
      <Separator height={20} />
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack} />
          <OptionsRightHeader>
            <LockIcon resizeMode="contain" source={lock} />
            <Separator width={10} />
            <Text size={14}>Recuperar senha</Text>
          </OptionsRightHeader>
        </Header>

        <Separator height={30} />
        <Text type="bold" size={22}>{` Acessar \n Minha conta`}</Text>
        <Separator height={30} />
        <LoginForm />
      </Content>
    </Container>
  );
};

export { Login };
