//@flow

import styled from "styled-components";

type coordinates = {
  "x": number,
  "y": number
};

export const Divider = styled.rect`

  fill: black;

  ${({ origin, width, height, isActive }: { origin: coordinates, width: number, height: number, isActive: boolean }) => `

        x: ${origin.x};
        y: ${origin.y};
        height: ${height};
        width: ${width};
        transition: all 0.05s ${isActive ? "0.2s" : "0s"};
        transform: scale(${isActive ? "1" : "0"});
        opacity: (${isActive ? "1" : "0"});
      `}
`;
