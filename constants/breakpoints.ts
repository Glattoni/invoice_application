export enum Breakpoints {
  XS = 320,
  SM = 375,
  MD = 480,
  LG = 768,
  XL = 1025,
}

export const up = (breakpoint: Breakpoints, orientation?: string) =>
  `@media (min-width: ${breakpoint}px) ${
    orientation ? `and (orientation: ${orientation})` : ''
  }`;

export const down = (breakpoint: Breakpoints, orientation?: string) =>
  `@media (max-width: ${breakpoint}px) ${
    orientation ? `and (orientation: ${orientation})` : ''
  }`;

export const between = (
  breakpointMin: Breakpoints,
  breakpointMax: Breakpoints,
  orientation?: string
) =>
  `@media (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px) 
  ${orientation ? `and (orientation: ${orientation})` : ''}`;
