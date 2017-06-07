//@flow

//vendor
import styled, { css } from "styled-components";

export const Svg = styled.svg.attrs({
  className: "bubble__svg",
  viewBox: props => `0 0 ${props.svgDimensions.x} ${props.svgDimensions.y}`
})`
  ${({ isActive, svgDimensions }: { isActive: boolean, svgDimensions: { x: number, y: number } }) => css`
  will-change: transform opacity;
  transition: all 0s ${isActive ? "0s" : "0.2s"};
  display: block;
  height: calc(${svgDimensions.y} * 0.0583em);
  transform: scale(${isActive ? "1" : "0"});
  opacity: ${isActive ? "1" : "0"};
  position: absolute;
  right: -1.25em;
  padding: 2em 0.5em 0.5em 0.5em;
  `}
`;
