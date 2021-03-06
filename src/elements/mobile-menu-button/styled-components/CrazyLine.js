//@flow

import styled, { css } from "styled-components";

export const CrazyLine = styled.path.attrs({
  d: ({ top }: { top: boolean }): string =>
    top
      ? "M5.51471863,40.4852814 C11.1715729,34.8284271 16.8284271,29.1715729 22.4852814,23.5147186 C31,15 28,0 14,0 C-4,0 -3,26 14,26 C24,26 25.5,19 32.4852814,19 C39.4705627,19 41,25 48,25 C55,25 55.5,19 63,19 C70.5,19 67.5,23 83.5,23 C85.8333333,23 93.6666667,23 107,23"
      : "M5.51239599,63.9852814 C11.1692502,58.3284271 16.8261045,52.6715729 22.4829587,47.0147186 C30.9976774,38.5 27.9976774,23.5 13.9976774,23.5 C-4.00232264,23.5 -3.00232264,49.5 13.9976774,49.5 C23.9976774,49.5 25.4976774,42.5 32.4829587,42.5 C39.4682401,42.5 40.9976774,48.5 47.9976774,48.5 C54.9976774,48.5 55.4976774,42.5 62.9976774,42.5 C70.4976774,42.5 67.4976774,46.5 83.4976774,46.5 C85.8310107,46.5 93.664344,46.5 106.997677,46.5"
})`
  stroke-dasharray: 24 173;
  will-change: stroke-dashoffset;
  ${({
    top,
    isOpen,
    buttonStatus
  }: {
    top: boolean,
    isOpen: boolean,
    buttonStatus: string
  }) => css`
    ${buttonStatus === "willOpen" &&
      `
      stroke-dashoffset: 21;
      transition: stroke-dashoffset 0.2s;
      `}
    ${isOpen &&
      `
      stroke-dashoffset: 197;
      transition: stroke-dashoffset 1s;
      `}
    ${buttonStatus === "willClose" &&
      `
      stroke-dashoffset: 209;
      transition: stroke-dashoffset 0.2s;
      `}
    ${!isOpen &&
      buttonStatus !== "willOpen" &&
      `
      stroke-dashoffset: 25;
      transition: stroke-dashoffset 1s;
      `}
    ${!top &&
      css`
      transform: matrix(1, 0, 0, -1, 0, 87.485);
    `}
  `}
`;
