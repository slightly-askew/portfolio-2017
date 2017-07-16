// @flow

import { updateObject, createReducer } from "../reducers/utils";
import changeBreakpoints from "./breakpoints/reducers";
import type { ButtonStatusAction } from "./actions";

const openNav = <S: { mobileMenuIsOpen?: boolean }>(state: S): S =>
  updateObject(state, { mobileMenuIsOpen: true });

const closeNav = <S: { mobileMenuIsOpen?: boolean }>(state: S): S =>
  updateObject(state, { mobileMenuIsOpen: false });

const toggleNav = <S: { mobileMenuIsOpen?: boolean }>(state: S): S =>
  updateObject(state, { mobileMenuIsOpen: !state.mobileMenuIsOpen });

const toggleMobileNavHoverState = <S: { mobileMenuButtonStatus?: string }>(
  state: S,
  action: ButtonStatusAction
): S =>
  updateObject(state, { mobileMenuButtonStatus: action.payload.stateToFollow });

export default createReducer(
  {},
  {
    OPEN_MOBILE_NAV: openNav,
    CLOSE_MOBILE_NAV: closeNav,
    TOGGLE_MOBILE_NAV: toggleNav,
    CHANGE_BREAKPOINTS: changeBreakpoints,
    NEW_NAV_BUTTON_STATUS: toggleMobileNavHoverState
  }
);
