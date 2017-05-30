//@flow

import styled, { css } from "styled-components";

export const Title = styled.h1`

  ${({ theme }: { theme: Theme }) => css`
  
    ${theme.type.title};
    font-size: ${theme.scale.s3(2)};
    color: ${theme.color.black};
    z-index: 1;

    display: inline-block;
    text-align: center;
    line-height: 1;
    margin: 0;
    cursor: pointer;

  `}
`;
