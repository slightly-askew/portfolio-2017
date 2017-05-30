//@flow

import React from "react";
import { ChevronSvg } from "./ChevronSvg";
import { Span } from "./styled-components/Span";

export const Chevron = ({
  children,
  ...props
}: {
  children: mixed,
  props: Array<{}>
}) => <Span>{children}<ChevronSvg {...props} /></Span>;
