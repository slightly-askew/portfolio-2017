//@flow

import { updateObject } from "../../reducers/utils";

export default (
  state: { breakpoints: { main: string } },
  action: {
    type: string,
    component: string,
    query: { [string]: string }
  }
) =>
  updateObject(state, {
    breakpoints: updateObject(state.breakpoints, {
      [action.component]: updateObject(
        state.breakpoints[action.component],
        action.query
      )
    })
  });
