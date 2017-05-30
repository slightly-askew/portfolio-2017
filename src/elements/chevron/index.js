//@flow

import React from "react";
import type { Children } from "react";
import { ChevronSvg } from "./ChevronSvg";
import { Span } from "./styled-components/Span";

export const Chevron = ({
  children,
  ...props
}: {
  children?: Children,
  props?: Array<{}>
}) => <Span>{children ? children : null}<ChevronSvg {...props} /></Span>;
