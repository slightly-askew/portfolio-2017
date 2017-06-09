//@flow

import React from "react";

import { SkewSpan } from "./styled-components/SkewSpan";

export const Skewify = (props: {
  children?: any,
  severity?: [number | string]
}) => {
  const childAsArray = props.children ? props.children.split("") : [];
  const severity = props.severity ? parseFloat(props.severity) : 1;
  const skewedChildren = childAsArray.map(
    (c, i) =>
      c !== " "
        ? <SkewSpan key={i} {...props} severity={parseFloat(severity)}>
            {c}
          </SkewSpan>
        : <span>&nbsp;</span>
  );

  return <span>{skewedChildren}</span>;
};
