//@flow

import styled, { css } from "styled-components";

export const Title = styled.h1`

  ${({ theme }: { theme: Theme }) => css`

    position: relative;
    ${theme.type.title};
    font-size: ${theme.scale.s4(1)};
    color: ${theme.color.black};
    z-index: 1;
    text-align: center;
    line-height: 1;
    margin: 0;

  `}
`;
