//@flow

import { updateObject, createReducer } from "../reducers/utils";

type state = {
  mobileMenuIsOpen: boolean
};

const openNav = (state: state, action) =>
  updateObject(state, { mobileMenuIsOpen: true });

const closeNav = (state: state, action) =>
  updateObject(state, { mobileMenuIsOpen: false });

const toggleNav = (state: state, action) =>
  updateObject(state, { mobileMenuIsOpen: !state.mobileMenuIsOpen });

export default createReducer(
  {},
  {
    OPEN_MOBILE_NAV: openNav,
    CLOSE_MOBILE_NAV: closeNav,
    TOGGLE_MOBILE_NAV: toggleNav
  }
);
