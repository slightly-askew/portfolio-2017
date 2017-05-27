//@flow

import React from "react";
import styled, { css } from "styled-components";

const StyledHighlight = styled.rect`

  ${({ theme, isActive }: { theme: Theme, isActive: boolean }) => css`

    fill: ${theme.color.pink};
    will-change: transform;
    transition: transform 0.1s ease-in-out;
    transform: scaleX(0);
    transform-origin: 0px 340px;
    ${isActive && css`transform: scaleX(1);`};
    
  `}
`;

export const Highlight = ({
  isActive
}: {
  isActive: boolean
}): React$Element<*> => (
  <StyledHighlight isActive={isActive} width="520" height="136" y="270" />
);
