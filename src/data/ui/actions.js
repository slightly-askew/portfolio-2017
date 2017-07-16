//@flow
export { default as newLayout } from "./breakpoints/actions";

type OpenNavAction = {
  type: "OPEN_MOBILE_NAV"
};
type CloseNavAction = {
  type: "CLOSE_MOBILE_NAV"
};
type ToggleNavAction = {
  type: "TOGGLE_MOBILE_NAV"
};

export type ButtonStatusAction = {
  type: "NEW_NAV_BUTTON_STATUS",
  payload: {
    stateToFollow: ["willOpen" | "willClose" | "idle"]
  }
};

export type UiAction =
  | OpenNavAction
  | CloseNavAction
  | ToggleNavAction
  | ButtonStatusAction;

//open mobile navigation
export function openMobileNav(): OpenNavAction {
  return {
    type: "OPEN_MOBILE_NAV"
  };
}

//close mobile navigation
export function closeMobileNav(): CloseNavAction {
  return {
    type: "CLOSE_MOBILE_NAV"
  };
}

//togggle mobile navigation
export function toggleMobileNav(): ToggleNavAction {
  return {
    type: "TOGGLE_MOBILE_NAV"
  };
}

//hover to open mobile navigation
export const newMobileMenuButtonStatus = (
  stateToFollow: ["willOpen" | "willClose" | "idle"]
): ButtonStatusAction => {
  return {
    type: "NEW_NAV_BUTTON_STATUS",
    payload: {
      stateToFollow
    }
  };
};
