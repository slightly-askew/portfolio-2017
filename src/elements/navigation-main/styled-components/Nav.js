//@flow

import styled, {css} from "styled-components";

export const Nav = styled.nav`

opacity: 1;
background: transparent;
z-index: 10;
display: flex;
flex-grow: 1;
justify-content: space-between;
position: relative;

  ${({theme, ui}) => css`
    ${ui.breakpoints.main.device === 'desktop' && css`
      display: inline-flex;
      padding-left: 1em;
    `}
    ${ui.breakpoints.main.device === 'mobile' && css`
      flex-direction: column;
      align-items: baseline;
    `}
  `}
`;
