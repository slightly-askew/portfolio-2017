//@flow

import styled, { css } from "styled-components";

type ui = {
  breakpoints: {
    main: {
      device: ["mobile" | "desktop"]
    }
  }
};

export const Ul = styled.ul`
  ${({ theme, ui }: { theme: Theme, ui: ui }) => css`


    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    list-style: none;
    margin: 0;

    ${ui.breakpoints.main.device === "desktop" &&
      css`
      padding: 0 0 0 ${theme.scale.s1(-3)};
    `}
    ${ui.breakpoints.main.device === "mobile" &&
      css`
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin-top: 20vh;
    `}

  `};
`;

export const Li = styled.li`
  ${({ theme }: { theme: Theme }) => {
    const scale = theme.scale;

    return css`
    ${theme.type.paragraph};
    font-size: ${scale.s2(-1)};
    line-height: ${scale.s8()};
    position: relative;
    padding: 0 ${scale.s2(-1)};
    transition: color 0.2s;
    z-index: 1;

    & > .bubble__svg {
      right: -${scale.s1(3)};
    }


  `;
  }};
`;
