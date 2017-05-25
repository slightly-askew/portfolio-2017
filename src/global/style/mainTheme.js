//@flow

import { baseAdjust } from "./utils";
import { modularScale } from "polished";

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
      font-family: "Montserrat:700", Roboto, sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(0.4)};
    `,
    paragraph: `
      font-family: "Karla:400", Helvetica, sans-serif;
      font-weight: 700;
      letter-spacing: 0.04em;
      font-feature-settings: "kern", "liga", "clig", "calt", "onum", "pnum";
    `,
    label: `
      font-family: "Fira Mono:400", monospace';
      font-weight: 700;
      letter-spacing: 0.04em;
      font-variant-ligatures: common-ligatures contextual discretionary-ligatures;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(0.2)};
    `
  },

  scale: {
    s1: (n: number = 1): string => modularScale(n, "1em", "majorSecond"),
    s2: (n: number = 1): string => modularScale(n, "1em", "majorThird"),
    s3: (n: number = 1): string => modularScale(n, "1em", "perfectFourth"),
    s4: (n: number = 1): string => modularScale(n, "1em", "perfectFifth")
  },

  color: {
    background: "#fbfbfb",
    black: "#141414",
    primary: "blue"
  }
};
