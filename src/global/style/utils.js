//@flow

import { css } from "styled-components";

export const baseAdjust = (n: number) => css`
  padding-top: calc(${n}em / 16) !important;
  margin-bottom: calc(-${n}em / 16) !important;
`;
