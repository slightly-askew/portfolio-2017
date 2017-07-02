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
  maskId: string,
  d: string,
  viewBox: string,
  dividerOrigins: coordinates[],
  dividerWidth: number,
  textDimensions: coordinates,
  pathData: string,
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  textBoxSize: coordinates,
  textItems: Array<{
    label: string,
    target: string
  }>
}) => {
  console.log(props);
  return (
    <Svg {...props}>
      <mask id={props.maskId}>
        <rect height="100%" width="100%" x="0" y="0" fill="#000" />
        <Circle {...props} />
      </mask>
      <Path {...props} mask={`url(#${props.maskId})`} />
      <Text
        {...props}
        mask={`url(#${props.maskId})`}
        textBoxSize={props.textBoxSize}
      >
        {props.children}
      </Text>
      <Dividers {...props} mask={`url(#${props.maskId})`} />
    </Svg>
  );
};
