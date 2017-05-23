//@flow

import styled, { css } from "styled-components";

export default styled.h1`

  ${({ theme }: { theme: () => string }) => css`

    ${theme.type.title};
    text-align: center;
    font-size: 4em;
    line-height: 1;
    margin: 0;
    color: #131313;
    cursor: pointer;

  `}
`;
