//@flow

import componentQueries from "react-component-queries";

export const componentQuery = componentQueries({
  queries: [
    ({ width }) => ({
      queries: {
        device: width < 728 ? "mobile" : "desktop"
      }
    })
  ]
});

//always wrap result in a queries object.
