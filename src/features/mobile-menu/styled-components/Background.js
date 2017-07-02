//@flow

import styled from "styled-components";

export const Background = styled.div`

${({theme}: {theme: Theme}) => `
height: 100vh;
width: 95%;
position: absolute;
left: -95%;
background-color: lightgrey;
font-size: ${theme.scale.s4()};
`}

`;
