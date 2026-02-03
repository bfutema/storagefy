import { lightColors, darkColors } from './colors';
import { borderRadius } from './borderRadius';
import { fontWeight } from './fontWeight';
import { fontSize } from './fontSize';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';

export const lightTheme = {
  colors: lightColors,
  borderRadius,
  fontWeight,
  fontSize,
  spacing,
  breakpoints,
} as const;

export const darkTheme = {
  colors: darkColors,
  borderRadius,
  fontWeight,
  fontSize,
  spacing,
  breakpoints,
} as const;

export interface Theme {
  colors: typeof lightColors | typeof darkColors;
  borderRadius: typeof borderRadius;
  fontWeight: typeof fontWeight;
  fontSize: typeof fontSize;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
}
