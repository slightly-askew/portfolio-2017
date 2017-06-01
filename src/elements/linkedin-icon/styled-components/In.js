//@flow

import React from "react";
import styled, { css } from "styled-components";

const StyledPath = styled.path`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => {
    const fill = theme.color.black;

    return css`

    fill: ${fill};
    transform-origin: center center;
    ${isActive && css`
      fill: ${theme.effect.darken(0.4, fill)};
      transform: scale(1.04);
      `};
    will-change: fill transform;
    transition: all 0.1s;

  `;
  }}
`;

export const In = ({ isActive }: { isActive: boolean }) => (
  <StyledPath
    isActive={isActive}
    d="M386.392,353.192 L386.392,259.496 C386.392,209.296 359.592,185.936 323.864,185.936 C295.032,185.936 282.112,201.8 274.912,212.928 L274.912,189.776 L220.592,189.776 C221.312,205.112 220.592,353.192 220.592,353.192 L274.912,353.192 L274.912,261.928 C274.912,257.056 275.264,252.176 276.704,248.688 C280.624,238.928 289.56,228.824 304.56,228.824 C324.224,228.824 332.08,243.808 332.08,265.768 L332.08,353.2 L386.392,353.2 L386.392,353.192 Z M163.368,167.472 C182.304,167.472 194.104,154.912 194.104,139.224 C193.752,123.2 182.304,111 163.728,111 C145.152,111 133,123.192 133,139.224 C133,154.912 144.792,167.472 163.024,167.472 L163.368,167.472 Z M190.528,353.192 L190.528,189.776 L136.216,189.776 L136.216,353.192 L190.528,353.192 Z"
  />
);
