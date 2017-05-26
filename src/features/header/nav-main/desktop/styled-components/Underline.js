import React from "react";
import styled from "styled-components";

const StyledUnderline = styled.span`

  ${({ isActive, theme }) => isActive && `

    position: relative;
    &:before {
      display: block;
      content: "";
      position: absolute;
      width: 100%;
      height ${theme.scale.s3(-2)};
      bottom: -0.2em;
      background-color: #bbb;
      transform-origin: bottom left;
      transform: scaleX(0);
      will-change: transform;
      transition: all 0.2s ease-out;
    }
 `}

  
`;

export const Underline = () => <StyledUnderline />;
