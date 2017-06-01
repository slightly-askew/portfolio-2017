//@flow

import React from "react";

import { SkewSpan } from "./styled-components/SkewSpan";

export const Skewify = (props: { children?: any }) => {
  const childAsArray = props.children ? props.children.split("") : [];
  const skewedChildren = childAsArray.map(
    (c, i) =>
      c !== " "
        ? <SkewSpan key={i} {...props}>{c}</SkewSpan>
        : <span>&nbsp;</span>
  );

  return <span>{skewedChildren}</span>;
};
