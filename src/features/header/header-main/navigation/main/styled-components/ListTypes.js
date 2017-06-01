//@flow

import styled, { css } from "styled-components";

export const Ul = styled.ul`
  ${({ theme }: { theme: Theme }) => css`

    padding: none;
    list-style: none;
    margin: 0;

  `}
`;

export const Li = styled.li`
  ${({ theme }: { theme: Theme }) => {
    const textColor = theme.color.black;

    return css`
    ${theme.type.paragraph};
    font-size: ${theme.scale.s2(-1)};
    line-height: ${theme.scale.s8()};
    position: relative;
    padding: 0 ${theme.scale.s2(-1)};
    margin: 0;
    transition: color 0.2s;
    z-index: 1;
  `;
  }}
`;
