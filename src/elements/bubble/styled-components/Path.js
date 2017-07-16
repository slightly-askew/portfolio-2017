//@flow

import styled from "styled-components";

const Path = styled.path.attrs({
  d: props => props.pathData,
  className: "svg__path"
})`
  ${({ theme }) => `
    fill: ${theme.color.background};
    stroke-width: 1px;
    stroke: ${theme.effect.lighten(0.2, theme.color.black)};
  `}
`;

export default Path;
