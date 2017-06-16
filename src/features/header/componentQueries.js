//@flow

import componentQueries from "react-component-queries";

export const detectWidth = componentQueries({
  queries: [
    ({ width }) => ({
      queries: {
        width: width < 728 ? "mobile" : "desktop"
      }
    })
  ]
});

//always wrap result in a queries object.
