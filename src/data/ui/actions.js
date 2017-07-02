//@flow
export { default as newLayout } from "./breakpoints/actions";

//open mobile navigation
export function openMobileNav() {
  return {
    type: "OPEN_MOBILE_NAV"
  };
}

//close mobile navigation
export function closeMobileNav() {
  return {
    type: "CLOSE_MOBILE_NAV"
  };
}

//togggle mobile navigation
export function toggleMobileNav() {
  return {
    type: "TOGGLE_MOBILE_NAV"
  };
}

//hover to open mobile navigation
export const newMobileMenuButtonStatus = (stateToFollow: ['willOpen' | 'willClose' | 'idle']) => {
  return {
    type: "NEW_NAV_BUTTON_STATUS",
    payload: {
      stateToFollow
    }
  }
}
