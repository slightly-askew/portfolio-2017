//@flow

import styled, { css } from "styled-components";

export const Title = styled.h1`

  ${({ theme }: { theme: Theme }) => css`

    ${theme.type.title};
    font-size: ${theme.scale.s2(2)};
    color: ${theme.color.black};
    z-index: 1;
    text-align: center;
    line-height: 1;
    margin: 0;

  `}
`;
