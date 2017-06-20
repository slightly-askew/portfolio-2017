//@flow

import styled, { css } from "styled-components";

export const Ul = styled.ul`
  ${({ theme }: { theme: Theme }) => css`

    padding: 0 0 0 ${theme.scale.s1(-3)};
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
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
    transition: color 0.2s;
    z-index: 1;

    & > .bubble__svg {
      right: -${theme.scale.s1(3)};
    }


  `;
  }}
`;
