//@flow

import { updateObject } from "../../reducers/utils";

export default (
  state: { breakpoints: { main: string } },
  action: { type: string, newLayout: string, component: string }
) =>
  updateObject(state, {
    breakpoints: updateObject(state.breakpoints, {
      [action.component]: action.newLayout
    })
  });
