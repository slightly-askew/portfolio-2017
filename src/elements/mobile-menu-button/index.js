//@flow

import React from "react";
import { LineGroup, MiddleLine, CrazyLine, Svg } from "./styled-components";

export const MobileMenuButton = ({
  openMobileNav,
  closeMobileNav,
  ui
}: {
  openMobileNav: () => mixed
}) =>
  <Svg>
    <g fill="none" fillRule="evenodd">
      <LineGroup>
        <CrazyLine top isOpen={ui.mobileMenuIsOpen} />
        <MiddleLine isOpen={ui.mobileMenuIsOpen} />
        <CrazyLine isOpen={ui.mobileMenuIsOpen} />
      </LineGroup>

      <g transform="translate(0 9)" fill="transparent">
        <polygon onClick={closeMobileNav} points="0 0 48 0 48 48 0 48" />
        <polygon onClick={openMobileNav} points="80 0 128 0 128 48 80 48" />
      </g>
    </g>
  </Svg>;
