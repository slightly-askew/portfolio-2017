//@flow

import styled, { css } from "styled-components";

export const Title = styled.h1`

  ${({ theme }: { theme: { type: { [string]: string }, scale: { [string]: () => string }, color: { [string]: string } } }) => css`

    ${theme.type.title};
    font-size: ${theme.scale.s3(3)};
    color: ${theme.color.black};

    text-align: center;
    line-height: 1;
    margin: 0;
    cursor: pointer;

  `}
`;
