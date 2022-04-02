import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";

const theme: DefaultTheme = {
  typography: {
    regular: {
      fontFamily: fonts.regular,
      letterSpacing: 0,
    },
    semibold: {
      fontFamily: fonts.semibold,
      letterSpacing: 0,
    },
    bold: {
      fontFamily: fonts.bold,
      letterSpacing: 0,
    },
  },
  colors: {
    primary: {
      main: colors.brand01,
      onMain: colors.neutralLightest,
    },
    backdrop: {
      main: colors.neutralDark,
      onMain: colors.neutralLightest,
    },
    background: {
      main: colors.neutralDarktest,
      onMain: colors.neutralLightest,
    },
    placeholder: {
      main: colors.neutralMedium,
      onMain: colors.neutralLightest,
    },
    error: {
      main: colors.errorDarktest,
      onMain: colors.neutralLightest,
    },
  },
  borders: {
    radius: { sm: 4 },
  },
};

export { theme };
