//@flow

import React from "react";
import { LineGroup, MiddleLine, CrazyLine, Svg } from "./styled-components";

const TapTarget = ({
  navAction,
  polygonPoints,
  newMobileMenuButtonStatus,
  hoverAction
}: {
  navAction: () => {},
  newMobileMenuButtonStatus: string => {},
  polygonPoints: string,
  hoverAction: string
}): React$Element<*> =>
  <polygon
    onClick={navAction}
    points={polygonPoints}
    onMouseEnter={() => newMobileMenuButtonStatus(hoverAction)}
    onMouseLeave={() => newMobileMenuButtonStatus("idle")}
  />;

export const MobileMenuButton = ({
  openMobileNav,
  closeMobileNav,
  newMobileMenuButtonStatus,
  ui
}: {
  openMobileNav: () => {},
  closeMobileNav: () => {},
  newMobileMenuButtonStatus: () => {},
  ui: {
    mobileMenuIsOpen: boolean,
    mobileMenuButtonStatus: string
  }
}) => {
  const menuIsOpen = ui.mobileMenuIsOpen;
  const buttonStatus = ui.mobileMenuButtonStatus;

  return (
    <Svg>
      <g fill="none" fillRule="evenodd">
        <LineGroup>
          <CrazyLine top isOpen={menuIsOpen} buttonStatus={buttonStatus} />
          <CrazyLine isOpen={menuIsOpen} buttonStatus={buttonStatus} />
          <MiddleLine isOpen={menuIsOpen} buttonStatus={buttonStatus} />
        </LineGroup>

        <g transform="translate(0 9)" fill="transparent">
          <TapTarget
            navAction={closeMobileNav}
            newMobileMenuButtonStatus={newMobileMenuButtonStatus}
            polygonPoints="0 0 48 0 48 48 0 48"
            hoverAction="willClose"
          />
          <TapTarget
            navAction={openMobileNav}
            newMobileMenuButtonStatus={newMobileMenuButtonStatus}
            polygonPoints="80 0 128 0 128 48 80 48"
            hoverAction="willOpen"
          />
        </g>
      </g>
    </Svg>
  );
};
