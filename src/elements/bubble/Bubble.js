//@flow

//vendor
import React from "react";

//styledComps
import { Svg, Circle, Path } from "./styled-components";
import Text from "./Text";
import Dividers from "./Dividers";

type coordinates = {
  "x": number,
  "y": number
};

export default (props: {
  children: {},
  d: string,
  viewBox: string,
  dividerOrigins: coordinates[],
  dividerWidth: number,
  textDimensions: coordinates,
  pathData: string,
  mask: string,
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  textItems: Array<{
    label: string,
    target: string
  }>
}) => {
  console.log(props);
  return (
    <Svg {...props}>
      <mask id="circleMask">
        <rect height="100%" width="100%" x="0" y="0" fill="#000" />
        <Circle {...props} />
      </mask>
      <Path {...props} mask="url(#circleMask)" />
      <Text {...props} elementRef={props.elementRef} mask="url(#circleMask)">
        {props.children}
      </Text>
      <Dividers {...props} mask="url(#circleMask)" />
    </Svg>
  );
};
