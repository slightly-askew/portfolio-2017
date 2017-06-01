//@flow

import styled, { css } from "styled-components";
import { baseAdjust } from "../../../global/style/utils";

export const Svg = styled.svg`
  ${({ theme }: { theme: Theme }) => {
    const scale = theme.scale.s8();

    return css`

    height: ${scale};
    width: ${scale};
    ${baseAdjust(9.5)}
  
  `;
  }}
`;
