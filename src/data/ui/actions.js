//@flow

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
