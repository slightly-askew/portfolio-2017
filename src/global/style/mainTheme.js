//@flow

import { baseAdjust } from "./utils";
import { modularScale, lighten } from "polished";

export default {
  type: {
    title: `
      font-family: "Fira Sans", Helvetica, sans-serif;
      font-weight: 300;
      letter-spacing: -0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(2)};
    `,
    heading: `
      font-family: "Montserrat", Roboto, sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(0.4)};
    `,
    paragraph: `
      font-family: "Karla", Helvetica, sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-feature-settings: "kern", "liga", "clig", "calt", "onum", "pnum";
    `,
    label: `
      font-family: "Fira Mono", monospace';
      font-weight: 700;
      letter-spacing: -0.02em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(0.2)};
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
    background: "#fbfbfb",
    black: "#141414",
    primary: "blue"
  }
};

effect: {
  lighten: (a: number, c: string) => lighten(a, c);
}
