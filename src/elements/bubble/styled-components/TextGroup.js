//@flow

//vendor
import styled from "styled-components";
import { pure } from "recompose";

//css
export const TextGroup = pure(styled.g.attrs({
  className: "Bubble__typography"
})`

  font-size: 18px;
  fill: black;
  will-change: opacity;

  ${({ isActive, theme }: { isActive: boolean, theme: Theme }): mixed => isActive && `

    opacity: ${isActive ? "0" : "1"};
    transition: opacity 0.2s 0.2s;
    ${theme.type.paragraph}

  `}
`);
