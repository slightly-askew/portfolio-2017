//@flow

import styled from "styled-components";

export const Path = styled.path.attrs({
  d: props => props.pathData,
  className: "svg__path"
})`
  ${({ theme }: Theme) => `
    fill: ${theme.color.background};
    stroke-width: 1px;
    stroke: ${theme.effect.lighten(0.2, theme.color.black)};
  `}
`;
