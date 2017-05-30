//@flow

import styled from "styled-components";

export const Svg = styled.svg.attrs({
  viewBox: "0 0 24 24"
})`
  ${({ theme, isActive, stateful }: { theme: Theme, isActive: boolean, stateful: boolean }): string => `
  
    position: relative;
    height: ${theme.scale.s1(2)};
    width: ${theme.scale.s1(2)};
    ${theme.utils.baseAdjust(6)}
    padding-left: ${theme.scale.s3(-3)};
    transform-origin: 60% 60%;
    will-change: transform fill;
    transition: all 0.2s ease-in-out;
    ${isActive && stateful ? `
      fill: ${theme.effect.darken(0.2, theme.color.black)};
      transform: rotate(180deg);
    
    ` : ``}
  
  `}
`;
