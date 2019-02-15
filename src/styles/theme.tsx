import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;


export interface IThemeInterface {
  breakpoints: string[],
  fontSizes: number[],
  space: number[],
}

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  // colors: {
  //   blue: "#07c",
  //   lightgray: "#f6f6ff",
  // },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  // fonts: {
  //   mono: "Menlo, monospace",
  //   sans: "system-ui, sans-serif",
  // },
  // shadows: {
  //   large: "0 0 24px rgba(0, 0, 0, .125)",
  //   small: "0 0 4px rgba(0, 0, 0, .125)",
  // },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
};

export default styled;
export { css, keyframes, ThemeProvider };
