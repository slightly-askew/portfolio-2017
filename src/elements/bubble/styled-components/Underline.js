//@flow

//vendor
import styled from "styled-components";

export const Underline = styled.rect.attrs({
  x: ({ origin }) => origin.x,
  y: ({ origin }) => origin.y - 4
})`
  height: 9px;
  fill: ${({ theme }: Theme) => theme.color.primary};
  transform-origin: center left;
  transform: scaleX(0);
  will-change: transform;
  transition: transform 0.2s ease-out;
`;
