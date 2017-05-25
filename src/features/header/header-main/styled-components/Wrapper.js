//@flow

import styled, { css } from "styled-components";

export const Wrapper = styled.div`

  ${({ theme }: { theme: () => string }) => css`

    box-sizing: border-box;
    position: relative;
    width: 100%;
    background-color: ${theme.color.background};
    padding-top: ${theme.scale.s4(-1)};

    @media (min-width: 675px) {
      padding-top: 0;
    }
  `}
`;
