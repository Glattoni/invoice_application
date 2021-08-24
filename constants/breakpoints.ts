export enum Breakpoints {
  XS = 320,
  SM = 375,
  MD = 480,
  LG = 768,
  XL = 1024,
}

export const up = (breakpoint: Breakpoints) =>
  `@media (min-width: calc(${breakpoint}px + 0.02px))`;

export const down = (breakpoint: Breakpoints) =>
  `@media (max-width: ${breakpoint}px)`;

export const between = (
  breakpointMin: Breakpoints,
  breakpointMax: Breakpoints
) =>
  `@media (min-width: calc(${breakpointMin}px + 0.02px)) and (max-width: ${breakpointMax}px)`;
