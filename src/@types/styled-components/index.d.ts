import "styled-components";
// import theme from "../../theme";

declare module "styled-components" {
  //   type ThemeType = typeof theme;
  //   export interface DefaultTheme extends ThemeType {}

  export interface Border {
    radius: {
      sm: number;
    };
  }

  export interface ColorType {
    main: string;
    onMain: string;
  }

  export type ColorsType =
    | "primary"
    | "backdrop"
    | "background"
    | "placeholder"
    | "error";

  export interface PaletteType {
    primary: ColorType;
    backdrop: ColorType;
    background: ColorType;
    placeholder: ColorType;
    error: ColorType;
  }

  export interface TypographyProps {
    fontFamily: string;
    letterSpacing: number;
  }

  export interface Typography {
    regular: TypographyProps;
    semibold: TypographyProps;
    bold: TypographyProps;
  }

  export type TypographyType = "regular" | "semibold" | "bold";

  export interface DefaultTheme {
    typography: Typography;
    colors: PaletteType;
    borders: Border;
  }
}
