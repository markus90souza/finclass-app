import React from "react";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { Separator } from "@components/Separator";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { SchemaValidation } from "./validation";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const _handleSubmit = async () => {
    await handleSubmit(({ email, password }) => {})();
  };

  return (
    <Container>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <Input
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              name="E-mail"
              placeholder="Insira seu e-mail"
              onChange={onChange}
              onChangeText={(text) => setValue("email", text)}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
            />
          );
        }}
      />

      <Separator height={20} />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <Input
              autoCapitalize="none"
              autoCompleteType="password"
              name="Senha"
              placeholder="Insira sua senha"
              secureTextEntry
              onChange={onChange}
              onChangeText={(text) => setValue("password", text)}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
            />
          );
        }}
      />

      <Separator height={40} />

      <Button title="Entrar" typography="semibold" onPress={_handleSubmit} />
    </Container>
  );
};

export { LoginForm };
