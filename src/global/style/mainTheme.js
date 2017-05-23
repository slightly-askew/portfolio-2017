import { baseAdjust } from "./utils";

export default {
  type: {
    title: `
      font-family: "Fira Sans", Helvetica, sans-serif;
      font-weight: 300;
      letter-spacing: -0.04em;
      font-feature-settings: "kern", "liga", "clig", "calt", "dlig";
      ${baseAdjust(2)};
    `,
    heading: '"Montserrat", Roboto, sans-serif',
    paragraph: '"Karla", Helvetica, sans-serif',
    label: '"Fira Mono", monospace'
  },

  scales: {}
};
