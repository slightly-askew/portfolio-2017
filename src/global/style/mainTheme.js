//@flow

import { baseAdjust } from "./utils";
import { modularScale, lighten, darken } from "polished";

export default {
  type: {
    title: `
      font-family: "Karla", Helvetica, sans-serif;
      font-weight: 300;
      letter-spacing: -0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(1.125)}
    `,
    heading: `
      font-family: "Montserrat", Roboto, sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(0.4)}
    `,
    paragraph: `
      font-family: "Karla", Helvetica, sans-serif;
      font-weight: 400;
      letter-spacing: -0.025em;
      font-feature-settings: "kern", "liga", "clig", "calt", "onum", "pnum";
      ${baseAdjust(0.714)};
    `,
    label: `
      font-family: "Fira Mono", monospace;
      font-weight: 400;
      letter-spacing: -0.02em;
      ${baseAdjust(0.3)};
    `
  },

  scale: {
    s2: (n: number = 1): string => modularScale(n, "1em", "majorThird"),
    s3: (n: number = 1): string => modularScale(n, "1em", "perfectFourth"),
    s1: (n: number = 1): string => modularScale(n, "1em", "majorSecond"),
    s4: (n: number = 1): string => modularScale(n, "1em", "perfectFifth"),
    s8: (n: number = 1): string => modularScale(n, "1em", "octave")
  },

  color: {
    background: "#f6f6f6",
    black: "#2e2e2e",
    primary: "lightblue",
    pink: "pink",
    yellow: "yellow",
    green: "lightgreen"
  },
  utils: {
    baseAdjust: (n: number): string => baseAdjust(n)
  },

  effect: {
    lighten: (a: number, c: string) => lighten(a, c),
    darken: (a: number, c: string) => darken(a, c)
  }
};
