//@flow

import React from "react";

import { SkewSpan } from "./styled-components/SkewSpan";

export const Skewify = (props: { children?: any }) => {
  const childAsArray = props.children ? props.children.split("") : [];
  const skewedChildren = childAsArray.map((c, i) => (
    <SkewSpan key={i} {...props}>{c}</SkewSpan>
  ));

  return <span>{skewedChildren}</span>;
};
