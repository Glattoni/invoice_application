export enum Breakpoints {
  XS = 320,
  SM = 375,
  MD = 480,
  LG = 768,
  XL = 1025,
}

export const up = (breakpoint: Breakpoints) =>
  `@media (min-width: ${breakpoint}px)`;

export const down = (breakpoint: Breakpoints) =>
  `@media (max-width: ${breakpoint}px)`;

export const between = (
  breakpointMin: Breakpoints,
  breakpointMax: Breakpoints
) =>
  `@media (min-width: ${breakpointMin}px) and (max-width: ${breakpointMax}px)`;
