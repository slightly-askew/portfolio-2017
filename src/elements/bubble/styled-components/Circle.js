//@flow

//vendor
import styled from "styled-components";
import { onlyUpdateForKeys } from "recompose";

//files
import findRadius from "../helpers/findRadius";

type props = {
  maskOrigin: {
    "x": number,
    "y": number
  },
  svgDimensions: {
    "x": number,
    "y": number
  },
  isActive: boolean
};

//this component is part of an SVG mask.
//do not change the fill unless you want to alter the opacity of the path
//if you want to change the fill color of the bubble you can do so in styledComponents > Paths

export const Circle = styled.circle.attrs({
  className: "bubble__mask"
})`

    fill: white;
    will-change: transform;


    ${({ isActive, maskOrigin, svgDimensions }: props): string => {
      const cx = maskOrigin.x;
      const cy = maskOrigin.y;

      return `

        cx: ${cx};
        cy: ${cy};
        r: ${findRadius(svgDimensions, maskOrigin)};
        transform-origin: ${cx}px ${cy}px;
        transform: scale(${isActive ? 1 : 0});
        transition: transform 0.2s ease-out ${isActive ? "0s" : "0s"};

    `;
    }}
`;
