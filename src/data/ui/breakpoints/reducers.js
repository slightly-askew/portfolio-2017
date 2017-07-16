// @flow

import { updateObject } from "../../reducers/utils";

export default <
  S: { breakpoints?: { [string]: {} } },
  A: { component: string, query: {} }
>(
  state: S,
  action: A
): S =>
  updateObject(state, {
    breakpoints: state.breakpoints
      ? updateObject(state.breakpoints, {
          [action.component]: updateObject(
            state.breakpoints[action.component],
            action.query
          )
        })
      : {}
  });
