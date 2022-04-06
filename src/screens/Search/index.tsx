import React, { useState } from "react";
import { useTheme } from "styled-components/native";

import {
  Container,
  Header,
  SearchIcon,
  CloseIcon,
  CenterText,
  ContainerEmpty,
  EmptyIcon,
} from "./styles";

import { Separator } from "@components/Separator";
import { Text } from "@components/Text";
import { Input } from "@components/Input";

import { searchIcon, closeIcon, emptyIcon } from "@assets/index";
import { Pressable } from "react-native";
import { Dots } from "@components/Dots";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const { colors } = useTheme();
  const [search, setSearch] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  const handleClearSearch = () => setSearch("");
  return (
    <Container>
      <Separator height={20} />
      <Header>
        <Text type="bold" size={22}>
          Buscar
        </Text>
        {!!search && (
          <Text onPress={handleClearSearch} type="bold" size={22}>
            Cancelar
          </Text>
        )}
      </Header>

      <Separator height={12} />

      <Input
        onBlur={() => setHasFocus(true)}
        onFocus={() => setHasFocus(false)}
        value={search}
        onChangeText={(s) => setSearch(s)}
        placeholder={"Buscar por Titulos, Autor ou Cursos"}
        leftIcon={
          <SearchIcon
            source={searchIcon}
            style={{
              tintColor: colors.backdrop.onMain,
            }}
          />
        }
        rightIcon={
          !!search && (
            <Pressable onPress={handleClearSearch}>
              <CloseIcon
                source={closeIcon}
                style={{
                  tintColor: colors.backdrop.onMain,
                }}
              />
            </Pressable>
          )
        }
      />

      {hasFocus && (
        <>
          <Separator height={20} />
          <Text type="bold" size={22}>
            Últimas Buscas
          </Text>
          <Separator height={20} />

          <Text size={12}>Nenhuma busca recente ...</Text>
        </>
      )}

      {!!search && !hasFocus && (
        <ContainerEmpty>
          <EmptyIcon source={emptyIcon} />
          <Separator height={60} />
          <CenterText
            type="bold"
            size={22}
          >{`Nenhum resultado \n Disponivel`}</CenterText>
          <Separator height={60} />
          <Dots amount={6} />
        </ContainerEmpty>
      )}
    </Container>
  );
};

export { Search };
