import * as styledComponents from "styled-components";

import {
  BASE_FONT_SIZE,
  borderRadiusMap,
  breakpointsMap,
  colors,
  fontSize,
  fontSizesMap,
  fontWeights,
  spacing,
  spacingMap,
} from '../../src/styles';
import { letterSpacing } from './typography';

interface fontSizeType {
  [key: string]: string,
}

interface colorType {
  [key: string]: string,
}

interface fontWeightsType {
  [key: string]: number,
}

interface letterSpacingType {
  [key: string]: string,
}

interface spacingType {
  [key: string]: string,
}

export interface IThemeInterface {
  BASE_FONT_SIZE: number,
  borderRadius: string[],
  breakpoints: number[],
  colors: colorType,
  fontSize: fontSizeType,
  fontSizes: number[],
  fontWeights: fontWeightsType,
  letterSpacing: letterSpacingType,
  space: string[],
  spacing: spacingType,
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export const theme = {
  BASE_FONT_SIZE,
  borderRadius: borderRadiusMap,
  breakpoints: breakpointsMap,
  colors,
  fontSize,
  fontSizes: fontSizesMap,
  fontWeights,
  letterSpacing,
  space: spacingMap,
  spacing,
};

export default styled;
export { css, keyframes, ThemeProvider };


// export type ThemeInterface = typeof theme;
