import { ReactNode } from "react";

import { Button } from "@components/Button";
import { Separator } from "@components/Separator";
import banner from "@assets/images/banner/image.png";
import emailIcon from "@assets/icons/email.png";
import { Container, Content, Banner, EmailIcon, ImpactPhrase } from "./styles";

import { useTheme } from "styled-components/native";
import { Pressable } from "react-native";

const Onboarding = () => {
  const { colors } = useTheme();

  const handleScreenLogin = () => {};
  return (
    <Container>
      <Banner resizeMode={"contain"} source={banner} />
      <Content>
        <ImpactPhrase type="bold">
          {`Aprenda a investir \n conquiste sua liberdade \n financeira`}
        </ImpactPhrase>

        <Separator height={20} />

        <Button onPress={() => {}} title="Assine agora" />

        <Separator height={20} />

        <Button
          outlined
          onPress={handleScreenLogin}
          title="Entrar com email"
          typography="semibold"
          icon={
            <EmailIcon
              style={{
                tintColor: colors.placeholder.onMain,
              }}
              source={emailIcon}
            />
          }
        />

        <Separator height={40} />
      </Content>
    </Container>
  );
};

export { Onboarding };
